
import Tabspro from "./Tabspro";
// import useFetch from "./useFetch";
import data from "../../database/db";

const ProductsAbout = () => {
    // const{data: ProductsAbout, error, isPending} = useFetch('http://localhost:7001/ProductsAbout');
    return ( 
        <>
        {data.ProductsAbout && data.ProductsAbout.map((item, index) => {
            return(
                <div className="products-about" key={index}>
                    <h2>{item.title}</h2>
                    <Tabspro/>
                </div>
            )
        })}
        </>
     );
}
 
export default ProductsAbout;