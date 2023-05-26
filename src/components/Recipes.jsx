import { useState } from "react";
// import CardComponent from "./CardComponent";
import useFetch from "./useFetch";
import sandwiches from '../assets/img/Rectangle 337.png';
import bread from '../assets/img/Rectangle 338.png';
import salmon from '../assets/img/Rectangle 380.png';
import { Card } from "react-bootstrap";
const Recipes = () => {
    const { data: Recipes, error, isPending } = useFetch('http://localhost:7001/Recipes');
    const { toggleState, setToggleState } = useState(1);

    const toggleTab = (index) => {
        console.log(index);
    }
    return (
        <>
            {Recipes && Recipes.map((item, index) => {
                return (
                    <div className="container recipes">
                        <h1>{item.title}</h1>
                        <div className="bloc-tabs">
                            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}> <h2>{item.subtitleone}</h2>
                            </div>
                            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}> <h2>{item.subtitletwo}</h2>
                            </div>
                            <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}><h2>{item.subtitlethree}</h2>
                            </div>
                        </div>

                        <div className="content-tabs">

                            <div className={toggleState === 1 ? "content active-content" : "content"}>
                                <div className="card">
                                    <img src={sandwiches} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min </p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={sandwiches} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={sandwiches} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="information">
                                            <div className="card-infor">
                                                <p>Prep Time:</p>
                                                <p>20 min</p>
                                            </div>
                                            <div className="card-infor">
                                                <p>Serves:</p>
                                                <p>6 people</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={toggleState === 2 ? "content active-content" : "content"}>
                                <div className="card">
                                    <img src={bread} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={bread} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={bread} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState === 3 ? "content active-content" : "content"}>
                                <div className="card">
                                    <img src={salmon} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={salmon} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={salmon} alt="" />
                                    <div className="card-content">
                                        <div className="card-heading">
                                            <h2>Shwarma Sandwich</h2>
                                        </div>
                                        <div className="card-infor">
                                            <p>Prep Time:</p>
                                            <p>20 min</p>
                                        </div>
                                        <div className="card-infor">
                                            <p>Serves:</p>
                                            <p>6 people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                )
            })}
        </>

    );
}

export default Recipes;