// import useFetch from "./useFetch";
import data from '../../database/db';
import Button from './Button';


const Products = () => {
    // const { data: Products, error, isPending } = useFetch('http://localhost:7001/Products');
 
    return (
        <>
      {data.Products && data.Products.map((item) => {
    return (
        <section key={item.id} className="products">
            <h2>{item.title}</h2>
            <div className="prod-imgBox">
                {item.images && item.images.map((imageItem, index) => {
                    return (
                        <div key={index} className="img-card">
                            <img src={imageItem.image} alt="" />
                            <div className="prod-textBox">
                                <h3>{imageItem.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Button toPath='' title="VIEW COMPLETE Range"/>
            
        </section>
    )
})}

        </>
    );
}

export default Products;