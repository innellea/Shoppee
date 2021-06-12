import Head from 'next/head';
import React from 'react';

// components
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className='mx-auto max-w-screen-2xl'>
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('http://fakestoreapi.com/products').then((res) =>
    res.json()
  );

  return {
    props: {
      products,
    },
  };
}

//TODO GET >>> http://fakestoreapi.com/products
