import React from 'react'
import Link from 'next/link'
import nextImg from '../../../../public/next.svg'
import vercelImg from '../../../../public/vercel.svg'
import Image from 'next/image'
import Header from "../../components/Header";
import Nav from "../../components/Nav";

function page() {
  return (
    <div>
      <Header />
      <Nav />
      <h3>Our Team</h3>
      <Image src={nextImg} width={300} height={100} alt='next image' />
      <Image src={vercelImg} width={300} height={100} alt='vercel image' />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cumque ab quod accusamus quidem. Suscipit voluptate voluptatum dignissimos laudantium nam?</p>
      <Link href="/about" className='inline-block bg-purple-500 text-white py-2 px-4 rounded'>Back</Link>
    </div>
  )
}

export default page
