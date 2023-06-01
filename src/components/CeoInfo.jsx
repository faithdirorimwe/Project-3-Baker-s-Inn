// import useFetch from "./useFetch";
import data from "../../database/db";

const CeoInfo = () => {
    // const{data:CeoInfo, error, isPending} = useFetch('http://localhost:7001/CeoInfo');
    return (
        <>
          {data.CeoInfo && data.CeoInfo.map((item) =>{
            return(
                <div className="ceo-info">
                    <div className="image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="ceo-content">
                        <h2>{item.title}</h2>
                        <p>{item.ptext}</p>
                        <p>{item.ptexttwo}</p>
                        <p>{item.ptextthree}</p>
                    </div>
                </div>
            )
        })}
        </>
      );
}
 
export default CeoInfo;