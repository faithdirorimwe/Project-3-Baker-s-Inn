import useFetch from "./useFetch";

const CeoInfo = () => {
    const{data:CeoInfo, error, isPending} = useFetch('http://localhost:7001/CeoInfo');
    return (
        <>
          {CeoInfo && CeoInfo.map((item, index) =>{
            return(
                <div className="ceo-info" key={index}>
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