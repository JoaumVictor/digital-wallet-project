// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const walletState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = walletState, { type, payload }) {
  switch (type) {
  case 'SET_CURRENCIES':
    return { ...state, currencies: payload };
  case 'SET_EXPENSES':
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
}

export default walletReducer;
