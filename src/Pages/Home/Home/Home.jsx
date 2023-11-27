import Banner from "../Banner/Banner";
import FreeJoin from "../FreeJoin/FreeJoin";


const Home = () => {
    return (
        <div>
            <FreeJoin></FreeJoin>
            <div className="mt-20 mb-4">
                <p className=" md:text-2xl font-semibold text-center">Trusted By Over 400 Employees</p>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;