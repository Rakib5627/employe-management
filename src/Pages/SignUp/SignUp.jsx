import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_key}`;

const SignUp = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async(data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        // console.log(res.data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            role: data.role,
                            email: data.email,
                            image: res.data.data.display_url

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1000
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div>
            <div className=" text-my-blue bg-neutral-50 mx-auto md:w-1/2 shadow-xl py-5">
                <h2 className="text-3xl my-10 text-center">Please Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="name..." className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className=" border-2 border-gray-500" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select className=" text-slate-500" {...register("role")}>
                            <option className=" text-slate-600" value="employee" >Employee</option>
                            <option className="text-slate-600" value="hr">HR</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-my-pink hover:bg-my-red">Register</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;