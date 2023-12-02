import Banner from "../Banner/Banner";
import FreeJoin from "../FreeJoin/FreeJoin";
import Skills from "../Slills/Skills";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <FreeJoin></FreeJoin>
            <div className="mt-20 mb-4">
                <p className=" md:text-2xl font-semibold text-center">Trusted By Over 400 Employees</p>
            </div>
            <Banner></Banner>
            <Skills></Skills>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;