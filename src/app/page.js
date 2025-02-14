import Image from "next/image";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import BackToTopBtn from "./components/BackToTopBtn";
import Why from "./components/Why";


export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto bg-white relative overflow-hidden">
    <Header />
    <Hero />
    <Cars />
    <About />
    <Why />
    <Testimonial />
    <Cta />
    <Footer />
    <BackToTopBtn />
    {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
