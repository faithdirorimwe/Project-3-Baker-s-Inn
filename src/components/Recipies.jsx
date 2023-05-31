// import useFetch from "./useFetch";
import data from "../../database/db";
import Tabs from "./Tabs";

const Recipies = () => {
    // const{data: Recipies, error, isPending} = useFetch('http://localhost:7001/Recipies');
    return ( 
        <>
        {data.Recipies && data.Recipies.map((item, index) => {
            return(
                <div className="recipies" key={index}>
                    <h2>{item.title}</h2>
                    <Tabs/>
                </div>
            )
        })}
        </>
     );
}
 
export default Recipies;