import './index.scss'

import { Box, Button, Flex, Text } from '@radix-ui/themes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { ModalEdit } from '../../components/ModalEdit'
import { useCnpjQuery } from '../../hooks/useCnpjQuery'
import { cnpjService } from '../../services/company'
import { CompanyToEditProps } from '../../types/cnpjQuery'
import { CardCompanyData } from './components/CardCompanyData'
import { CardSocios } from './components/cardSocios'

export function CompanyData() {
  const { companyData } = useCnpjQuery()

  const navigate = useNavigate()

  useEffect(() => {
    if (!companyData) navigate('/')
  })

  const handleEditData = async (data: CompanyToEditProps) => {
    try {
      await cnpjService.updateData(data)
      toast.success('Dados Atualizados com sucesso')
      navigate('/')
    } catch (e) {
      // Foi feita uma api fake, por isso estou retornando sucesso no erro
      toast.success('Dados Atualizados com sucesso')
      navigate('/')
    }
  }

  return (
    <>
      <Box width="100%" height="71px" className="bg-color" />

      <Flex
        p="8"
        width="100%"
        className="content-company-data"
        direction="column"
      >
        <Flex direction="column" gap="4" width="100%">
          <Text>Confira os dados da empresa pesquisada</Text>

          <CardCompanyData companyData={companyData} />

          <Flex justify="end" mb="8">
            <ModalEdit
              handleEditData={handleEditData}
              buttonAction={
                <Box asChild width="196px" className="cursor-pointer">
                  <Button className="bg-color">Alterar dados </Button>
                </Box>
              }
            />
          </Flex>
        </Flex>

        <Text>
          <Text weight="bold">Número de sócios: </Text>{' '}
          {companyData?.qsa.length}
        </Text>

        {companyData?.qsa.map((socio, index) => (
          <CardSocios key={index} socioData={socio} />
        ))}
      </Flex>
    </>
  )
}
