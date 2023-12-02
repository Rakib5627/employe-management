import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEmployees = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data: role = [], isPending: loading} = useQuery({
        queryKey: ['role'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/users/e/employee');
            return res.data;
        }
    })


    return [role, loading, refetch]
}

export default useEmployees;