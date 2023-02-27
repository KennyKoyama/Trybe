export default async function getAddressFromCep(cep) {
  if (!cep) throw new Error('Você precisa passar um CEP');

  const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await result.json();
  return data;
}
