import { createElement } from '../utils/createElement.js';
import { formatValue } from '../utils/formatValue.js';
import { showBalance } from './showBalance.js';
import { deleteTransaction } from '../service/delete.service.js';

export function showTransactions(data) {
  const lstAccounts = document.getElementById('lstAccounts');

  if (!lstAccounts) throw new Error('Elemento -lstAccounts- não encontrado!');

  const fragment = document.createDocumentFragment();

  data &&
    data.forEach((ele) => {
      const div = createElement('div');
      const pName = createElement('p');
      const pValue = createElement('p');
      const pTransactionDate = createElement('p');
      const pUpdateAt = createElement('p');

      div.id = ele?.id;
      pName.innerText = `Conta: ${ele?.name}`;
      pName.value = ele?.name;
      pValue.value = ele?.value;
      pValue.innerText = `Valor: ${formatValue(Number(ele?.value))}`;
      if (Number(ele?.value) < 0) {
        pValue.classList.add('valueNegative');
      }
      pTransactionDate.id = 'inTransactionDate';
      pTransactionDate.value = ele?.transactionDate;
      pTransactionDate.innerText = `Data da transação: ${ele?.transactionDate}`;
      pUpdateAt.value = ele?.updateAt;
      pUpdateAt.innerText = pUpdateAt?.value
        ? `Data de Atualização: ${ele?.updateAt}`
        : (pUpdateAt.hidden = true);

      const btnEditTransaction = createElement('button');
      btnEditTransaction.innerText = 'Editar';
      btnEditTransaction.addEventListener('click', () => {
        const inName = document.getElementById('inName');
        const inValue = document.getElementById('inValue');
        const inId = document.getElementById('inId');

        inId.value = ele?.id;

        inName.value = ele?.name;
        inName.focus();

        inValue.value = ele?.value;
        inValue.focus();
      });

      const btnDelete = createElement('button');
      btnDelete.innerText = 'Excluir';
      btnDelete.addEventListener('click', () => {
        console.log(ele?.id);
        deleteTransaction(ele?.id);
      });

      div.append(
        pName,
        pValue,
        pTransactionDate,
        pUpdateAt,
        btnEditTransaction,
        btnDelete
      );

      fragment.append(div);
    });
  lstAccounts.replaceChildren(fragment);

  showBalance(data);
}
