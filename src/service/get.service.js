export async function fetchTransfers() {
  const res = await fetch('http://localhost:3000/transactions').then((res) =>
    res.json().catch((err) => {
      throw err;
    })
  );

  return res;
}
