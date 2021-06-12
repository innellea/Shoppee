import React, { useState } from 'react';
// comps
import Image from 'next/image';
// deps
import Currency from 'react-currency-formatter';
// redux
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
// assets
import { StarIcon, Star } from '@heroicons/react/solid';

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const MIN_RATING = 1;
  const MAX_RATING = 5;
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    // Sending the product as an action to the REDUX store...the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className='relative z-30 flex flex-col p-10 m-5 bg-white'>
      <p className='absolute text-xs italic text-gray-400 top-2 right-2'>
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4 className='my-3 line-clamp-1'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500 cursor-pointer' />
          ))}
      </div>

      <p className='mt-2 mb-2 text-xs line-clamp-2'>{description}</p>

      <div className='mb-5 '>
        <Currency quantity={price} currency='GBP' />
      </div>

      <button onClick={addItemToBasket} className=' button'>
        Add to Cart
      </button>
      {hasPrime && (
        <div className='flex items-center mt-5 space-x-2 '>
          <img
            src='/images/prime_logo.png'
            className='w-12'
            alt='prime delivery'
          />
          <p className='text-xs text-gray-500 '>Free Next-day Delivery</p>
        </div>
      )}
    </div>
  );
}

export default Product;
