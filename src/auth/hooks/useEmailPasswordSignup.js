import AuthService from "../service/auth-service";
const auth = new AuthService();

const useEmailPasswordSignup = () => {
	return auth.signupWithEmailAndPassword.bind(auth);
}

export default useEmailPasswordSignup;
