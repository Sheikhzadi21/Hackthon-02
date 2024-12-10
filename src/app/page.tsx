// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Slides from "@/components/Slides";
import SubHero from "@/components/Subhero";
import ShopBlowHero from "@/components/ShopBlowHero";
import Card from "@/components/Card"


export default function Home(){
  return (
    <>
    {/* <Header/> */}
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
    <ShopBlowHero/>
    <Card/>
    {/* <Footer/> */}
    </>
  )
}