import React from 'react'
import Image from "next/image"
import logo from "../../logo.svg"
import Link from "next/link"

const Navbar = () => {
  const links = [
    { href: "/founders", title: "Founders" },
    { href: "/guide", title: "Guide" },
    { href: "/docs", title: "Docs" },
    { href: "/pricing", title: "Pricing" },
    { href: "/blog", title: "Blog" },
    { href: "/login", title: "Log In" },
  ]

  return (
    <div className="w-full mt-0.5">
      
      <div className="flex items-center justify-evenly gap-65 py-4 px-4">

        <div  className="flex items-center">
        <Link href="/">
          <Image
            src={logo}
            height={35}
            width={65}
            alt="Finta"
          />
        </Link>
        </div>

        
        <div className="flex items-center gap-8">

          {links.map((link) => (
            <Link href={link.href} key={link.href} 
            className='text-neutral-800 font-medium hover:text-neutral-500 transition duration-100'>
              {link.title}
            </Link>
          ))}

          <button className='text-white font-semibold bg-blue-500 rounded-lg shadow-lg text-shadow-md p-2 h-10 w-28 hover:bg-blue-600'>Get started</button>

          

        </div>

      </div>
    </div>
  )
}

export default Navbar