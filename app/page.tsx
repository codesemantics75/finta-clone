import Image from "next/image";
import img from "./components/img.png"
import Container from "./components/container"
import React from 'react'
import Navbar from "./components/navbar"
import Hero from "./components/hero"


export const page = () => {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(ellipse_at_bottom,_theme(colors.blue.100),_white_70%)]">
      <div className="max-w-full h-screen mx-auto absolute inset-0 h-full w-full pointer-events-none">
        <div className="absolute inset-y-0 left-0 h-full w-[0.2px] bg-gray-200 ml-50"/>
        <div className=" absolute inset-y-0 right-0 h-full w-[0.2px]  bg-gray-200 mr-50"/>
       <div className="absolute h-px w-full inset-x-0 top-0 bg-gray-200 mt-160" />

        
      </div>
     
    <Container> 
      <Navbar>
      
      </Navbar>
      
      </Container>

      <Hero/>
      <div>
        
        <Image src={img} alt="description of image" width={1100} height={1100} className="mt-25" />
      </div>
   
      
     
    </div>
     
  )
}

export default page
