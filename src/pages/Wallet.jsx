import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import '../styles/Wallet.scss';
import { getCurrencies, getExpenses } from '../store/actions';
import icon from '../images/icon.png';
import Table from '../components/Table';

export default function Wallet() {
  const { user, wallet } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: 0,
    valor: 0,
    desc: '',
    moeda: 'USD',
    pagamento: 'Dinheiro',
    tag: 'Alimentação',
  });

  const handleInput = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const addRedux = () => {
    dispatch(getExpenses(dispatch, data));
    setData({
      ...data,
      valor: 0,
      desc: '',
      id: data.id + 1,
    });
  };

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <div className="carteira-container">
      <header className="header-container">
        <div className="header-content-1">
          <img className="icon" src={ icon } alt="" />
          <h4 className="title">TrybeWallet</h4>
        </div>
        <div className="header-content-1">
          <p className="font-color">Email:</p>
          <p className="color-blue font-color" data-testid="email-field">
            {user.email}
          </p>
        </div>
        <div className="header-content-1">
          <p className="font-color">Câmbio Atual:</p>
          <p className="font-color" data-testid="header-currency-field">BRL</p>
        </div>
        <div className="header-content-1">
          <p className="font-color">Despesa Total: </p>
          <p className="font-color" data-testid="total-field">
            { (wallet.expenses.reduce(
              (acc, each) => acc + (
                each.value * each.exchangeRates[each.currency].ask
              ), 0,
            )).toFixed(2) }
          </p>
        </div>
      </header>

      <section className="options-container">
        <label htmlFor="valor">
          Valor:
          <input
            onChange={ handleInput }
            value={ data.valor }
            name="valor"
            data-testid="value-input"
            className="input"
            id="valor"
            type="number"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            onChange={ handleInput }
            name="desc"
            value={ data.desc }
            data-testid="description-input"
            className="input"
            id="descricao"
            type="text"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            onChange={ handleInput }
            name="moeda"
            value={ data.moeda }
            className="input"
            id="moeda"
          >
            { wallet?.currencies.map(
              (each) => (
                <option key={ uuidv4() } value={ each }>
                  { each }
                </option>
              ),
            )}
          </select>
        </label>
        <label htmlFor="pagamento">
          Metodo de Pagamento:
          <select
            onChange={ handleInput }
            name="pagamento"
            value={ data.pagamento }
            data-testid="method-input"
            className="input"
            id="pagamento"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            onChange={ handleInput }
            name="tag"
            value={ data.tag }
            data-testid="tag-input"
            className="input"
            id="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          className="sendRequest"
          onClick={ addRedux }
          type="button"
        >
          Adicionar despesa
        </button>
      </section>
      <Table />
    </div>
  );
}
