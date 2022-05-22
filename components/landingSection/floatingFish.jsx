import Image from "next/image";
import { motion } from 'framer-motion'
export default function FloatingFish ({ className }) {
    const floating = {
        float:{
            x: [-20, -5, 0, -30, -4, -20],
            y: [0, -10, 8, 10, -20, 0],
            transition:{
                repeat: Infinity,
                duration: 12,
                repeatType: 'reverse',
                
            }
        },
    }
    return (
        <motion.div className={className} variants={floating} animate={'float'}>
            <Image src={'/fishbandwithoutbubbles.svg'} layout={'fill'} className={'scale-150 -translate-x-1/4 -translate-y-20 lg:-translate-y-0 lg:scale-100 lg:-translate-x-1/3'}/>
        </motion.div>
    );
}