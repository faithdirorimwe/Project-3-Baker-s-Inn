import { useState } from "react";
// import useFetch from "./useFetch";
import data from "../../database/db";
// import { Card } from "react-bootstrap";

const Tabs = () => {
    // const { data: Recipies, error, isPending } = useFetch('http://localhost:7001/Recipies');

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            {data.Recipies && data.Recipies.map((item) => {
                return (
                    <div className="recipies">

                        <div className="bloc-tabs">
                            <div
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}>{item.subtitleone}</div>
                            <div
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}>{item.subtitletwo}</div>
                            <div
                                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}>{item.subtitlethree}</div>
                        </div>

                        <div className="content-tabs">
                            <div className={toggleState === 1 ? "content active-content" : "content"}>
                                {item.imageone && item.imageone.map(item => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />
                                            <div className="card-title">
                                                {item.title}
                                            </div>
                                            <div className="card-inner">
                                                <div className="card-content">
                                                    <p>{item.infor}<span>{item.infoco}</span> <br />
                                                    {item.infortwo}<span>{item.infocotwo}</span></p>
                                                </div>
                                                <div className="card-contenttwo">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className={toggleState === 2 ? "content active-content" : "content"}>
                                {item.imagetwo && item.imagetwo.map(item => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />
                                            <div className="card-title">
                                                {item.title}
                                            </div>
                                            <div className="card-inner">
                                                <div className="card-content">
                                                <p>{item.infor}<span>{item.infoco}</span> <br />
                                                    {item.infortwo}<span>{item.infocotwo}</span></p>
                                                </div>
                                                <div className="card-contenttwo">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className={toggleState === 3 ? "content active-content" : "content"}>
                                {item.imagethree && item.imagethree.map(item => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />
                                            <div className="card-title">
                                                {item.title}
                                            </div>
                                            <div className="card-inner">
                                                <div className="card-content">
                                                <p>{item.infor}<span>{item.infoco}</span> <br />
                                                    {item.infortwo}<span>{item.infocotwo}</span></p>
                                                </div>
                                                <div className="card-contenttwo">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Tabs;