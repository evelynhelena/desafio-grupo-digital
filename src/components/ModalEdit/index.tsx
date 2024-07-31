import { Box, Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { ReactNode, useState } from 'react'

import { useCnpjQuery } from '../../hooks/useCnpjQuery'

interface ModalEditProps {
  buttonAction: ReactNode
}

export function ModalEdit({ buttonAction }: ModalEditProps) {
  const { companyData } = useCnpjQuery()

  const [razaoSocial, setRazaoSocial] = useState<string>(
    companyData?.razao_social || '',
  )
  const [nomeFantasia, setNomeFantasia] = useState<string>(
    companyData?.nome_fantasia || '',
  )
  const [cnpj, setCnpj] = useState<string>(companyData?.cnpj || '')
  const [situacao, setSituacao] = useState<string>(
    companyData?.descricao_situacao_cadastral || '',
  )
  const [endereco, setEndereco] = useState<string>(companyData?.bairro || '')

  const [dataAbertura, setDataAbertura] = useState<string>(
    companyData?.data_inicio_atividade || '',
  )

  const [email, setEmail] = useState<string>(companyData?.email || '')
  const [contato, setContato] = useState<string>(
    companyData?.ddd_telefone_1 || '',
  )
  const [ramo, setRamo] = useState<string>(
    companyData?.cnae_fiscal_descricao || '',
  )

  return (
    <Dialog.Root>
      <Dialog.Trigger>{buttonAction}</Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title size="3">Alterar dados cadastrais</Dialog.Title>

        <Box width="100%" asChild>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Razão Social
            </Text>
            <TextField.Root
              size="3"
              placeholder="Razão Social"
              value={razaoSocial}
              onChange={({ target }) => setRazaoSocial(target.value)}
            />
          </label>
        </Box>
        <Box width="100%" asChild mt="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome Fantasia
            </Text>
            <TextField.Root
              size="3"
              placeholder="Nome Fantasia"
              value={nomeFantasia}
              onChange={({ target }) => setNomeFantasia(target.value)}
            />
          </label>
        </Box>

        <Flex gap="3" width="100%" mt="3">
          <Box width="100%" asChild>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                CNPJ
              </Text>

              <TextField.Root
                size="3"
                placeholder="CNPJ"
                value={cnpj}
                onChange={({ target }) => setCnpj(target.value)}
              />
            </label>
          </Box>

          <Box width="100%" asChild>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Situação
              </Text>

              <TextField.Root
                size="3"
                placeholder="Situação"
                value={situacao}
                onChange={({ target }) => setSituacao(target.value)}
              />
            </label>
          </Box>
        </Flex>

        <Flex gap="3" width="100%" mt="3">
          <Box width="100%" asChild>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Contato
              </Text>

              <TextField.Root
                size="3"
                placeholder="Contato"
                value={contato}
                onChange={({ target }) => setContato(target.value)}
              />
            </label>
          </Box>

          <Box width="100%" asChild>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Data de Abertura
              </Text>

              <TextField.Root
                size="3"
                placeholder="Data de Abertura"
                value={dataAbertura}
                onChange={({ target }) => setDataAbertura(target.value)}
              />
            </label>
          </Box>
        </Flex>

        <Box width="100%" asChild mt="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>

            <TextField.Root
              size="3"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
        </Box>

        <Box width="100%" asChild mt="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Ramo
            </Text>

            <TextField.Root
              size="3"
              placeholder="Ramo"
              value={ramo}
              onChange={({ target }) => setRamo(target.value)}
            />
          </label>
        </Box>

        <Box width="100%" asChild mt="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Endereço
            </Text>

            <TextField.Root
              size="3"
              placeholder="Endereço"
              value={endereco}
              onChange={({ target }) => setEndereco(target.value)}
            />
          </label>
        </Box>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" className="cursor-pointer">
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button className="bg-color cursor-pointer">Confirmar</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
