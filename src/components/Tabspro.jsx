import useFetch from "./useFetch";
import { useState } from "react";

const Tabspro = () => {
    const { data: ProductsAbout, error, isPending } = useFetch('http://localhost:7001/ProductsAbout');

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            {ProductsAbout && ProductsAbout.map((item, index) => {
                return (
                    <div className="pro-tabs">
                        <div className="bloc-tabs">
                            <div
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}>{item.innertitle}</div>
                            <div
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}>{item.innertitletwo}</div>
                            <div
                                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}>{item.innertitlethree}</div>
                            <div
                                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(4)}>{item.innertitlefour}</div>
                        </div>

                        <div className="content-tabs">
                            <div className={toggleState === 1 ? "one content active-content" : "content"}>
                                {item.contentone && item.contentone.map((item, index) => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />

                                            <div className="card-inner">
                                                <div className="card-title">
                                                    {item.title}
                                                </div>
                                                <div className="card-content">
                                                    <p>{item.ptext}</p>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className={toggleState === 2 ? "content active-content" : "content"}>
                                {item.contenttwo && item.contenttwo.map((item, index) => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />

                                            <div className="card-inner">
                                                <div className="card-title">
                                                    {item.title}
                                                </div>
                                                <div className="card-content">
                                                    <p>{item.ptext}</p>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className={toggleState === 3 ? "content active-content" : "content"}>
                                {item.contentthree && item.contentthree.map((item, index) => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />

                                            <div className="card-inner">
                                                <div className="card-title">
                                                    {item.title}
                                                </div>
                                                <div className="card-content">
                                                    <p>{item.ptext}</p>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className={toggleState === 4 ? "content active-content" : "content"}>
                                {item.contentfour && item.contentfour.map((item, index) => {
                                    return (
                                        <div className="card">
                                            <img src={item.image} alt="" />

                                            <div className="card-inner">
                                                <div className="card-title">
                                                    {item.title}
                                                </div>
                                                <div className="card-content">
                                                    <p>{item.ptext}</p>
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

export default Tabspro;