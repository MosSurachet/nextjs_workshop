import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Nav from '../components/Nav'

export const metadata = {
  title: "About Page by MOS",
  description: "NextJS About Page",
};

function AboutPage() {
  return (
    <div>
      <h3>About Page</h3>
      <p>this is content of about page</p>
      <Link href="/about/team" className='inline-block bg-purple-500 text-white py-2 px-4 rounded'>Our Team</Link>
    </div>
  )
}

export default AboutPage
