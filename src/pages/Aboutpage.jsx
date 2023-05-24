import AboutAbout from "../components/AboutAbout";
import AboutHero from "../components/AboutHero";
import AboutServices from "../components/AboutServices";
import CeoInfo from "../components/CeoInfo";

const AboutPage = () => {
    return ( 
        <>
        <section id="about-hero">
        <AboutHero/>
        </section>
        <section id="about-about"> 
            <AboutAbout/>
        </section>
        <section id="about-services">
            <AboutServices/>
        </section>
        <section id="ceo-info">
            <CeoInfo/>
        </section>
        </>
     );
}
 
export default AboutPage;