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
  updateData: async function (
    capmpanyData: CompanyToEditProps,
  ): Promise<CompanyDataProps> {
    const { data }: CnpjQueryResponse = await api.put(
      `${capmpanyData.cnpj}`,
      capmpanyData,
    )
    return data
  },
}
