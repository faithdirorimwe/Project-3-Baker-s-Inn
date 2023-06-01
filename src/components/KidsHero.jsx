// import useFetch from "./useFetch";
import data from "../../database/db";

const KidsHero = () => {
    // const{data: KidsHero, error, isPending} = useFetch('http://localhost:7001/KidsHero');
    return ( 
        <>
        {data.KidsHero && data.KidsHero.map((item) => {
            return(
                <div className="kids-hero">

                    <div className="heading">
                        <div className="text">
                            <p>{item.title} </p>
                            <p>{item.title1}</p>
                        </div>

                        <div className="text-inner">
                            <img src={item.image} alt="" />
                        </div>

                    </div>


                    <div className="images-container">

                        <div className="img-one">
                            <img src={item.imagetwo} alt="" />
                        </div>

                        <div className="img-two">
                            <img src={item.imagethree} alt="" />
                        </div>

                    </div>
                </div>
            )
        })}
        </>
     );
}
 
export default KidsHero;