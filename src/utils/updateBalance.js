export const updateBalance = (data) =>
  data.reduce((acc, transaction) => acc + Number(transaction?.value) ?? 0, 0);
