import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./History.styles";
import { CyclesContext } from "../../contexts/CycleContext";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor={"green"}>concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor={"yellow"}>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor={"red"}>Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor={"green"}>concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor={"green"}>concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
