import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/Table.scss';

export default function Table() {
  const { expenses } = useSelector((state) => state.wallet);

  const verifyName = (name) => {
    if (name === 'USD') return 'Dólar Comercial';
    if (name === 'CAD') return 'Dólar Canadense';
    if (name === 'EUR') return 'Euro';
    if (name === 'GBP') return 'Libra Esterlina';
    if (name === 'ARS') return 'Peso Argentino';
    if (name === 'BTC') return 'Bitcoin';
    if (name === 'LTC') return 'Litecoin';
    if (name === 'JPY') return 'Iene Japonês';
    if (name === 'CHF') return 'Franco Suíço';
    if (name === 'AUD') return 'Dólar Australiano';
    if (name === 'CNY') return 'Yuan Chinês';
    if (name === 'ILS') return 'Novo Shekel Israelense';
    if (name === 'ETH') return 'Ethereum';
    if (name === 'XRP') return 'Ripple';
    return 'Dogecoin';
  };

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((each, index) => (
            <tr key={ index }>
              <td>{ each.description }</td>
              <td>{ each.tag }</td>
              <td>{ each.method }</td>
              <td>{ parseFloat(each.value).toFixed(2) }</td>
              <td>{ verifyName(each.currency) }</td>
              <td>{ parseFloat(each.exchangeRates[each.currency].ask).toFixed(2) }</td>
              <td>{ (each.value * each.exchangeRates[each.currency].ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button type="button">Add</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
