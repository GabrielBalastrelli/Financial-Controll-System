export async function editTransaction(id, data) {
  const url = `http://localhost:3000/transactions/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return res;
}
