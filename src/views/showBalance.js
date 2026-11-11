import { formatValue } from '../utils/formatValue.js';
import { updateBalance } from '../utils/updateBalance.js';

export function showBalance(data) {
  const inBalance = document.getElementById('inBalance');

  const balance = updateBalance(data);

  inBalance.innerText = `Saldo Total: ${formatValue(balance)}`;

  if (balance < 0) {
    inBalance.classList.add('valueNegative');
  }

  return 0;
}
