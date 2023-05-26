import { Card } from "react-bootstrap";
import sandwiches from '../assets/img/Rectangle 337.png';
const CardComponent = () => {

    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                        <div className="card">
                          <img src={sandwiches} alt="" />
                            <div className="card-body">
                              <h3></h3>
                              <div className="infor">
                                <p>Prep Time</p>
                                <p>20 min</p>
                              </div>
                              <div className="infor">
                                <p>Servers</p>
                                <p>6 People</p>
                              </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CardComponent;