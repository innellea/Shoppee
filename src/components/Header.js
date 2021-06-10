import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      <div className='flex items-center flex-grow p-1 py-2 bg-amazon_blue'>
        {/* //! Top nav */}

        <div className='flex items-center flex-grow mt-2 sm:flex-grow-0'>
          <Image
            src='/images/amazon_logo.png'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>

        {/* //! Search */}
        <div className='items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500'>
          <input
            className='flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none'
            type='text'
          />
          <SearchIcon className='h-12 p-4 6' />
        </div>
        {/* Right */}
        <div className='flex items-center px-3 space-x-6 text-xs text-white whitespace-nowrap'>
          <div className=' link'>
            <p>Hello user</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className=' link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative flex items-center link'>
            <span className='absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10'>
              4
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden mt-2 font-extrabold md:inline md:text-sm '>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* //! Bottom nav */}
      <div className='flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light'>
        <p className='flex items-center link'>
          All
          <MenuIcon className='h-6 mr-1' />
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Prime Video</p>
        <p className='link'>Prime Video</p>
        <p className='hidden link lg:inline-flex'>Electronics</p>
        <p className='hidden link lg:inline-flex'>Grocery</p>
        <p className='hidden link lg:inline-flex'>Prime</p>
        <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden link lg:inline-flex'>Clothing</p>
        <p className='hidden link lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
