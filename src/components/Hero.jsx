import { ReactComponent as PatternOne } from '../assets/img/African Pattern 1.svg'
import { ReactComponent as PatternTwo } from '../assets/img/African Pattern 5.svg'
import Button from './Button';
import whiteLoaf from '../assets/white-soft-loaf.png';
import seedLoaf from '../assets/seed-loaf.png';
import brownLoaf from '../assets/brown-loaf.png';
import wheatLoaf from '../assets/whole-wheat-loaf.png';

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-content">
                <PatternOne className='pattern' />
                <PatternTwo className='pattern' />
            </div>
            <div className="content-inner">
                <div className="infor">
                <div className="one"></div>
                    <div className="two"></div>
                    <div className="heading">
                        <p>Bringing you the</p>
                        <p> <span>best value at</span> the </p>
                        <p><span>best prices.</span></p>
                    </div>
                   
                    <p>The freshest sandwiches you can make are with Baker’s inn soft white loaf.</p>
                    <Button toPath='/' title="Read More" />
                </div>
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={whiteLoaf} alt="premium white bread" className='whiteBread' />
                    </div>
                    <div className="image-wrapper">
                        <img src={seedLoaf} alt="premium white bread" className='seedBread' />
                    </div>
                    <div className="image-wrapper">
                        <img src={brownLoaf} alt="premium white bread" className='brownBread' />
                    </div>
                    <div className="image-wrapper">
                        <img src={wheatLoaf} alt="premium white bread" className='wheatBread' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;