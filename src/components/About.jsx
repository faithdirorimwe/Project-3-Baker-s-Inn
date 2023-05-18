import Button from "./Button";
import sandwich from "../assets/img/sandwitches.jpg"
import pies from "../assets/img/bakers-pie.jpg"
import donut from "../assets/img/donut-with-coffee.jpg"
import bread from "../assets/img/bread-slices.jpg"

const About = () => {
    return ( 
        <div id="about" className="about">
            <div className="about-inner">
              <h1>About Baker's Inn</h1>  
              <div className="content">
                <p>It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                <Button toPath= '/About' title="Read more" />
              </div>
            </div>
            <div className="images">
                <img src={sandwich} alt="sandwiches" className="sandwich" />
                <img src={pies} alt="meat pies" className="meatPies" />
                <img src={donut} alt="donut and tea" className="donut" />
                <img src={bread} alt="sliced bread" className="bread" />
              </div>
        </div>
     );
}
 
export default About;