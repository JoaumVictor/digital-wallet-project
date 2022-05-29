// import user from './user';
// import wallet from './wallet';

import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export default rootReducer;

// {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: []
//   }
// }

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
