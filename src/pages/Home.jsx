import About from "../components/About";
import Hero from "../components/Hero";
import Products from "../components/Products";


const Home = () => {
    return (
        <> 
        <div className="hero">
             <Hero />
        </div>
       <div className="about">
          <About/>
       </div>
       <div className="products">
        <Products/>
       </div>
       </>

    );
}

export default Home;