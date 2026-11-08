export async function deleteTransaction(id) {
  if (!id.trim()) throw new Error("Identificador da transação é obrigatória!");

  const res = await fetch(`http://localhost:3000/transactions/${id}`, {
    method: "DELETE",
  });

  if (!res) throw new Error("Erro ao deletar a transação!");

  return true;
}
