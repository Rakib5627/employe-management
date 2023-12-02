// import Toggle from "react-toggle";
import { FaCheck, FaTimes } from "react-icons/fa";
import useEmployees from "../../../hooks/useEmployees";

// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";





const EmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const [employee, refetch] = useEmployees();


    // console.log(employee);



    const handleVerify = async (emp) => {

        const w = await axiosSecure.patch(`/users/e/employee/${emp._id}`)
        if (w.data.modifiedCount > 0) {

            Swal.fire({
                icon: 'success',
                text: 'User Verified',
                timer: 1200
            });
            refetch();
        }

    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Bank Acc</th>
                            <th>Salary</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            employee.map((emp, index) => <tr key={emp._id}>
                                <th>{index + 1}</th>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>
                                    {emp.verified ?
                                        <>
                                            <FaCheck />
                                        </>
                                        :
                                        <>
                                            <div onClick={() => handleVerify(emp)}><FaTimes></FaTimes></div>
                                        </>
                                    }
                                </td>
                                <td>{emp.bank}</td>
                                <td>{emp.salary}</td>


                                <th>

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-ghost btn-xs" onClick={() => document.getElementById('my_modal_5').showModal()}>Pay</button>
                                    <dialog id="my_modal_5" className="modal text-center modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg"></h3>
                                            <p className="py-4">Payment Amount ${emp.salary}</p>
                                            <p className="pb-4">Account No.{emp.bank}</p>
                                            <form action="">
                                                    <div>
                                                        <label className="input-group">
                                                            <select type="text" name="month" placeholder="" className="border-black border">
                                                                <option value="January">January</option>
                                                                <option value="February">February</option>
                                                                <option value="March">March</option>
                                                                <option value="April">April</option>
                                                                <option value="May">May</option>
                                                                <option value="June">June</option>
                                                                <option value="July">July</option>
                                                                <option value="August">August</option>
                                                                <option value="September">September</option>
                                                                <option value="October">October</option>
                                                                <option value="November">November</option>
                                                                <option value="December">December</option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                    <div className="mt-2">
                                                        <label className="input-group">
                                                            <select type="text" name="Year" placeholder="" className="border-black border">
                                                                <option value="2023">2023</option>
                                                                <option value="2024">2024</option>
                                                                <option value="2025">2025</option>
                                                                <option value="2026">2026</option>
                                                                <option value="2027">2027</option>
                                                                <option value="2028">2028</option>
                                                                <option value="2029">2029</option>
                                                                <option value="2030">2030</option>
                                                                <option value="2031">2031</option>
                                                                
                                                            </select>
                                                        </label>
                                                    </div>
                                                    <button className="btn my-4">Make Payment</button>
                                                </form>
                                            <div className="">
                                                
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Cancel</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </th>
                                <th>
                                    <Link  to={`/dashboard/details/${emp._id}`} ><button className="btn btn-ghost btn-xs">Details</button></Link>
                                </th>

                            </tr>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default EmployeeList;