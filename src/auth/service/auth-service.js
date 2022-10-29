import { initializeApp, getApp, getApps } from "firebase/app";
import {
	initializeAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	browserPopupRedirectResolver
} from "firebase/auth";

class AuthService {
	configs = {
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
		measurementId: process.env.REACT_APP_MEASUREMENT_ID
	}

	constructor() { }

	auth = initializeAuth(this.app(), {
		popupRedirectResolver: browserPopupRedirectResolver,
	});

	app() {
		return getApps().length ? getApp() : initializeApp(this.configs);
	}

	onAuthChange(callback) {
		onAuthStateChanged(this.auth, callback);
	}

	async signupWithEmailAndPassword(email, password) {
		await createUserWithEmailAndPassword(this.auth, email, password)
	}

	async signinWithEmailAndPassword(email, password) {
		try {
			await signInWithEmailAndPassword(this.auth, email, password);
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				this.signupWithEmailAndPassword(email, password)
			} else {
				console.error(error);
			}
		}
	}

	async signinWithGoogle() {
		await signInWithPopup(this.auth, new GoogleAuthProvider());
	}

	async logout() {
		await signOut(this.auth);
	}
}

export default AuthService;