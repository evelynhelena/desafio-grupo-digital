export interface SociosProps {
  pais: string
  nome_socio: string
  codigo_pais: number
  cnpj_cpf_do_socio: string
  qualificacao_socio: string
  data_entrada_sociedade: string
  identificador_de_socio: number
  qualificacao_representante_legal: string
}

export interface CompanyDataProps {
  nome_fantasia: string
  razao_social: string
  data_inicio_atividade: string
  descricao_situacao_cadastral: string
  cnae_fiscal_descricao: string
  logradouro: string
  numero: string
  bairro: string
  municipio: string
  complemento: string
  uf: string
  cep: string
  ddd_telefone_1: string
  ddd_telefone_2: string
  email: string
  qsa: SociosProps[]
  cnpj: string
}

export interface CompanyToEditProps {
  razaoSocial: string
  nomeFantasia: string
  cnpj: string
  situacao: string
  dataAbertura: string
  email: string
  ramo: string
  endereco: string
}

export interface CnpjQueryResponse {
  data: CompanyDataProps
}
