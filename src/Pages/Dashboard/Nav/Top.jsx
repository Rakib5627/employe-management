import img from '../../../assets/blog-illustration-recognition-rewards-top-performer.jpg';

const Top = () => {
    return (
        <div>
            <div>
                <img src={img} alt="" className=" mx-auto"/>
                <p className=" text-center text-3xl">Meet our top performer of the month </p>
            </div>
        </div>
    );
};

export default Top;