export const saveEmail = (payload) => ({ type: 'SAVE_EMAIL', payload });

export const updateEmail = (payload) => ({ type: 'UPDATE_EMAIL', payload });

export const setCurrencies = (payload) => ({ type: 'SET_CURRENCIES', payload });

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const filter = Object.keys(data).filter((each) => each !== 'USDT');
  dispatch(setCurrencies(filter));
};

export const setExpenses = (payload) => ({ type: 'SET_EXPENSES', payload });

export const getExpenses = (dispatch, obj) => async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;

  const { id, valor, desc, moeda, pagamento, tag } = obj;
  const expenses = {
    id,
    value: valor,
    description: desc,
    currency: moeda,
    method: pagamento,
    tag,
    exchangeRates: data,
  };
  dispatch(setExpenses(expenses));
};
