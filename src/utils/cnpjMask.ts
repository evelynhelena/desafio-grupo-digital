export const handleChange = (cnpj: string) => {
  cnpj = cnpj.replace(/\D/g, '')

  if (cnpj.length > 12) {
    cnpj = cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      '$1.$2.$3/$4-$5',
    )
  } else if (cnpj.length > 8) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4}).*/, '$1.$2.$3/$4')
  } else if (cnpj.length > 5) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3}).*/, '$1.$2.$3')
  } else if (cnpj.length > 2) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3}).*/, '$1.$2')
  }
  return cnpj
}
