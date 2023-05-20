import useFetch from "./useFetch";
import Button from "./Button";

const Tour = () => {
    const { data: Products, error, isPending } = useFetch('http://localhost:7001/Tour'); 
    return ( 
        <>
        {Products && Products.map((item, index) => {
            return(
            <div className="tour">
                <div className="tour-content">
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