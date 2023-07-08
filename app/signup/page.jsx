'use client';
import React from 'react';
import Link from 'next/link';

export default function Page({ switchToLogin }) {
  return (
    <div className='fixed bg-[#0000003b] top-0 left-0 w-full h-full z-20 flex items-center justify-center'>
      <div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
        <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
          Sign up
        </h3>
        <form>
          <div className='mb-1 sm:mb-2'>
            <label
              htmlFor='firstName'
              className='inline-block mb-1 font-medium'
            >
              Full name
            </label>
            <input
              placeholder='John Doe'
              required
              type='text'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='firstName'
              name='firstName'
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='email' className='inline-block mb-1 font-medium'>
              Email
            </label>
            <input
              placeholder='john.doe@example.org'
              required
              type='email'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='lastName'
              name='lastName'
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='password' className='inline-block mb-1 font-medium'>
              Password
            </label>
            <input
              placeholder='password'
              required
              type='password'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
            />
          </div>
          <div className='mb-1 sm:mb-2'>
            <label htmlFor='email' className='inline-block mb-1 font-medium'>
              Retype password
            </label>
            <input
              placeholder='password'
              required
              type='password'
              className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
            />
          </div>
          <p className='text-xs text-gray-600 sm:text-sm'>
            Already have an account?{' '}
            <Link className='text-[#631ffc] font-semibold' href='/login'>
              SignIn.
            </Link>
          </p>
          <div className='mt-4 mb-2 sm:mb-4'>
            <button
              type='submit'
              className='inline-flex items-center bg-[#631ffc] justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
            >
              Sign up
            </button>
            <Link
              className='inline-flex items-center border-2 border-[#631ffc] mt-4 justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              href='/'
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
