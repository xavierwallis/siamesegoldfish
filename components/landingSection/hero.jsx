import { motion } from 'framer-motion';
export default function Hero( { ...props } ) {
    return (
        <motion.h1 { ...props } initial={{x:250}} animate={{x:0}}>
            WE ARE <br/> SIAMESE GOLDFISH
        </motion.h1>    
    );
}