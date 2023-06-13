// import useFetch from "./useFetch";
import data from "../../database/db";
import Button from "./Button";
import Modal from "./Modal";

const Donations = () => {
    // const { data: Donation, error, isPending } = useFetch('http://localhost:7001/Donation'); 
    return (
        <>
            {data.Donation && data.Donation.map((item) => {
                return (
                    <div key={item.id} className="donation tour-don">
                        <div className="img-container">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p className="ptext">{item.content}</p>
                            <Button toPath='' title='REQUEST DONATIONS' />
                        </div>
                    </div>
                )
            })}

        </>
    );
}

export default Donations;