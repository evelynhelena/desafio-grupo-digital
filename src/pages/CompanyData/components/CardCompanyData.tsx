import { Box, Flex, Text } from '@radix-ui/themes'

import { CompanyDataProps } from '../../../types/cnpjQuery'

interface CardCompanyDataProps {
  companyData?: CompanyDataProps
}

export function CardCompanyData({ companyData }: CardCompanyDataProps) {
  return (
    <Box className="card-company-data">
      <Box className="bg-color header" p="3">
        {companyData?.nome_fantasia || companyData?.razao_social}
      </Box>

      <Flex
        justify="between"
        p="4"
        direction={{ initial: 'column', md: 'row' }}
        gap="3"
      >
        <Flex direction="column" gap="2" mt="3">
          <Text>
            <Text weight="bold">Razão Social:</Text> {companyData?.razao_social}
          </Text>
          <Text>
            <Text weight="bold">Nome Fantasia:</Text>{' '}
            {companyData?.nome_fantasia}
          </Text>
          <Text>
            <Text weight="bold">CNPJ:</Text> {companyData?.cnpj}
          </Text>
          <Text>
            <Text weight="bold">Endereço:</Text>{' '}
            {`${companyData?.logradouro}, ${companyData?.bairro} - 
            ${companyData?.municipio}, ${companyData?.cep} - ${companyData?.uf}`}
          </Text>
          <Text>
            <Text weight="bold">Email: </Text> {companyData?.email}
          </Text>
        </Flex>

        <Flex direction="column" gap="2" mt="3">
          <Text>
            <Text weight="bold">Data de Abertura: </Text>
            {companyData?.data_inicio_atividade}
          </Text>
          <Text>
            <Text weight="bold">Situação: </Text>
            {companyData?.descricao_situacao_cadastral}
          </Text>
          <Text>
            <Text weight="bold">Ramo: </Text>
            {companyData?.cnae_fiscal_descricao}
          </Text>
          <Text>
            <Text weight="bold">Contato: </Text>
            {companyData?.ddd_telefone_1}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
