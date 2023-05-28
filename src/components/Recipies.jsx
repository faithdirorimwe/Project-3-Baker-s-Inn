import useFetch from "./useFetch";
import Tabs from "./Tabs";

const Recipies = () => {
    const{data: Recipies, error, isPending} = useFetch('http://localhost:7001/Recipies');
    return ( 
        <>
        {Recipies && Recipies.map((item, index) => {
            return(
                <div className="recipies">
                    <h2>{item.title}</h2>
                    <Tabs/>
                </div>
            )
        })}
        </>
     );
}
 
export default Recipies;