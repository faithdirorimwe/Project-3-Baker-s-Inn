import useFetch from "./useFetch";

const AboutHero = () => {
    const{data: AboutHero, error, isPending} = useFetch('http://localhost:7001/AboutHero');
    return ( 
        <>
        {AboutHero && AboutHero.map((item, index) => {
            return(
                <div className="about-hero">
                    <div className="image">
                        <img src={item.image} alt="" />
                        <div className="text">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
     );
}
 
export default AboutHero;