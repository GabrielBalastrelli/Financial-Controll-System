import { createElement } from "../utils/createElement.js";
import { formatValue } from "../utils/formatValue.js";
import { showBalance } from "./showBalance.js";
import { deleteTransaction } from "../service/delete.service.js";

export function showTransactions(data) {
  const lstAccounts = document.getElementById("lstAccounts");

  if (!lstAccounts) throw new Error("Elemento -lstAccounts- não encontrado!");

  lstAccounts.innerHTML = "";

  data &&
    data.forEach((ele) => {
      const div = createElement("div");
      const pName = createElement("p");
      const pValue = createElement("p");
      const pTransactionDate = createElement("p");

      div.id = ele?.id;
      pName.innerText = `Conta: ${ele?.name}`;
      pValue.innerText = `Valor: ${formatValue(Number(ele?.value))}`;
      pTransactionDate.innerText = `Data da transação: ${ele?.transactionDate}`;

      const btnDelete = createElement("button");
      btnDelete.innerText = "Excluir";
      btnDelete.addEventListener("click", () => {
        console.log(ele?.id);
        deleteTransaction(ele?.id);
      });

      div.append(pName, pValue, pTransactionDate, btnDelete);

      lstAccounts.append(div);
    });

  showBalance(data);
}
