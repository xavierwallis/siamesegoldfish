import { RiMenu5Line, RiCloseFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link'
import absoluteUrl from 'next-absolute-url';
import { useEffect, useState } from 'react';

export default function Navbar () {
    const [windowOrigin, setOrigin] = useState('/');
    const [windowWidth, setWidth] = useState();
    const [isOpen, setOpen] = useState(false);

    useEffect(()=>{
        const { origin } = absoluteUrl();
        setOrigin(origin)
        if (typeof(window) != null) {
            setWidth(window.innerWidth)
        }
    }, [])

    

    const rolling = {
        scrolling:{
            y: [-990, 0],
            transition:{
                repeat: Infinity,
                duration: 22,
                ease: [0,0,0,0]
            }
        },
            initial:{
            y:-990
        }
    }


    return (
        <>
            <motion.div className={'flex justify-between align-middle font-sans font-bold py-2 px-2 lg:p-4 lg:px-24 bg-orange z-20 relative'} initial={{y:-100}} animate={{y:0}}>
                
                <NextLink href={`${windowOrigin}`}>
                    <a className={'my-auto bg-white  text-orange py-1 px-2 rounded-md text-lg lg:py-4 lg:px-12 lg:text-2xl'}>
                        SIAMESE GOLDFISH
                    </a>
                </NextLink>
                <div className={'flex justify-end align-middle'}>
                    <NextLink href={`${windowOrigin}`}>
                        <a className={'my-auto bg-white text-blue py-1 px-3 rounded-md lg:text-xl lg:py-2 lg:px-4 lg:mr-12'}>
                            Contact
                        </a>
                    </NextLink>
                    <RiMenu5Line className={'my-auto text-white ml-2 lg:ml-4 lg:hidden cursor-pointer'} size={32} onClick={()=>{setOpen(!isOpen)}}/>
                    <RiMenu5Line className={'my-auto text-white ml-2 lg:ml-4 hidden lg:block cursor-pointer'} size={42} onClick={()=>{setOpen(!isOpen)}}/>
                </div>
            </motion.div>
            <AnimatePresence>
                { isOpen && (
                    <motion.div className={'absolute w-full h-full overflow-clip bg-blue z-20 top-0 flex flex-col py-2 px-2 lg:py-4 lg:px-24'} initial={{x:0, opacity:0}} animate={{x:0, opacity:1}} exit={{x:windowWidth, opacity:0}} transition={{stiffness:150}}>
                        <div className={'flex justify-between align-middle'}>
                            <NextLink href={`${windowOrigin}`} onClick={()=>{setOpen(!isOpen)}}>
                                <a className={'my-auto font-sans font-bold text-white py-1 px-2 text-lg lg:text-2xl lg:px-12'}>
                                    SIAMESE GOLDFISH
                                </a>
                            </NextLink>
                            <div className='flex justify-end'>
                                <RiCloseFill size={38} onClick={()=>{setOpen(!isOpen)}} className={'text-white my-auto cursor-pointer lg:hidden'}/>
                                <RiCloseFill size={60} onClick={()=>{setOpen(!isOpen)}} className={'text-white my-auto cursor-pointer hidden lg:block'}/>
                            </div>
                        </div>
                        <div className='flex flex-col align-middle justify-center mx-auto text-white font-sans my-auto text-xl font-semibold'>
                            <NextLink href={`${windowOrigin}`}>
                                <a className={'text-center py-2 px-4 mb-16 border-b lg:text-3xl lg:border-b-2 lg:px-8 lg:py-4 lg:mb-20'}>
                                    About Us
                                </a>
                            </NextLink>
                            <NextLink href={`${windowOrigin}`}>
                                <a className={'text-center py-2 px-4 mb-16 border-b lg:text-3xl lg:border-b-2 lg:px-8 lg:py-4 lg:mb-20'}>
                                    Gigs
                                </a>
                            </NextLink>
                            <NextLink href={`${windowOrigin}`}>
                                <a className={'text-center py-2 px-4 mb-16 border-b lg:text-3xl lg:border-b-2 lg:px-8 lg:py-4 lg:mb-20'}>
                                    Contact
                                </a>
                            </NextLink>
                            <NextLink href={`${windowOrigin}`}>
                                <a className={'text-center py-2 px-4 mb-16 border-b lg:text-3xl lg:border-b-2 lg:px-8 lg:py-4 lg:mb-20'}>
                                    Store
                                </a>
                            </NextLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.h1 className={'text-white font-semibold absolute [writing-mode:vertical-rl] whitespace-nowrap text-lg lg:text-3xl top-12 right-2 lg:top-21 lg:right-24 z-10'} variants={rolling} animate={'scrolling'} >SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp; SIAMESE GOLDFISH &nbsp;&nbsp;</motion.h1>
            <motion.div className={'absolute border-white w-1/2 ml-2 h-12 border-l-4 border-t-4 lg:w-[21rem] lg:ml-24 lg:border-l-8 lg:border-t-8'} initial={{x:-450}} animate={{x:0}} transition={{delay:0.25}}/>
        </>
    );
}