import useFetch from "./useFetch";

const RecipesHero = () => {
    const { data: RecipesHero, error, isPending } = useFetch('http://localhost:7001/RecipesHero')
    return (
        <>
            {RecipesHero && RecipesHero.map((item, index) => {
                return (
                    <div className="recipe-hero">
                        <div className="recipe-slider ">
                            {item.content && item.content.map((item, index) => {
                                return (
                                    <div className="recipe-sliderinner">
                                        <div className="title">
                                         <h2>{item.title}</h2>    
                                        </div>
                                       <div className="text">
                                        <p>{item.ptext}</p>
                                       </div>
                                        <div className="innercon">
                                            <img src={item.image} alt="" />
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="slider-content">
                            <div className="slider-inner one">
                                {item.imgcontainer && item.imgcontainer.map((item, index) => {
                                    return (
                                        <div className="slider-image">
                                            <img src={item.image} alt="" />
                                            <div className="overlay"></div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="slider-inner">
                                {item.imgcontainerone && item.imgcontainerone.map((item, index) => {
                                    return (
                                        <div className="slider-image">
                                            <img src={item.image} alt="" />
                                            <div className="overlay"></div>
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

export default RecipesHero;