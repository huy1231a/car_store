"use client"

import React from 'react'
import '../app/globals.css'
import { CustomButton } from '.';
import Image from 'next/image'

const Hero = () => {

    const handleClick = () => {
        console.log('hi');

    };

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book or rent a car -- quickly and easily
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless booking process
                </p>

                <CustomButton
                    title='Explore Car'
                    containerSyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleClick}
                    btnType='button'
                />
            </div>

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/vf7-2023.png" alt="hero" fill className='object-contain' />

                    <div className='hero__image-overlay'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero