import useFetch from "./useFetch";

const AboutServices = () => {
    const {data:AboutServices, error, isPending} = useFetch('http://localhost:7001/AboutServices');
    return ( 
        <>
        {AboutServices && AboutServices.map((item, index) => {
            return(
                <div className="about-services">
                    <h2>{item.title}</h2>
                    <div className="about-inner">
                        {item.content && item.content.map((item, index) => {
                            return(
                                <div className="inner">
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
                                <div className="inner">
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