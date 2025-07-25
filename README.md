<h1 align="center">Conversor de moedas</h1>
<h2 align="center">:page_facing_up: Descrição do projeto</h2>
<p>Aplicativo simples e moderno de conversão de moedas, desenvolvido com React e estilizado com Tailwind CSS. Permite ao usuário inserir um valor, selecionar a moeda de origem e destino, e visualizar instantaneamente o valor convertido utilizando a API da AwesomeAPI para obter as taxas de câmbio em tempo real.</p>
<br>

## :desktop_computer: Desktop design
<br>
<div align = "center">
<img src = "https://github.com/gleicekelly13/Conversor-moedas/blob/main/src/assets/conversor_moedas_desktop_light.png" width = "500" />
</div>
<br>

<div align = "center">
<img src = "https://github.com/gleicekelly13/Conversor-moedas/blob/main/src/assets/conversor_moedas_desktop_dark.png" width = "500" />
</div>
<br>

## :iphone: Mobile design
<br>
<div align = "center">
<img src = "https://github.com/gleicekelly13/Conversor-moedas/blob/main/src/assets/conversor_moedas_mobile_light.png" width = "300" />
</div>
<br>

<div align = "center">
<img src = "https://github.com/gleicekelly13/Conversor-moedas/blob/main/src/assets/conversor_moedas_mobile_dark.png" width = "300" />
</div>
<br>

<h2 align="center">:hourglass: Status do projeto </h2>
<h4>:white_check_mark: Desktop - FINALIZADO :white_check_mark: </h4>
<h4>:white_check_mark: Mobile - FINALIZADO :white_check_mark: </h4>
<br>

<h2 align="center">:hammer: Funcionalidades do projeto </h2>
<ul>
  <li>Conversão de moedas em tempo real: Permite converter valores entre diferentes moedas como Real (BRL), Dólar (USD), Euro (EUR), Libra (GBP) e Peso Argentino (ARS);</li>
  <li>Interface responsiva e moderna: Layout adaptado para diversos tamanhos de tela, com foco em dispositivos móveis;</li>
  <li>Modo Claro e Escuro: O usuário pode alternar entre os temas com um clique, garantindo melhor experiência visual em diferentes ambientes;</li>
  <li>Feedback visual ao usuário: Realce nos campos de entrada ao focar, animações suaves e destaque no resultado da conversão;</li>
  <li>Design com Tailwind CSS: Utilização de utilitários do Tailwind para estilização ágil e organizada, com suporte a temas e personalizações;</li>
  <li>Interatividade em tempo real: A aplicação responde instantaneamente à entrada do usuário, com atualização do valor convertido logo após o clique, melhorando a experiência de uso;</li>
  <li>Validação de campos de entrada: Garantia de que o valor digitado seja numérico e maior que zero, evitando erros de conversão ou chamadas desnecessárias à API.</li>
</ul>
<br>

<h2 align="center"> :dart: Objetivo de aprendizado/O que aprendi </h2>
<p>Este projeto teve como principal objetivo praticar e consolidar conhecimentos em desenvolvimento frontend com React e Tailwind CSS. Ao longo da construção do conversor de moedas, pude aprender e aplicar diversos conceitos importantes, como:</p>
<ul>
  <li>Gerenciamento de estado com React (useState): Utilização de estados para capturar e controlar valores de entrada (input e selects), permitindo atualização reativa da interface;
</li>
  <li>Estilização com Tailwind CSS: Aplicação de classes utilitárias para construir layouts modernos e responsivos, incluindo personalização do `tailwind.config.js` com temas, fontes e breakpoints;</li>
  <li>Criação e implementação de tema escuro (dark mode): Uso da diretiva `dark:` do Tailwind em conjunto com `useState` para alternar dinamicamente entre os temas claro e escuro, aplicando estilos condicionalmente;</li>
  <li>Design responsivo com abordagem mobile-first: Aprendi como o Tailwind adota o conceito mobile-first e como adaptar o layout para diferentes tamanhos de tela usando breakpoints. E a criação de um breakpoint customizado (`xs`) para dispositivos com largura mínima de 320px;</li>
  <li>Aprimoramento de acessibilidade e experiência do usuário (UX): Inclusão de feedbacks visuais com efeitos `hover`, `focus` e `transition`, organização semântica e espaçamento adequado entre os elementos;</li>
  <li>Criação de um layout centralizado com flexbox: Estruturação do layout principal com `flex`, `items-center`, `justify-center` e `min-h-screen`, garantindo centralização vertical e horizontal do conteúdo;</li>
  <li>Uso de plugin externo para text-shadow customizado: Instalação e configuração do plugin `tailwindcss-textshadow` para estilização de texto com sombras (efeito neon), principalmente no modo escuro;</li>
  <li>Consumo de API externa (ExchangeRate API): Requisição de dados de câmbio em tempo real utilizando fetch, manipulando respostas assíncronas e atualizando o estado com o valor convertido dinamicamente;</li>
  <li>Entendimento de renderização condicional: Exibição dinâmica do resultado da conversão apenas quando o valor for processado, usando operadores ternários;</li>
  <li>Familiaridade com controle de versão e Git revert: Prática com comandos como git revert HEAD para desfazer commits mantendo o histórico limpo e seguro.</li>
</ul>
<br>

<h2 align="center"> :file_folder: Acesso ao projeto </h2>
<p> Você pode acessar o projeto final clicando aqui: https://conversor-moedas-blush-gamma.vercel.app/ </p>
<br>

<h2 align="center"> :computer: Tecnologias utilizadas </h2>
<ul>
  <li>HTML5</li>
  <li>Tailwind CSS</li>
  <li>JavaScript</li>
  <li>React JS</li>
  <li>Vite</li>
</ul>
<br>

# :sunglasses: Autora

- GitHub - [GleiceKelly](https://github.com/gleicekelly13)
- LinkedIn - [Gleice Kelly Oliveira](https://www.linkedin.com/in/gleicekelly13/)
<br>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
