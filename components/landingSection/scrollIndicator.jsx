import { motion } from 'framer-motion';
export default function ScollIndicator({...props}) {
    const scroll = {
        scroll:{
            y:[72, 72, 0],
            transition: {
                repeat: Infinity,
                duration: 2,
                repeatType: 'reverse'
            }
        }
    }

    return (
        <div {...props}>
            <h1 className='text-white my-auto  text-xl font-sans font-bold [writing-mode:vertical-rl] whitespace-nowrap hidden lg:block'>
                SCROLL
            </h1>
            <div className='bg-white flex justify-center rounded-3xl h-32 p-2 lg:h-40 lg:p-4'>
                <motion.div className={'bg-blue rounded-full shadow-lg w-10 h-10 lg:w-12 lg:h-12'} variants={scroll} animate={'scroll'}/>
            </div>
            <h1 className='text-white my-auto  text-xl font-sans font-bold [writing-mode:vertical-rl] whitespace-nowrap rotate-180 block lg:hidden'>
                SCROLL
            </h1>
        </div>
    );
}