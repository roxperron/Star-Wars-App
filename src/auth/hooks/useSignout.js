import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetUser } from '../store/authSlice';
import AuthService from '../service/auth-service';

const auth = new AuthService();

const useSignout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return async () => {
		await auth.logout();
		dispatch(resetUser());
		navigate("/login");
	}
};

export default useSignout;