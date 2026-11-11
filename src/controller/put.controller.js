import { editTransaction } from '../service/put.service.js';
import { validateParams } from '../utils/validateParams.js';
import { showTransactions } from '../views/showTransactions.js';
import { fetchTransfers } from '../service/get.service.js';

export async function controllerPut() {
  try {
    const inName = document.getElementById('inName');
    const inValue = document.getElementById('inValue');
    const inId = document.getElementById('inId');
    const inTransactionDate = document.getElementById('inTransactionDate');

    const id = inId?.value;

    if (!id) throw new Error('O Id da transação é obrigatório!');

    const name = inName?.value;
    const value = inValue?.value;
    const transactionDate = inTransactionDate?.value;
    const updateAt = new Date().toLocaleDateString('pt-br', {
      dateStyle: 'medium',
    });

    const data = {
      name,
      value,
      updateAt,
      transactionDate,
    };

    validateParams(data);

    await editTransaction(id, data);

    const res = await fetchTransfers();
    showTransactions(res);
  } catch (err) {
    console.log(err);
  }
}
