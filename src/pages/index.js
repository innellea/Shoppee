import Head from 'next/head';

import React from 'react';

import { useRouter } from 'next/router';

import { getSession } from 'next-auth/client';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title>Shoppee</title>
      </Head>
      <Header />
      <main className='mx-auto max-w-screen-2xl'>
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
      {/* TODO MAKE THIS BUTTON WORK TO SHOW PRODUCT DETAILS */}
      <div className='justify-center '>
        <Footer className='justify-center' />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('http://fakestoreapi.com/products').then((res) =>
    res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}

//TODO GET >>> http://fakestoreapi.com/products
