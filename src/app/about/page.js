'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  const [showImage, setShowImage] = useState(false);

  const hobbies = [
    {
    nombre:"Dibujar",
    gusto:70,
    id:1,
  },{
    nombre:"Escribir",
    gusto:80,
    id:2,
  },{
    nombre:"Observacion de aves",
    gusto:90,
    id:3,
  },{
    nombre:"Videojuegos",
    gusto:60,
    id:4,
  },
  {
    nombre:"Scrapbooking",
    gusto:70,
    id:5,
  }

];

const showCuteKitty = useCallback(() => {
  setShowImage(true);
},[]);

useEffect(() => {showCuteKitty}, [showCuteKitty]);

  return (
    <div className='max-w-[1200px] my-8 mx-auto pt-11'>
      <div className='grid'>
        <div className='image_container col_6 '>
          { showImage && 
          <Image
            src={"/assets/siamese.jpg"}
            alt={"Foto de gatito siamés"}
            height={400}
            width={200}
            className='lg:w-[80%] mx-auto'
            />
          }
          {!showImage && <button className='mx-auto bg-orange-600 font-bold rounded-2xl p-2.5 py-3 lg:w-full w-[50%] ml-10 lg:text-1xl text-2xl' onClick={() => {showCuteKitty()}}>Ver Imagen</button>}
        </div>
        <div className='content_container col_6 px-10 '>
          <h2 className='lg:text-3xl text-4xl font-bold  text-orange-600 mb-2.5'>Victoria Mobilia</h2>
          <p className=' mb-2.5'>Me llamo Victoria, y en realidad soy un androide controlado por un chihuahua potenciado con Chat GPT-666.  Me gustan los animales, la flora y todo lo que la tierra ofrece. Me gusta programar, aunque parte de mi desearia que no empeore mi miopía. Se que lees mis pensamientos, profesor. Miau miau miau miau miau miau miau miau miau miau :3</p>
          <p className='mb-2.5 lg:text-[1em] text-[1.25em]'>Mi instagram / portafolio es <Link href={"https://www.instagram.com/herbertia_art/"} className='font-bold text-orange-600 mb-2.5'>@herbertia_art</Link></p>
          <p className='mb-1.5 lg:text-[1em] text-[1.25em]'>Mis hobbies (y cuanto me gusta c/u) son:</p>
          <ul>
            {hobbies.map(hobby =>
              <li className='list-disc ml-5 font-bold mb-1.5 marker:text-orange-500 lg:text-[1em] text-[1.25em]' key={hobby.id}>{hobby.nombre} ({hobby.gusto}%)</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
