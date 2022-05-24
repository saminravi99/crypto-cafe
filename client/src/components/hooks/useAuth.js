import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAuth = () => {
  const [authUser, authLoading, authError] = useAuthState(auth);
  return [authUser, authLoading, authError];
};

export default useAuth;

