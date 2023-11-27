import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import im1 from '../../../assets/im1.jpg'
import im2 from '../../../assets/im2.jpg'
import im3 from '../../../assets/im3.jpg'
import im4 from '../../../assets/im4.jpg'
import im5 from '../../../assets/im5.jpg'

const Banner = () => {
    return (
        <Carousel className="text-center" >
        <div>
            <img src={im2} />
        </div>
        <div>
            <img src={im1} />
        </div>
        <div>
            <img src={im3} />
           
        </div>
        <div>
            <img src={im4} />
         
        </div>
        <div>
            <img src={im5} />
           
        </div>   
    </Carousel>
    );
};

export default Banner;