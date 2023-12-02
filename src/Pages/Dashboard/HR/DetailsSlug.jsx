import { useLoaderData } from "react-router-dom";




const DetailsSlug = () => {

    const details = useLoaderData();
  


  
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={details.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Employee Name:{details.name}</h2>
                    <p>Email : {details.email}</p>
                    
                </div>
            </div>




        </div>
    );
};

export default DetailsSlug;