import useFetch from "./useFetch";
import Button from "./Button";

const Donations = () => {
    const { data: Donation, error, isPending } = useFetch('http://localhost:7001/Donation'); 
    return ( 
        <>
        {Donation && Donation.map((item, index) => {
            return(
            <div className="donation tour-don">
                 <div className="img-container">
                    <img src={item.image} alt="" />
                </div>
                <div className="content">
                    <h2>{item.title}</h2>
                    <p className="ptext">{item.content}</p>
                    <Button toPath='' title='REQUEST DONATIONS'/>
                </div>
            </div>
            )
        })}
        </>
     );
}
 
export default Donations;