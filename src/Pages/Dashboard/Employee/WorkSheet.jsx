
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useWorksheet from '../../../hooks/useWorksheet';




const WorkSheet = () => {

    const [date, setDate] = useState(null);
    const {user} = useAuth();
    // console.log(user.displayName);
    
    const [work , refetch] = useWorksheet();
    
    const axiosSecure = useAxiosSecure();

    const handleWorkAdd = async (event) => {
        event.preventDefault();

        const form = event.target;
        const task = form.task.value;
        const dailyHour = form.hour.value;
        const date = form.date.value;

        // console.log(dailyHour);

        const workDetails = {
           employeeName : user.displayName,
           employeeEmail : user.email,
           task,
           dailyHour,
           date
        }

        // console.log(workDetails);
        const workRes = await axiosSecure.post('/works', workDetails);
       
        // console.log(workRes.data)
        if(workRes.data.insertedId){ 
           refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Work Submitted',
                showConfirmButton: false,
                timer: 1500
              });
        }

    }


    return (
        <div className='mt-5'>
            <form onSubmit={handleWorkAdd} className=' flex justify-between border border-purple-500 p-5' action="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task</span>
                    </label>
                    <label className="input-group">
                        <select type="text" name="task" placeholder="" className="border-black border">
                            <option value="Sales">Sales</option>
                            <option value="Support">Support</option>
                            <option value="Content">Content</option>
                            <option value="Paper work">PaperWork</option>
                            <option value="Labour">Labour</option>

                        </select>
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <DatePicker name="date" value={date} onChange={date => setDate(date)}
                        minDate={new Date()}
                    />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Hours</span>
                    </label>
                    <input type="number" name="hour" placeholder="hours" className=" px-2 border-solid border-black border" />
                </div>
                <div className="form-control mt-6">
                    <input className="border px-5 py-1 border-purple-500 hover:bg-purple-500" type="submit" value="Submit" />
                </div>
            </form>

            <div>
             <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Hour</th>
                            <th>Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            work.map((w, index) => <tr key={w._id}>
                                <th>{index + 1}</th>
                                <td>{w.task}</td>
                                <td>{w.dailyHour}</td>
                                <td>{w.date}</td>
                                
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
            </div>
        </div>
    );
};

export default WorkSheet;