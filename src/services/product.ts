import { CnpjQueryResponse, CompanyDataProps } from '../types/cnpjQuery'
import api from './Api'

export const cnpjService = {
  getCnpjData: async function (cnpj: string): Promise<CompanyDataProps> {
    const { data }: CnpjQueryResponse = await api.get(`${cnpj}`)
    return data
  },
}
