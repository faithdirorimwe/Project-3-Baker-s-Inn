import useFetch from "./useFetch";
import Button from "./Button";
// import CustomModal from "./CustomModal";

const Tour = () => {
    const { data: Tour, error, isPending } = useFetch('http://localhost:7001/Tour'); 
    
    return ( 
        <>
        {Tour && Tour.map((item, index) => {
            return(
            <div className="tour-don" key={index}>
                <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <Button toPath='' title='BOOK FACTORY TOUR'/>
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