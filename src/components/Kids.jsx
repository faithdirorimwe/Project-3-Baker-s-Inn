import { ReactComponent as PatternOne } from '../assets/img/African Pattern 1.svg';
import { ReactComponent as PatternTwo } from '../assets/img/African Pattern 5.svg';
import Button from './Button';
import useFetch from "./useFetch";


const Kids = () => {
   const { data: Kids, error, isPending } = useFetch('http://localhost:7001/Kids');
   return (
      <>
         {Kids && Kids.map((item, index) => {
            return (
               <div className="kids" key={index}>
                  
                  <div className="kids-content">
                     <PatternOne className='pattern' />
                     <PatternTwo className='pattern' />
                  </div>
                  <div className="kids-inner">
                     <div className="img-container">
                        <div className="one">
                           <img src={item.imageThree} alt="" />
                        </div>
                        <div className="two">
                           <img src={item.imageTwo} alt="" />
                        </div>
                        <div className="three">
                           <img src={item.imageOne} alt="" />
                        </div>
                        <div className="four">
                           <img src={item.imageFour} alt="" />
                        </div>
                     </div>
                     <div className="content">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <Button toPath='' title='Play games'/>
                     </div>
                  </div>

               </div>
            )
         })}
      </>
   );
}

export default Kids;