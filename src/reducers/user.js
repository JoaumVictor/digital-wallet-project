// Esse reducer será responsável por tratar as informações da pessoa usuária

const userState = {
  email: '',
};

function userReducer(state = userState, { type, payload }) {
  switch (type) {
  case 'SAVE_EMAIL':
    return { ...state, email: payload };
  default:
    return state;
  }
}

export default userReducer;
