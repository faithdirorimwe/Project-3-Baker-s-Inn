// import useFetch from "./useFetch";
import data from "../../database/db";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
// import CustomModal from "./CustomModal";

const Tour = () => {
    // const { data: Tour, error, isPending } = useFetch('http://localhost:7001/Tour'); 
    const[openModal, setOpenModal] = useState(false);
    
    return ( 
        <>
        {data.Tour && data.Tour.map((item) => {
            return(
            <div className="tour-don">
                <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <Button toPath='' title='BOOK FACTORY TOUR'
                    onClick={() => {
                        setOpenModal(true);
                    }}/>
                    {openModal && <Modal/>}
                </div>
                <div className="img-container">
                    <img src={item.image} alt="" />
                </div>
              
            </div>
            )
        })}
        </>
     );
}
 
export default Tour;