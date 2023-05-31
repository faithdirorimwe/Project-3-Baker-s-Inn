// import useFetch from "./useFetch";
import data from "../../database/db";
import arrow from "../assets/img/arrow.png";

const AboutHero = () => {
    // const{data: AboutHero, error, isPending} = useFetch('http://localhost:7001/AboutHero');
    return ( 
        <>
        {data.AboutHero && data.AboutHero.map((item, index) => {
            return(
                <div className="about-hero" key={index}>
                    <div className="image">
                        <img src={item.image} alt="" />
                        <div className="text">
                            <h2>{item.title} </h2>
                            <p><img src={arrow} alt="" /> <br />
                            <img src={arrow} alt="" />
                            </p>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
     );
}
 
export default AboutHero;