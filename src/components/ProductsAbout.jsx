
import Tabspro from "./Tabspro";
import useFetch from "./useFetch";

const ProductsAbout = () => {
    const{data: ProductsAbout, error, isPending} = useFetch('http://localhost:7001/ProductsAbout');
    return ( 
        <>
        {ProductsAbout && ProductsAbout.map((item, index) => {
            return(
                <div className="products-about">
                    <h2>{item.title}</h2>
                    <Tabspro/>
                </div>
            )
        })}
        </>
     );
}
 
export default ProductsAbout;