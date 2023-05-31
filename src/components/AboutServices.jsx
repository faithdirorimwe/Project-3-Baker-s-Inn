// import useFetch from "./useFetch";
import data from "../../database/db";

const AboutServices = () => {
    // const {data:AboutServices, error, isPending} = useFetch('http://localhost:7001/AboutServices');
    return ( 
        <>
        {data.AboutServices && data.AboutServices.map((item, index) => {
            return(
                <div className="about-services" key={index}>
                    <h2>{item.title}</h2>
                    <div className="about-inner">
                        {item.content && item.content.map((item, index) => {
                            return(
                                <div className="inner" key={index}>
                                    <div className="image">
                                     <img src={item.image} alt="" />   
                                    </div>
                                    <div className="about-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.ptext}</p>
                                    </div> 
                                </div>
                            )
                        })}
                    </div>

                    <div className="about-innertwo">
                    {item.contentone && item.contentone.map((item, index) => {
                            return(
                                <div className="inner" key={index}>
                                    <div className="image">
                                     <img src={item.image} alt="" />   
                                    </div>
                                    <div className="about-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.ptext}</p>
                                    </div> 
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })}
        </>
     );
}
 
export default AboutServices;