import Header from '../components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
function success() {
  const router = useRouter({});
  return (
    <div className='h-screen bg-grey-100'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10' bg-white>
          <div className='flex items-center mb-5 space-x-2'>
            <CheckCircleIcon className='h-10 text-green-500' />'
            <h1 className='text-3xl '>
              Thank you, your order has been confirmed
            </h1>
          </div>
          <p>
            {' '}
            We’ve gotten your order and are preparing to send it. You still
            might be able to cancel the order.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className='mt-8 button '
          >
            Go to my Orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
