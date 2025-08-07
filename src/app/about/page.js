'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function page() {
  const [showImage, setShowImage] = useState(false);

  const hobbies = [];

  return (
    <div className='max-w-[1200px] my-8 mx-auto pt-11'>
      <div class='grid'>
        <div class='image_container col_6 '>
          
        </div>
        <div class='content_container col_6 '>
          
        </div>
      </div>
    </div>
  );
}
