"use client"
import React from 'react'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
const MobileGalery = () => {
  return (
    <ParallaxProvider>

    <div className='flex gap-10 mx-auto my-10 justify-center align-middle overflow-hidden h-[38rem] max-w-[1600px]'>
        <Parallax speed={10}><Image src="/assets/images/iphone_01.png" width={279} height={576} /></Parallax>
        <Parallax speed={30}><Image src="/assets/images/iphone_02.png" width={279} height={576} /></Parallax>
        <Parallax speed={10}><Image src="/assets/images/iphone_03.png" width={279} height={576} /></Parallax>
        <Parallax speed={30}><Image src="/assets/images/iphone_04.png" width={279} height={576} /></Parallax>
        <Parallax speed={10}><Image src="/assets/images/iphone_05.png" width={279} height={576} /></Parallax>

       


    </div>
    </ParallaxProvider>

  )
}

export default MobileGalery