import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useWorksheet = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: work = [] } = useQuery({
        queryKey: ['work', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/works?employeeEmail=${user.email}`);
            //  console.log(res.data);
            return res.data;
        }
    })

    return [work, refetch]
};

export default useWorksheet;