import { StarIcon, Star } from '@heroicons/react/solid';

import React, { useState } from 'react';

import Image from 'next/image';

import Currency from 'react-currency-formatter';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';

import { addToBasket } from '../slices/basketSlice';

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const MIN_RATING = 1;
  const MAX_RATING = 5;
  const [rating] = useState(
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
      rating,
      hasPrime,
    };

    // Sending the product via an action to the redux store (= basket "slice")
    dispatch(addToBasket(product));

    toast.success(
      <>
        <span className='font-bold'>Added to basket!</span>
        <br />
        {product.title.slice(0, 30)}
        {product.title.length > 30 ? '…' : ''}
      </>,
      {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 20,
        progress: undefined,
      }
    );
  };

  return (
    <div className='relative z-30 flex flex-col p-10 m-5 bg-white growing-hover'>
      <p className='absolute text-sm italic text-gray-400 top-2 right-3'>
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit='contain' />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='my-2 text-xs line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <Currency quantity={price} currency='EUR' />
      </div>

      {hasPrime && (
        <div className='flex items-center -mt-5 space-x-2'>
          <img
            loading='lazy'
            className='w-12'
            src='https://links.papareact.com/fdw'
            alt=''
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className='mt-auto button'>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
