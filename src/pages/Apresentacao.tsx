import Nav from "../components/nav"
import "./Apresentacao.css"

function Apresentacao() {
  const desenvolvedor = [
    {
      id: 1,
      nome: "Matheus Barbosa Nunes",
      cargo: "Engenheiro de Software | Desenvolvedor Web",
      avatar: "👨‍💻",
      fotoUrl: "/pessoal.jpg",
      formacao: "Bacharelado em Engenharia de Software (UBM) - Cursando",
      interesses: "Desenvolvimento Web, Cibersegurança, Redes de Computadores, Tecnologias",
      habilidades: ["React.js", "Node.js", "JavaScript", "Python", "React Native", "Redes de Computadores", "Suporte Técnico"],
      email: "matheusbnvr@gmail.com",
      telefone: "(24) 99242-7244",
      localizacao: "Volta Redonda - RJ"
    }
  ]

  return (
    <>
      <Nav />
      <div className="apresentacaoContainer">
        <section className="apresentacaoHeader">
          <h1>Desenvolvedor do Projeto</h1>
          <p className="subtituloHeader">Conheça o desenvolvedor responsável por este projeto</p>
        </section>

        <section className="gridDesenvolvedores">
          {desenvolvedor.map((dev) => (
            <div key={dev.id} className="cardDesenvolvedor">
              <div className="desenvolvedor-header">
                <div className="avatarCirculosCircleulo">
                  {dev.fotoUrl ? (
                    <img 
                      src={dev.fotoUrl} 
                      alt={dev.nome}
                      className="avatarFoto"
                    />
                  ) : (
                    <span className="avatarEmoji">{dev.avatar}</span>
                  )}
                </div>
                <h2 className="nomeDev">{dev.nome}</h2>
                <p className="cargo">{dev.cargo}</p>
              </div>

              <div className="divider"></div>
              <div className="desenvolvedor-content">
                <div className="infoBloco">
                  <h3 className="infoTitulo">Formação</h3>
                  <p className="infoTexto">{dev.formacao}</p>
                </div>

                <div className="infoBloco">
                  <h3 className="infoTitulo">Interesses</h3>
                  <p className="infoTexto">{dev.interesses}</p>
                </div>

                <div className="infoBloco">
                  <h3 className="infoTitulo">Habilidades Principais</h3>
                  <div className="listaHabilidades">
                    {dev.habilidades.map((skill, index) => (
                      <span key={index} className="skillBadge">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="infoBloco">
                  <h3 className="infoTitulo">Contato</h3>
                  <div className="contatoInfo">
                    <a href={`mailto:${dev.email}`} className="contatoLink">
                      {dev.email}
                    </a>
                    <a href={`tel:${dev.telefone}`} className="contatoLink">
                      {dev.telefone}
                    </a>
                    <p className="contatoTexto">{dev.localizacao}</p>
                  </div>
                </div>
              </div>

              {dev.nome === "Matheus Barbosa Nunes" && (
                <div className="redesSociais">
                  <a 
                    href="https://www.linkedin.com/in/matheus-barbosa-nunes-b23061240/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="socialLink"
                    title="LinkedIn"
                  >
                    <img 
                      src="./public/linkedin.png"
                      alt="LinkedIn"
                      className="socialIconLinkedin"
                    />
                  </a>
                  <a 
                    href="https://github.com/MatheusBarbosa-01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="socialLink"
                    title="GitHub"
                  >
                    <img 
                      src="./public/github.png"
                      alt="GitHub"
                      className="socialIcon"
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="secaoComplementar">
          <div className="cardComplementar">
            <h2>Sobre Este Projeto</h2>
            <p>
              Este projeto foi desenvolvido como demonstração de habilidades em desenvolvimento web,
              com foco em autenticação segura com Google, gerenciamento de estado e interface responsiva.
            </p>
            <div className="tech-stack">
              <h3>Stack Tecnológico:</h3>
              <div className="techBadges">
                <span className="techBadge">React JS</span>
                <span className="techBadge">TypeScript</span>
                <span className="techBadge">Vite</span>
                <span className="techBadge">React Router</span>
                <span className="techBadge">Google OAuth</span>
                <span className="techBadge">SweetAlert2</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Apresentacao
