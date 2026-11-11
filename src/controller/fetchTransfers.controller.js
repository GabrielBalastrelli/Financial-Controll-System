import { fetchTransfers } from '../service/get.service.js';
import { showTransactions } from '../views/showTransactions.js';

export async function fecthTransfersController() {
  try {
    const res = await fetchTransfers();

    showTransactions(res);
  } catch (err) {
    console.log(err);
  }
}
