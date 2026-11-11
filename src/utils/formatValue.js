export function formatValue(value) {
  if (isNaN(value)) {
    throw new Error('O valor a ser formatado deve ser um número!');
  }

  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
