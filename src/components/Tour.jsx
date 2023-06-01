// import useFetch from "./useFetch";
import data from "../../database/db";
import Button from "./Button";
import Modal from "./Modal";

// import CustomModal from "./CustomModal";

const Tour = () => {
    // const { data: Tour, error, isPending } = useFetch('http://localhost:7001/Tour'); 

    
    return ( 
        <>
        {data.Tour && data.Tour.map((item) => {
            return(
            <div key={item.id} className="tour-don">
                <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <Button toPath='' title='BOOK FACTORY TOUR'/>
                    <Modal/>
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