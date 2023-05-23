import useFetch from "./useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faTwitter, faFacebook, faLinkedin} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    const { data: Footer, error, isPending } = useFetch('http://localhost:7001/Footer');
    return (
        <>
            {Footer && Footer.map((item, index) => {
                return (
                    <div className="footer" key={index}>
                        <div className="bakers-logo">
                        <img src={item.bakersimage} alt="" />
                        </div>
                        <div className="line">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="footer-content">
                            <div className="instagram-content">
                                <h3>{item.instatitle}</h3>
                                <div className="image">
                                {item.instacontent && item.instacontent.map(item => {
                                    return (
                                        <img src={item.image} alt="" />
                                    )
                                })}
                                </div>
                            </div>
                            <div className="location">
                                <h3>{item.loctitle}</h3>
                                {item.loccotent && item.loccotent.map(item => {
                                    return(
                                        <p>{item.title}</p>
                                    )
                                })}
                            </div>
                            <div className="getin-touch">
                                <h3>{item.intouchtitle}</h3>
                                {item.intouchcontent && item.intouchcontent.map(item => {
                                    return(
                                       
                                        <div className="content">
                                            <img src={item.image} alt="" />
                                                 <p>{item.title}</p>
                                                 
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="sitemap">
                                <h3>{item.sitemaptitle}</h3>
                                {item.sitemapcontent && item.sitemapcontent.map(item => {
                                    return(
                                        <p>{item.title}</p>
                                    )
                                })}
                            </div>

                        </div>

                        <div className="footer-inner">
                            <div className="inner-con">
                            <p>{item.endtitle}</p>
                            <img src={item.innscorimg} alt="" />
                            </div>
                           <div className="copyright">
                           <p> {item.content} <span>{item.contentinner}</span></p>
                           </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Footer;