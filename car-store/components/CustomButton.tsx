"use client"

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'

type Props = {
    title: string,
    containerSyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType? : 'button' | 'submit'
    textStyles? : string
    rightIcon? : string
}
export const CustomButton = (prop: Props) => {
    return (
        <button
            disabled={false}
            type={prop.btnType || 'button'}
            className={`custom-btn ${prop.containerSyles}`}
            onClick={prop.handleClick}
        >
            <span className={`flex-1`}>
                {prop.title}
            </span>
        </button>
    )
}
