import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: { transaction: Model },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-02 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 600,
          createdAt: new Date('2021-02-01 11:00:00'),
        },
        {
          id: 3,
          title: 'Internet',
          type: 'withdraw',
          category: 'Casa',
          amount: 85,
          createdAt: new Date('2021-02-12 11:00:00'),
        },
        {
          id: 4,
          title: 'Carro',
          type: 'withdraw',
          category: 'Casa',
          amount: 500,
          createdAt: new Date('2021-02-15 11:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
