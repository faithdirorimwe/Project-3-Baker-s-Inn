// import useFetch from "./useFetch";
import data from "../../database/db";
import arrow from "../assets/img/arrow.png";

const ProductsHero = () => {
    // const{data: ProductsHero, error, isPending} = useFetch('http://localhost:7001/ProductsHero')
    return ( 
        <>
        {data.ProductsHero && data.ProductsHero.map((item, index) => {
            return(
                <div className="about-hero product-hero" key={index}>
                <div className="image">
                    <img src={item.image} alt="" />
                    <div className="text">
                        <h2>{item.title}</h2>
                        <p><img src={arrow} alt="" /> <br />
                            <img src={arrow} alt="" />
                            </p>
                    </div>
                </div>
            </div>
            )
        })}
        </>
     );
}
 
export default ProductsHero;