import { Box, Text, TextField } from '@radix-ui/themes'

interface InputsModal {
  label: string
  value: string
  handleChange: (event: string) => void
}

export function InputsModal({ label, value, handleChange }: InputsModal) {
  return (
    <Box width="100%" asChild mt="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          {label}
        </Text>
        <TextField.Root
          size="3"
          placeholder={label}
          value={value}
          onChange={({ target }) => handleChange(target.value)}
        />
      </label>
    </Box>
  )
}
