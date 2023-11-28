import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const getAdmin = async () => {
    const res = await axiosSecure.get(`admin/admins?email=${user.email}`);
    return res;
  };

  const {
    data: isAdmin,
    isPending: isAdminLoading,
    refetch,
  } = useQuery({
    queryKey: ["admin"],
    enabled: !loading,
    queryFn: getAdmin,
  });
  refetch();
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
