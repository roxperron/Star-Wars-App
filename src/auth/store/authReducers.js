const reducers = {
	updateEmail: (state, action) => {
		state.user = { ...state.user, email: action.payload };
	},
	updateName: (state, action) => {
		state.user = { ...state.user, name: action.payload };
	},
	updateWholeUser: (state, action) => {
		const id = state.user.id + 1;
		state.user = { ...action.payload, id: id };
	},
	resetUser: (state) => {
		state.user = {
			email: "",
			name: '',
			id: '',
		}
	}
}

export default reducers;
