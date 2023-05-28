import KidsHero from "../components/KidsHero";
import Kidsgame from "../components/Kidsgame";

const Kidspage = () => {
    return ( 
        <>
        <section id="kids-hero">
            <KidsHero/>
        </section>
        <section id="kids-games">
            <Kidsgame/>
        </section>
        </>
     );
}
 
export default Kidspage;