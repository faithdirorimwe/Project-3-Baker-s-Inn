// import useFetch from "./useFetch";
import data from "../../database/db";
import arrow from "../assets/img/arrow.png";
const Contact = () => {
    // const { data: Contact, error, isPending } = useFetch('http://localhost:7001/Contact');
    return (
        <>
            {data.Contact && data.Contact.map((item) => {
                return (
                    <div className="contact">
                        {item.hero && item.hero.map(item => {
                            return (
                                <div className="contact-hero">
                                    <img src={item.image} alt="" />
                                    <div className="text">
                                        <h2>{item.title}</h2>
                                        <p><img src={arrow} alt="" /> <br />
                            <img src={arrow} alt="" />
                            </p>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="about-contact">
                            {item.about && item.about.map(item => {
                                return (
                                    <div className="about-content">
                                        {item.aboutinner && item.aboutinner.map(item => {
                                            return (
                                                <div className="content">
                                                    <div className="image">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="img-text">
                                                        <h1>{item.title}</h1>
                                                        <div className="text">
                                                            <p>{item.address}</p>
                                                        </div>
                                                        <div className="text">
                                                            <p>{item.number} <br /> {item.numberone}</p>
                                                        </div>
                                                        <div className="text">
                                                            <p><span>{item.voip}</span>  {item.tel} <br /> <span>{item.econet}</span> {item.tel}, {item.tel} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="list-depots">
                            {item.listdepots && item.listdepots.map(item => {
                                return (
                                    <div className="deport-title">
                                        <h2>{item.title}</h2>
                                        <div className="content">
                                            
                                            <div className="one deport">
                                                <h3>{item.title1}</h3>
                                                <p>{item.ptext1} <br /> {item.ptext1} <br /> {item.ptext1} <br /> {item.ptext1} <br /> <br />
                                                    {item.ptext1} <br />{item.ptext1} <br />{item.ptext1} <br />{item.ptext1} <br />{item.ptext1} <br /></p>
                                            </div>
                                            <div className="one address">
                                                <h3>{item.title2}</h3>
                                                <p>{item.ptext2} <br /> {item.ptext2} <br /> {item.ptext2} <br /> {item.ptext2} <br /> <br />
                                                    {item.ptext2} <br />{item.ptext2} <br />{item.ptext2} <br />{item.ptext2} <br />{item.ptext2} <br /></p>
                                            </div>
                                            <div className="one number">
                                                <h3>{item.title3}</h3>
                                                <p>{item.ptext3} <br /> {item.ptext3} <br /> {item.ptext3} <br /> {item.ptext3} <br /> <br />
                                                    {item.ptext3} <br /> {item.ptext3} <br /> {item.ptext3} <br /> {item.ptext3} <br /> {item.ptext3} <br /></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="enquiries">
                            {item.contact && item.contact.map(item => {
                                return(
                                    <div className="enquiries-inner">
                                        <img src={item.image} alt="" />

                                        <div className="infor">
                                            <div className="emailinfor">
                                                <p>{item.emailinfo} <br /> <span> {item.email}</span></p>
                                            </div>
                                            <div className="emailinfor">
                                                <p>{item.emailinfo1}<br /> <span>{item.email1}</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                            <div className="request">
                                {item.request && item.request.map(item => {
                                    return(
                                        <div className="request-inner">
                                            <h2>{item.title}</h2>
                                            <p>{item.ptext}</p>
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

export default Contact;