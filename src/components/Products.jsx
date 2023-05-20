import useFetch from "./useFetch";
import Button from './Button';

const Products = () => {
    const { data: Products, error, isPending } = useFetch('http://localhost:7001/Products');
 
    return (
        <>
            {Products && Products.map((item, index) => {
                return (
                    <section className="products">
                        <h2>{item.title}</h2>
                        <div className="prod-imgBox">
                            {item.images && item.images.map(item => {
                                return (
                                    <div className="img-card">
                                        <img src={item.image} alt="" />
                                        <div className="prod-textBox">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <Button toPath='' title="View complete range"/>
                    </section>
                )
            })}
        </>
    );
}

export default Products;