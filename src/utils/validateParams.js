export function validateParams(data) {
  if (!data?.name.trim('')) throw 'O Nome da conta é obrigatório!';

  if (isNaN(data?.value) || Number(data?.value) === 0)
    throw 'O valor da conta é obrigatório!';

  return 0;
}
