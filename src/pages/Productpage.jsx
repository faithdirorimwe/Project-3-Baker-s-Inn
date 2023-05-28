import ProductsHero from "../components/ProductsHero";
import ProductsAbout from "../components/ProductsAbout";


const Productpage = () => {
    return ( 
        <>
        <section id="producthero">
            <ProductsHero/>
        </section>
        <section id= "productabout">
            <ProductsAbout/>
        </section>
      
        </>
     );
}
 
export default Productpage;