import {
  CnpjQueryResponse,
  CompanyDataProps,
  CompanyToEditProps,
} from '../types/cnpjQuery'
import api from './Api'

export const cnpjService = {
  getCnpjData: async function (cnpj: string): Promise<CompanyDataProps> {
    const { data }: CnpjQueryResponse = await api.get(`${cnpj}`)
    return data
  },

  updateData: async function (capmpanyData: CompanyToEditProps) {
    await fetch('https://apiFake', {
      method: 'POST',
      body: JSON.stringify(capmpanyData),
    }).then((data) => {
      return data
    })
  },
}
