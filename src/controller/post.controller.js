import Transaction from '../models/transaction.model.js';
import { createTransaction } from '../service/post.service.js';
import { validateParams } from '../utils/validateParams.js';
import { fetchTransfers } from '../service/get.service.js';
import { showTransactions } from '../views/showTransactions.js';

export async function controllerPost() {
  const inName = document.getElementById('inName');
  const inValue = document.getElementById('inValue');

  const name = inName.value;
  const value = inValue.value;

  const data = {
    name,
    value,
  };

  try {
    validateParams(data);

    const newTransaction = new Transaction(data?.name, data?.value);

    await createTransaction({
      name: newTransaction?.name,
      value: newTransaction?.value,
      transactionDate: newTransaction?.transactionDate,
    });

    const res = await fetchTransfers();

    showTransactions(res);
  } catch (err) {
    console.log(err);
  }
}
