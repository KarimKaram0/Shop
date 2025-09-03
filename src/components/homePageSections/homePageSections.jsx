
import "../homePageSections/homePageStyle.css"
import HeroSection from "../HeroSection/HeroSection"
import AboutSection from "../AboutUs/AboutSection"
import Blog from "../Blog/Blog"
import Sum from "../Shop/Shop"


export default function HomePageSections() {
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <Blog/>
        <Sum/>
        </>
    )
}