import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {

    const handleLogin = () => {
        console.log('login btn');
        
    }
    return ( 
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image 
                        src='/logo.svg'
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <CustomButton 
                    title='Sign - In'
                    containerSyles='text-white bg-blue-500  rounded-full  min-w-[130px]'
                    btnType='button'
                />
            </nav>
        </header>
    )
}

export default Navbar