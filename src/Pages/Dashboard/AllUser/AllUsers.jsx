import { useQuery } from "@tanstack/react-query";
import { FaFileExport, FaMedal } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeHr = user => {
        axiosSecure.patch(`/users/hr/${user._id}`)
            .then(res => {
              
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an HR Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleFire = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes , Fire!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/fire/${user._id}`)
                    .then(res => {
                       
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: `${user.name} is Fired!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make HR</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'hr' ? <p>HR</p> :
                                        user.role === 'admin' ? <FaMedal></FaMedal> :
                                            <button onClick={() => handleMakeHr(user)}
                                                className="btn bg-purple-400 hover:bg-purple-700">
                                                Make HR
                                            </button>}
                                </td>
                                <td>
                                    {  user.fired? <p>Fired</p> :
                                        <button
                                            onClick={() => handleFire(user)}
                                            className="btn btn-ghost btn-lg">
                                            <FaFileExport className="text-red-600"></FaFileExport>
                                        </button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;