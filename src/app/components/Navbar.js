'use client';
import Link from 'next/link';
import Logo from '@/app/components/Logo';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-8 px-10 h-12 bg-orange-500'>
      <div className='logo'>
        <h1><Logo /></h1>
      </div>
      <nav>
        <ul className='flex justify-center items-center gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            About
          </li>
        </ul>
      </nav>
    </div>
  );
}
