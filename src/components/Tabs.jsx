import { useState } from "react";
import useFetch from "./useFetch";
// import { Card } from "react-bootstrap";

const Tabs = () => {
    const { data: Recipies, error, isPending } = useFetch('http://localhost:7001/Recipies');

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            {Recipies && Recipies.map((item, index) => {
                return (
                    <div className="recipies" key="index">

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
                                {item.imageone && item.imageone.map((item, index) => {
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
                                {item.imagetwo && item.imagetwo.map((item, index) => {
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
                                {item.imagethree && item.imagethree.map((item, index) => {
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