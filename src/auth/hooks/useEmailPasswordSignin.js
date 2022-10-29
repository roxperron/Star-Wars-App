import AuthService from "../service/auth-service";
const auth = new AuthService();

const useEmailPasswordSignin = () => {
	return auth.signinWithEmailAndPassword.bind(auth);
}

export default useEmailPasswordSignin;