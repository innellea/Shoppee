import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />
      <main className='max-w-screen-2xl'>
        {/* Banner */}

        {/* ProductFeed */}
      </main>
    </div>
  );
}
