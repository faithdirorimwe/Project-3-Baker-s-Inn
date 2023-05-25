import useFetch from "./useFetch";
import Button from './Button';
import Modal from "./Modal";
import { useState } from "react";

const Products = () => {
    const { data: Products, error, isPending } = useFetch('http://localhost:7001/Products');
    const [openModal, SetopenModal] = useState(false)
 
    return (
        <>
            {Products && Products.map((item, index) => {
                return (
                    <section className="products" key={index}>
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
                        <Button toPath='' title="VIEW COMPLETE Range"/>
                        <Modal/>
                    </section>
                )
            })}
        </>
    );
}

export default Products;