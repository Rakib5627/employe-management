import Swal from "sweetalert2";


const ContactUs = () => {

    const handleContact = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const number = form.number.value;
        const address = form.address.value;
        const email = form.email.value;

       
        

        const review = {
            name,
            email,
            number,
            address,
            description,        
            
        }

       

        fetch('https://employee-management-server-12.vercel.app/contacts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Submitted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

    }
    return (
        <div className="mt-20">
        <h2 className='text-center text-3xl'>Contact Us </h2>
        <form onSubmit={handleContact} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input type="text" name="number" placeholder="number" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" name="address" placeholder="address" className="input input-bordered" />
                </div>
                

                <div className="mb-8 col-span-2 row-span-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="description" className="input input-bordered" />
                </div>
                </div>

            </div>
            <div className="form-control mt-6">
                <input className="btn  btn-accent btn-block" type="submit" value="Submit" />
            </div>
        </form>
        <div className="card-body">

        </div>
    </div>
    );
};

export default ContactUs;