# EmprestAi 💸

> **Crédito Simples. Sem enrolação.**

A **EmprestAi** é uma plataforma moderna e 100% digital projetada para conectar usuários às melhores opções de crédito do mercado de forma rápida, transparente e segura. Este repositório contém o front-end da aplicação, desenvolvido com as tecnologias mais recentes do ecossistema React para garantir alta performance e uma excelente experiência de usuário.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com foco em performance, escalabilidade e manutenibilidade:

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e produtividade.
- **[Vite](https://vitejs.dev/)**: Build tool de próxima geração que proporciona um ambiente de desenvolvimento extremamente rápido.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida, consistente e responsiva.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Biblioteca para inclusão fácil de ícones populares.

## ✨ Funcionalidades Principais

- **Simulação de Crédito**: Interface intuitiva para que o usuário simule empréstimos com base em seu perfil financeiro.
- **Design Responsivo**: Layout totalmente adaptável (Mobile-First), garantindo usabilidade em smartphones, tablets e desktops.
- **Navegação Dinâmica**:
  - Menu responsivo que se adapta ao dispositivo.
  - Header inteligente que muda de aparência ao rolar a página (efeito _glassmorphism_).
  - Menu mobile com navegação lateral suave e _backdrop_.
- **Seções da Landing Page**:
  - **Hero**: Apresentação impactante com Call-to-Action (CTA) claro e prova social.
  - **Como Funciona**: Explicação passo a passo do processo.
  - **Vantagens**: Destaque dos benefícios do serviço.
  - **FAQ**: Seção de perguntas frequentes interativa.

## 📦 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/emprestai-front.git
    cd emprestai-front
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com _Hot Module Replacement_ (HMR).
- `npm run build`: Compila o projeto para produção na pasta `dist`.
- `npm run lint`: Executa o ESLint para verificar problemas no código.
- `npm run preview`: Visualiza a versão de produção localmente após o build.

## 📂 Estrutura do Projeto

A estrutura de pastas foi organizada para facilitar a escalabilidade:

```text
src/
├── components/
│   ├── layout/       # Componentes estruturais (Header, Footer)
│   ├── sections/     # Seções da Landing Page (Hero, FAQ, Simulation, etc.)
│   └── ui/           # Componentes de UI reutilizáveis (Navigation, Buttons)
├── hooks/            # Custom Hooks (ex: useMenu para lógica de navegação)
├── pages/            # Páginas da aplicação (Home)
├── App.tsx           # Componente raiz
└── main.tsx          # Ponto de entrada da aplicação
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tem alguma ideia para melhorar o projeto:

1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`).
3.  Faça o Commit de suas mudanças (`git commit -m 'Adiciona nova feature'`).
4.  Faça o Push para a Branch (`git push origin feature/MinhaFeature`).
5.  Abra um Pull Request.

---

Desenvolvido com 💜 pela equipe **EmprestAi**.
