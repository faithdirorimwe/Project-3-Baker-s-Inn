// import useFetch from "./useFetch";
import data from "../../database/db";

const AboutAbout = () => {
    // const { data: AboutAbout, error, isPending } = useFetch('http://localhost:7001/AboutAbout');
    return (
        <>
            {data.AboutAbout && data.AboutAbout.map((item) => {
                return (
                    <div key={item.id} className="about-about">
                        <div className="mission">
                            <div className="image one">
                                <img src={item.imageone} alt="" />
                            </div>
                            <div className="content">
                                <h2>{item.titleone}</h2>
                                <p>{item.contentone}</p>
                            </div>
                        </div>
                        <div className="mission">
                            <div className="image">
                                <img src={item.imagetwo} alt="" />
                            </div>
                            <div className="content">
                                <h2>{item.titletwo}</h2>
                                <p>{item.contenttwo}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default AboutAbout;