import AuthService from "../service/auth-service";
const auth = new AuthService();

const useGoogleSignin = () => {
	return auth.signinWithGoogle.bind(auth);
}

export default useGoogleSignin;
