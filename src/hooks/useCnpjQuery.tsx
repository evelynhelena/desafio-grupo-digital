import { createContext, ReactNode, useContext, useState } from 'react'

import { CompanyDataProps } from '../types/cnpjQuery'

interface CnpjQueryProps {
  children: ReactNode
}

interface CnpjQueryData {
  cnpj: string
  companyData: CompanyDataProps | undefined
  seacheCnpj: (value: string) => void
  setCnpj: (value: string) => void
  setCompanyData: (data?: CompanyDataProps) => void
}

export const CnpjQueryContext = createContext<CnpjQueryData>(
  {} as CnpjQueryData,
)

export function CnpjQueryProvider({ children }: CnpjQueryProps) {
  const [cnpj, setCnpj] = useState<string>('')
  const [companyData, setCompanyData] = useState<CompanyDataProps>()

  const seacheCnpj = (valeu: string) => {
    setCnpj(valeu)
  }

  return (
    <CnpjQueryContext.Provider
      value={{ cnpj, seacheCnpj, setCnpj, setCompanyData, companyData }}
    >
      {children}
    </CnpjQueryContext.Provider>
  )
}

export function useCnpjQuery() {
  const context = useContext(CnpjQueryContext)
  return context
}
