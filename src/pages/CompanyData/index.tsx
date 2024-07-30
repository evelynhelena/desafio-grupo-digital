import './index.scss'

import { Box, Button, Flex, Text } from '@radix-ui/themes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCnpjQuery } from '../../hooks/useCnpjQuery'

export function CompanyData() {
  const { companyData } = useCnpjQuery()

  const navigate = useNavigate()

  useEffect(() => {
    if (!companyData) navigate('/')
  })

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

          <Box className="card-company-data">
            <Box className="bg-color header" p="3">
              {companyData?.nome_fantasia}
            </Box>

            <Flex
              justify="between"
              p="4"
              direction={{ initial: 'column', md: 'row' }}
              gap="3"
            >
              <Flex direction="column" gap="2" mt="3">
                <Text>
                  <Text weight="bold">Razão Social:</Text>{' '}
                  {companyData?.razao_social}
                </Text>
                <Text>
                  <Text weight="bold">Nome Fantasia:</Text>{' '}
                  {companyData?.nome_fantasia}
                </Text>
                <Text>
                  <Text weight="bold">CNPJ:</Text> {companyData?.cnpj}
                </Text>
                <Text>
                  <Text weight="bold">Endereço:</Text> {companyData?.logradouro}
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

          <Flex justify="end" mb="8">
            <Box asChild width="196px" className="cursor-pointer">
              <Button className="bg-color">Alterar dados </Button>
            </Box>
          </Flex>
        </Flex>

        <Text>
          <Text weight="bold">Número de sócios: </Text>{' '}
          {companyData?.qsa.length}
        </Text>

        {companyData?.qsa.map((c) => (
          <Box
            className="card-company-data"
            mt="3"
            key={c.identificador_de_socio}
          >
            <Flex
              justify="between"
              p="4"
              direction={{ initial: 'column', md: 'row' }}
              gap="3"
            >
              <Flex direction="column" gap="2" mt="3">
                <Text>
                  <Text weight="bold">CPF: </Text>
                  {c.cnpj_cpf_do_socio}
                </Text>
                <Text>
                  <Text weight="bold">Nome do sócio: </Text>
                  {c.nome_socio}
                </Text>
                <Text>
                  <Text weight="bold"> País: </Text>
                  {c.pais}
                </Text>
                <Text>
                  <Text weight="bold">Cargo: </Text>
                  {c.qualificacao_socio}
                </Text>
              </Flex>

              <Flex direction="column" gap="2" mt="3">
                <Text>
                  <Text weight="bold">Representante legal:</Text>
                  {c.qualificacao_representante_legal}
                </Text>
                <Text>
                  <Text weight="bold">Data da sociedade:</Text>
                  {c.data_entrada_sociedade}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  )
}
