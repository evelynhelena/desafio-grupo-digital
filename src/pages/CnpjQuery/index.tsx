import './index.scss'

import { Box, Button, Flex, Spinner, Text, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { useCnpjQuery } from '../../hooks/useCnpjQuery'
import { cnpjService } from '../../services/product'
import { handleChange } from '../../utils/cnpjMask'

export function CnpjQuery() {
  const { cnpj, setCnpj, setCompanyData } = useCnpjQuery()
  const navigate = useNavigate()
  const [loader, setLoader] = useState<boolean>(false)

  const replaceInput = (value: string) => {
    return value
      .replace('.', '')
      .replace('.', '')
      .replace('/', '')
      .replace('-', '')
  }

  const handleSearchCnpj = async () => {
    try {
      setLoader(true)
      const data = await cnpjService.getCnpjData(replaceInput(cnpj))
      console.log(cnpj)
      setCompanyData(data)
      navigate('/company-data')
    } catch {
      toast.error('CNPJ Inválido')
    } finally {
      setLoader(false)
    }
  }

  return (
    <Flex
      align="center"
      direction={{
        md: 'row',
        initial: 'column',
      }}
      className="content-cnpj-query"
    >
      <Flex
        height={{ initial: '300px', md: '100vh' }}
        width={{ initial: '100%', md: '410px' }}
        direction={{ initial: 'column', md: 'row' }}
        justify={{ initial: 'center', md: 'start' }}
        align={{ initial: 'center', md: 'start' }}
        className="bg-color"
        p="5"
      >
        <Box mt={{ initial: '0', md: '200px' }}>
          <Text size="8" weight="bold" className="text-color">
            Você sonha, <br />
            nós <span className="bg-color-text">realizamos!</span>
          </Text>
        </Box>
      </Flex>
      <Flex width="100%" justify="center">
        <Flex direction="column" p="8" gap="4" align="center" width="600px">
          <Box width="100%">
            <Text size={{ initial: '3', md: '4' }}>
              Olá, Grupo Digital! <br />
              Que bom te ver de novo!
            </Text>
          </Box>
          <Box asChild width="100%">
            <TextField.Root
              size={{ initial: '2', md: '3' }}
              placeholder="CNPJ *"
              value={handleChange(cnpj)}
              onChange={({ target }) => setCnpj(target.value)}
              maxLength={18}
            >
              <TextField.Slot side="right">
                <i className="ri-search-line"></i>
              </TextField.Slot>
            </TextField.Root>
          </Box>
          <Box width="100%" mt="-4">
            <Text size="1" color="gray">
              Insira apenas digitos
            </Text>
          </Box>
          <Box asChild className="cursor-pointer" width="100%">
            <Button
              className="bg-color button"
              size="3"
              onClick={handleSearchCnpj}
              disabled={replaceInput(cnpj).length !== 14 || loader}
            >
              <Text size={{ initial: '2', md: '3' }}>
                {loader ? <Spinner /> : 'Consultar'}
              </Text>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
