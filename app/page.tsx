import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { FloatingNav } from "@/components/ui/Floatingnavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
         <Hero/>
         <About/> 
         <Project/>
         <Footer/>
        </div>
    </main>
  );
}
