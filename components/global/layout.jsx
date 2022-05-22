import Navbar from "./navbar";
import Footer from './footer'
import Head from "next/head";
export default function Layout ( { children } ) {
    return (
        <>
            <Head>
                <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/open-sauce-sans" type="text/css"/>
                <title>
                    SIAMESE GOLDFISH
                </title>
            </Head>
            <Navbar />
            { children }
            <Footer />
        </>
    );
}