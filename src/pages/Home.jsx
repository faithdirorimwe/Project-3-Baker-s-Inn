import About from "../components/About";
import Donations from "../components/Donation";
import Notified from "../components/Notified";
import Hero from "../components/Hero";
import Kids from "../components/Kids";
import Products from "../components/Products";
import Tour from "../components/Tour";
import Footer from "../components/Footer";



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
       <section id= "donations">
        <Donations/>
       </section>
        <section id="kids">
           <Kids/>
        </section>
        <section id="notified">
            <Notified/>
        </section>
        <footer>
         <Footer/>
        </footer>
       </>

    );
}

export default Home;