import useFetch from "./useFetch";

const ProductsHero = () => {
    const{data: ProductsHero, error, isPending} = useFetch('http://localhost:7001/ProductsHero')
    return ( 
        <>
        {ProductsHero && ProductsHero.map((item, index) => {
            return(
                <div className="about-hero" key={index}>
                <div className="image">
                    <img src={item.image} alt="" />
                    <div className="text">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            </div>
            )
        })}
        </>
     );
}
 
export default ProductsHero;