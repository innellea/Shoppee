import moment from 'moment';
import { useSession } from 'next-auth/client';
import { getSession } from 'next-auth/client';
import Header from '../components/Header';
import db from '../../firebase';
import Order from '../components/Order';
function Orders({ orders }) {
  const [session] = useSession();
  console.log(orders);
  return (
    <div>
      <Header />
      <main className='p-10 mx-auto max-w-scren-lg'>
        <h1 className='pb-1 mb-2 text-3xl border-b border-yellow-400'>
          Your orders
        </h1>
        {session ? (
          <h2 className='text-base'>{orders.length} orders</h2>
        ) : (
          <h2>Please sign-in to check your orders</h2>
        )}
        <div className='mt-5 space-y-5'>
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                images={images}
                timestamp={timestamp}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in credentials...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // Firebase db
  const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  // Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
