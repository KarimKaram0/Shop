import product1 from"../components/images/pro1.jpg"
import product2 from"../components/images/pro2.jpg"
import product3 from"../components/images/pro3.jpg"
import "../components/homePageCss/HomePageStyle.css"
import HeroSection from "./HeroSection/HeroSection"
import AboutSection from "./AboutUs/AboutSection"
import Blog from "./Blog/Blog"
import Shop from "./Shop/Shop"
import ShopPage from "./Shop/ShopPage"
import Footer from "./Footer/Footer"
import LogInPage from "./LogIn/LogInPage"
import DarkMode from "./DarkMode/DarkMode"

export default function HomePageSections() {
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <Blog/>
        <Shop/>
        </>
    )
}