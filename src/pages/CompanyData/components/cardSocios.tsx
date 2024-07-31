import { Box, Flex, Text } from '@radix-ui/themes'

import { SociosProps } from '../../../types/cnpjQuery'

interface CardSociosPorps {
  socioData: SociosProps
}

export function CardSocios({ socioData }: CardSociosPorps) {
  return (
    <Box
      className="card-company-data"
      mt="3"
      key={socioData.identificador_de_socio}
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
            {socioData.cnpj_cpf_do_socio}
          </Text>
          <Text>
            <Text weight="bold">Nome do sócio: </Text>
            {socioData.nome_socio}
          </Text>
          <Text>
            <Text weight="bold"> País: </Text>
            {socioData.pais}
          </Text>
          <Text>
            <Text weight="bold">Cargo: </Text>
            {socioData.qualificacao_socio}
          </Text>
        </Flex>

        <Flex direction="column" gap="2" mt="3">
          <Text>
            <Text weight="bold">Representante legal:</Text>
            {socioData.qualificacao_representante_legal}
          </Text>
          <Text>
            <Text weight="bold">Data da sociedade:</Text>
            {socioData.data_entrada_sociedade}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
