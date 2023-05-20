import About from "../components/About";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Tour from "../components/Tour";


const Home = () => {
    return (
        <> 
        <section id="hero">
             <Hero />
        </section>
       <section id="about">
          <About/>
       </section>
       <section id="products">
        <Products/>
       </section>
       <section id="tour">
        <Tour/>
       </section>
       </>

    );
}

export default Home;