import React from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

function TransactionsTable() {
  React.useEffect(() => {
    api.get("/transactions")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev web</td>
            <td className="deposity">R$12.000</td>
            <td>Dev</td>
            <td>20/02/2020</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>21/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export { TransactionsTable };
