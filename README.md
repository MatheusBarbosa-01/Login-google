
​Descrição do projeto
Este é um projeto que desenvolvi para colocar em prática a autenticação via Google (OAuth) em uma aplicação web e geração de json. O objetivo principal é criar um fluxo onde o usuário consiga logar com sua conta do Google e, a partir daí, a gente consiga recuperar e exibir os dados básicos do perfil dele de forma segura e gerar um json com as informaçõesde cadastro.

​Tecnologias utilizadas
Para construir essa aplicação, usei:
​React com Vite (para o ambiente de desenvolvimento)
​TypeScript (para ajudar na organização e evitar erros no código)
​Google Identity Services (a API oficial do Google para o login)
​CSS para estilizar a interface
​Vercel (onde o site está hospedado)

​Integrante do projeto:
​Matheus Barbosa Nunes

​Instruções para execução local
Se quiser rodar o projeto em sua máquina, é só seguir esses passos:
​Primeiro, clone o repositório pelo terminal:
git clone https://github.com/MatheusBarbosa-01/Login-google.git
​Entre na pasta que foi criada:
cd Login-google
​Instale todos os pacotes necessários:
npm install
​Configuração importante: você vai precisar criar um arquivo chamado .env na raiz do projeto e colocar o seu Client ID do Google lá, desse jeito:
VITE_GOOGLE_CLIENT_ID=SUA_CHAVE_AQUI
​Agora é só rodar o comando para iniciar:
npm run dev
​Depois disso, o terminal vai te dar um link (geralmente o localhost:5173) para você abrir no navegador.

​Link da aplicação em produção
O projeto já está no ar e você pode testar por aqui: 
https://login-google-tawny-two.vercel.app/
