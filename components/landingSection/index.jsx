import FloatingFish from './floatingFish';
import Hero from './hero';
import ScrollIndicator from './scrollIndicator';
export default function LandingSection() {
    return (
        <>
            <FloatingFish className={'w-full h-full lg:w-2/3 lg:h-2/3 absolute lg:top-1/3 z-0'}/>
            <Hero className={'drop-shadow-lg text-white font-bold pt-24 mr-12 text-right text-4xl lg:pt-32 lg:mr-52 lg:text-9xl'}/>
            <ScrollIndicator className={'flex lg:justify-end mt-96 ml-2 lg:mr-52 lg:mt-48'}/>
        </>
    );
}