import useFetch from "./useFetch";

const Notified = () => {
    const { data: Notified, error, isPending } = useFetch('http://localhost:7001/Notified');
    return (
        <>
            {Notified && Notified.map((item, index) => {
                return (
                    <div className="notification" key={index}>
                        
                            <img src={item.patternOne} alt="" />
                            <img src={item.patternTwo} alt="" />
                        
                        <div className="notify-content">
                            <div className="infor">
                                <h2>{item.title}</h2>
                                <form>
                                   <input type="text" 
                                   className="email"
                                   required
                                   value={item.email}
                                   /> 
                                   <input type="text" 
                                   className="submit"
                                   required
                                   value={item.submit}
                                   />
                                </form>
                            </div>
                            <div className="image-container">
                                    <img src={item.imageOne} alt="" />
                                    <img src={item.imageTwo} alt="" />
                                    <img src={item.imageThree} alt="" />
                              
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Notified;