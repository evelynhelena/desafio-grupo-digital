import { Box, Button, Dialog, Flex, Text, TextArea } from '@radix-ui/themes'
import { ReactNode, useState } from 'react'

import { useCnpjQuery } from '../hooks/useCnpjQuery'
import { CompanyToEditProps } from '../types/cnpjQuery'
import { InputsModal } from './InputsModal'

interface ModalEditProps {
  buttonAction: ReactNode
  handleEditData: (data: CompanyToEditProps) => void
}

export function ModalEdit({ buttonAction, handleEditData }: ModalEditProps) {
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
  const [contato, setContato] = useState<string>(
    companyData?.ddd_telefone_1 || '',
  )
  const [dataAbertura, setDataAbertura] = useState<string>(
    companyData?.data_inicio_atividade || '',
  )
  const [email, setEmail] = useState<string>(companyData?.email || '')

  const [ramo, setRamo] = useState<string>(
    companyData?.cnae_fiscal_descricao || '',
  )

  const [endereco, setEndereco] = useState<string>(companyData?.bairro || '')

  const handleEdit = () => {
    const data: CompanyToEditProps = {
      razaoSocial,
      nomeFantasia,
      cnpj,
      situacao,
      dataAbertura,
      email,
      ramo,
      endereco,
    }
    handleEditData(data)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>{buttonAction}</Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title size="3">Alterar dados cadastrais</Dialog.Title>

        <InputsModal
          label="Razão Social"
          value={razaoSocial}
          handleChange={setRazaoSocial}
        />

        <InputsModal
          label="Nome Fantasia"
          value={nomeFantasia}
          handleChange={setNomeFantasia}
        />

        <Flex gap="3" width="100%" direction={{ initial: 'column', md: 'row' }}>
          <InputsModal label="CNPJ" value={cnpj} handleChange={setCnpj} />
          <InputsModal
            label="Situação"
            value={situacao}
            handleChange={setSituacao}
          />
        </Flex>

        <Flex gap="3" width="100%" direction={{ initial: 'column', md: 'row' }}>
          <InputsModal
            label="Contato"
            value={contato}
            handleChange={setContato}
          />

          <InputsModal
            label="Data de Abertura"
            value={dataAbertura}
            handleChange={setDataAbertura}
          />
        </Flex>

        <InputsModal label="Email" value={email} handleChange={setEmail} />

        <Box width="100%" asChild mt="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Ramo
            </Text>
            <TextArea
              placeholder="Ramo"
              value={ramo}
              onChange={({ target }) => setRamo(target.value)}
            />
          </label>
        </Box>

        <InputsModal
          label="Endereço"
          value={endereco}
          handleChange={setEndereco}
        />

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" className="cursor-pointer">
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button className="bg-color cursor-pointer" onClick={handleEdit}>
              Confirmar
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
