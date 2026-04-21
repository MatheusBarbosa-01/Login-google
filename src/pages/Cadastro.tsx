import Nav from "../components/nav"
import { useState, useEffect } from "react"
import { useAuth } from "../contexts/useAuth"
import "./Cadastro.css"

function Cadastro() {
  const { user } = useAuth()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [profissao, setProfissao] = useState("")
  const [cidade, setCidade] = useState("")
  const [genero, setGenero] = useState("")
  const [jsonGerado, setJsonGerado] = useState<string>("")

  useEffect(() => {
    if (user) {
      setNome(user.name)
      setEmail(user.email)
    }
  }, [user])

  function gerarJSON() {
    if (!nome.trim() || !email.trim()) {
      alert("Por favor, preencha Nome e Email!")
      return
    }

    const dadosUsuario = {
      nome: nome,
      email: email,
      telefone: telefone || "Não informado",
      profissao: profissao || "Não informado",
      cidade: cidade || "Não informado",
      genero: genero || "Não informado",
      dataRegistro: new Date().toLocaleDateString("pt-BR"),
    }

    const jsonString = JSON.stringify(dadosUsuario, null, 2)
    setJsonGerado(jsonString)
  }

  function limparFormulario() {
    setNome(user?.name || "")
    setEmail(user?.email || "")
    setTelefone("")
    setProfissao("")
    setCidade("")
    setGenero("")
    setJsonGerado("")
  }

  return (
    <>
      <Nav />
      <div className="cadastroContainer">
        <div className="formularioCard">
          <h1>Formulário de Cadastro</h1>
          <p className="subtexto">Complete seus dados de cadastro</p>

          <form onSubmit={(e) => {
            e.preventDefault()
            gerarJSON()
          }}>
            <div className="grupoFormulario">
              <label htmlFor="nome">
                <strong>Nome *</strong>
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="grupoFormulario">
              <label htmlFor="email">
                <strong>Email *</strong>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="grupoFormulario">
              <label htmlFor="telefone">
                <strong>Telefone</strong> <span className="opcional">(Opcional)</span>
              </label>
              <input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="grupoFormulario">
              <label htmlFor="profissao">
                <strong>Profissão</strong> <span className="opcional">(Opcional)</span>
              </label>
              <input
                id="profissao"
                type="text"
                value={profissao}
                onChange={(e) => setProfissao(e.target.value)}
                placeholder="Digite sua profissão"
              />
            </div>

            <div className="grupoFormulario">
              <label htmlFor="cidade">
                <strong>Cidade</strong> <span className="opcional">(Opcional)</span>
              </label>
              <input
                id="cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Digite sua cidade"
              />
            </div>

            <div className="grupoFormulario">
              <label htmlFor="genero">
                <strong>Gênero</strong> <span className="opcional">(Opcional)</span>
              </label>
              <select
                id="genero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <option value="">Selecione uma opção</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
                <option value="Prefiro não informar">Prefiro não informar</option>
              </select>
            </div>

            <div className="botoes">
              <button type="submit" className="botaoPrincipal">
                Finalizar Cadastro
              </button>
              <button
                type="button"
                className="botaoSecundario"
                onClick={limparFormulario}
              >
                Limpar
              </button>
            </div>
          </form>
        </div>

        {jsonGerado && (
          <div className="jsonCard">
            <h2>Dados em JSON</h2>
            <p className="aviso">Validar os dados antes de confirmar:</p>
            <pre className="jsonDisplay">{jsonGerado}</pre>
            <button
              className="botaoCopiar"
              onClick={() => {
                navigator.clipboard.writeText(jsonGerado)
                alert("JSON copiado para a área de transferência!")
              }}
            >
              Copiar JSON
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cadastro
