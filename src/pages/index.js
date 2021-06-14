import Head from 'next/head';
import React from 'react';

// components
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home({ products }) {
  const router = useRouter({});

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

export async function getServerSideProps() {
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
