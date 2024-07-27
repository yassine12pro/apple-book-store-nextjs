import Faq from "@/components/Faq";
import Filter from "@/components/Filter";
import Hero from "@/components/hero";
import MobileGalery from "@/components/MobileGalery";

export default function Home() {
  return (
    
      <>
        <Hero/>
        <MobileGalery/>
        <Filter/> 
        <Faq/>
      </>
    
  );
}
