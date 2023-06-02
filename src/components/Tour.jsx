// import useFetch from "./useFetch";
import data from "../../database/db";
import Button from "./Button";
import { useState } from "react";

const Tour = () => {
    // const { data: Tour, error, isPending } = useFetch('http://localhost:7001/Tour'); 
    
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)

    }
    
    return ( 
        <>
        {data.Tour && data.Tour.map((item) => {
            return(
            <div key={item.id} className="tour-don">
                <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <Button onClick={toggleModal} toPath='' title='BOOK FACTORY TOUR'/>

                    {modal && (
                          <div className="modalContainer">
                          <div className="overlay"></div>
                          <div className="modal-content">
                              <h2>Hello world</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eum eius recusandae dolore. Blanditiis voluptates sunt, quasi corporis placeat et.</p>
                              <Button onClick={toggleModal} className="close-modal" toPath='' title='X'/>
                          </div>
                      </div>
                    )}
                  
                
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