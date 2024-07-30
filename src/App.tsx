import '@radix-ui/themes/styles.css'
import './styles/global.scss'
import 'remixicon/fonts/remixicon.css'

import { Theme } from '@radix-ui/themes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'

import { CnpjQueryProvider } from './hooks/useCnpjQuery'
import { CnpjQuery } from './pages/CnpjQuery'
import { CompanyData } from './pages/CompanyData'
export function App() {
  return (
    <CnpjQueryProvider>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CnpjQuery />} />
            <Route path="/company-data" element={<CompanyData />} />
          </Routes>
        </BrowserRouter>
        <Toaster richColors closeButton position="top-right" />
      </Theme>
    </CnpjQueryProvider>
  )
}
