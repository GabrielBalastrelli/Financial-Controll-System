export async function createTransaction(data) {
  const url = 'http://localhost:3000/transactions';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });

  return res;
}
