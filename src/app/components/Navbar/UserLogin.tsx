import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const Clerk_SignIn_Button = () => {
  return (
    <div className="flex items-center">
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl="/" aria-label="User Account Menu" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="text-base hover:text-darkOrange duration-300 cursor-pointer uppercase font-semibold">
          <FaUser className="text-gray-700 hover:text-yellow-500 text-lg cursor-pointer" />

          </Link>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};

export default Clerk_SignIn_Button;


