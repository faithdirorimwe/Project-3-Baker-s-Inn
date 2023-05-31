import Button from "./Button";
// import useFetch from "./useFetch";
import data from "../../database/db";

const Kidsgame = () => {
    // const{data: Kidsgame, error, isPending} = useFetch('http://localhost:7001/Kidsgame');
    return ( 
        <>
        {data.Kidsgame && data.Kidsgame.map((item, index) => {
            return(
                <div className="kids-games" key={index}>

                    <div className="games g-one">
                        {item.gameone && item.gameone.map((item, index) => {
                            return(
                                <div className="game-one" key={index}>
                                    <div className="text">
                                        <h1>{item.title}</h1>
                                        <p>{item.ptext}</p>
                                        <p>{item.ptextone}</p>
                                        <Button toPath='' title="Play Game"/>
                                    </div>
                                    <div className="mazegame">
                                        <img src={item.image} alt="" />
                                    </div>
                                    
                                </div>
                            )
                        })}

                    </div>

                     <div className="games g-two">
                     {item.gametwo && item.gametwo.map((item, index) => {
                            return(
                                <div className="game-one" key={index}>
                                    <div className="text">
                                        <h1>{item.title}</h1>
                                        <p>{item.ptext}</p>
                                        <Button toPath='' title="Play Game"/>
                                    </div>
                                    <div className="riskyway-game">
                                        <div className="img-one">
                                        <div></div>
                                        <img src={item.image} alt="" />
                                       
                                        </div>
                                        <div className="img-two">
                                        <img src={item.imagetwo} alt="" />
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>

                     <div className="games g-three">
                     {item.gamethree && item.gamethree.map((item, index) => {
                            return(
                                <div className="game-one" key={index}>
                                    <div className="text">
                                        <h1>{item.title}</h1>
                                        <p>{item.ptext}</p>
                                       
                                        <Button toPath='' title="Play Game"/>
                                    </div>
                                    <div className="mazegame">
                                        <img src={item.image} alt="" />
                                    </div>
                                    
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
 
export default Kidsgame;