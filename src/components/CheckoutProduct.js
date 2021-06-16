import { StarIcon } from '@heroicons/react/outline';

import Image from 'next/image';

import Currency from 'react-currency-formatter';

import { useDispatch } from 'react-redux';

import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  catagory,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      catagory,
      image,
      hasPrime,
    };

    //push item to redux
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    //remove item from basket
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className='grid grid-cols-5 '>
      <Image src={image} height={200} width={200} objectFit='contain' />

      {/* Middele */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>

        <p className='my-2 text-xs line-clamp-3'> {description} </p>
        <Currency quantity={price} currency='GBP' />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/Remove button */}
      <div className='flex flex-col my-auto space-y-2 justify-self-end'>
        <button className='button' onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className='button' onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
