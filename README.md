# 🕒 Relógio Síncrono Dual — Analog & Digital Clock

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Glassmorphism">
  <img src="https://img.shields.io/badge/UI%2FUX-Interface%20Responsiva-6C63FF?style=for-the-badge" alt="UI/UX Responsiva">
  <img src="https://img.shields.io/badge/HTML5-Sem%C3%A2ntica-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
</p>

## 📌 Sobre o Projeto

O **Relógio Síncrono Dual** é uma aplicação web que combina um relógio analógico com ponteiros e um visor digital, mantendo ambas as representações sincronizadas com o horário atual do sistema.

Desenvolvido a partir dos desafios práticos da plataforma B7Web, o projeto utiliza JavaScript puro para obter informações temporais, calcular os ângulos dos ponteiros e atualizar os elementos da interface em tempo real.

O principal objetivo é consolidar conhecimentos em manipulação do DOM, utilização do objeto nativo `Date`, execução periódica de funções com `setInterval`, cálculos matemáticos aplicados à interface e transformações CSS, além de desenvolver uma interface moderna com efeitos visuais e layout responsivo.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** estruturação dos elementos e organização do mostrador.
- **CSS3:** estilização dos ponteiros, numerais, efeitos visuais e componentes da interface.
- **JavaScript Vanilla:** atualização do relógio, cálculos dos ângulos e geração dinâmica dos elementos.
- **Date API:** obtenção das horas, minutos e segundos do sistema.
- **DOM API:** criação e atualização dos elementos do mostrador.
- **CSS Transforms:** posicionamento e rotação dos ponteiros.
- **Flexbox:** construção de um layout flexível e responsivo.

## ⚙️ Funcionalidades

- **Relógio analógico em tempo real:** exibe horas, minutos e segundos por meio de ponteiros.
- **Relógio digital sincronizado:** apresenta o horário atual no formato `HH:MM:SS`.
- **Atualização automática:** consulta o horário do sistema periodicamente.
- **Movimento proporcional dos ponteiros:** calcula a posição angular das horas considerando o avanço dos minutos.
- **Mostrador gerado dinamicamente:** cria os numerais e elementos visuais por meio de JavaScript.
- **Interface com Glassmorphism:** utiliza transparências, desfoque e gradientes para criar uma aparência moderna.
- **Estabilidade visual dos números:** utiliza larguras tabulares para evitar oscilações no visor digital.
- **Layout responsivo:** adapta a disposição dos componentes a diferentes tamanhos de tela.

## 🧠 Detalhes Técnicos e Implementação

### 1. Sincronização Temporal com a API Date

O mecanismo central utiliza o objeto nativo `Date` para obter o horário atual do sistema. A cada ciclo de atualização, os valores de horas, minutos e segundos são utilizados para atualizar simultaneamente o mostrador analógico e o visor digital.

O método `setInterval()` agenda a execução periódica da função responsável por atualizar a interface.

```javascript
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
```

### 2. Geração Dinâmica do Mostrador

Os numerais e demais elementos do mostrador são criados programaticamente por meio da manipulação do DOM.

Essa abordagem reduz a repetição de marcação HTML e permite calcular a posição de cada numeral com base em sua posição angular, mantendo a organização e a consistência visual do relógio.

### 3. Cálculo Matemático dos Ponteiros

O posicionamento dos ponteiros é determinado por cálculos que convertem unidades de tempo em ângulos de rotação.

Cada ponteiro utiliza uma proporção diferente, de acordo com o movimento correspondente:

- **Ponteiro das horas:** percorre 360° a cada 12 horas, considerando também o avanço dos minutos.
- **Ponteiro dos minutos:** percorre 360° a cada 60 minutos.
- **Ponteiro dos segundos:** percorre 360° a cada 60 segundos.

A fórmula do ponteiro das horas considera a posição dos minutos para produzir um movimento proporcional:

\[
\theta_h = (h \bmod 12)\times 30^\circ + m\times 0{,}5^\circ - 90^\circ
\]

Em que:

- \(h\) representa a hora atual.
- \(m\) representa os minutos atuais.
- \(30^\circ\) corresponde ao deslocamento por hora.
- \(0{,}5^\circ\) corresponde ao deslocamento por minuto.
- \(-90^\circ\) ajusta a referência angular para alinhar o ponteiro com a posição das 12 horas, considerando a orientação inicial adotada pelo CSS.

### 4. Transformações CSS e Ponto de Origem

A propriedade `transform: rotate()` permite posicionar os ponteiros de acordo com os ângulos calculados pelo JavaScript.

A propriedade `transform-origin` define o ponto em torno do qual cada ponteiro realiza a rotação. O ajuste desse ponto é fundamental para manter o movimento alinhado ao centro do mostrador.

### 5. Formatação do Visor Digital

O método `padStart(2, '0')` garante que os valores de horas, minutos e segundos sejam apresentados com dois dígitos.

```javascript
const formattedHours = String(hours).padStart(2, "0");
const formattedMinutes = String(minutes).padStart(2, "0");
const formattedSeconds = String(seconds).padStart(2, "0");

const digitalTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
```

Dessa forma, o visor mantém um padrão consistente de apresentação, como `09:05:03`.

### 6. Estabilidade Numérica com CSS

A propriedade `font-variant-numeric: tabular-nums` utiliza algarismos com largura uniforme quando a fonte oferece suporte a esse recurso.

Isso reduz as mudanças de largura do texto durante a atualização dos segundos, contribuindo para a estabilidade visual do visor digital.

## 🎨 Layout e Interface

### Glassmorphism

A interface utiliza o conceito de Glassmorphism, combinando transparências, gradientes e desfoque de fundo para criar uma aparência de vidro fosco.

A propriedade `backdrop-filter: blur(12px)` aplica o desfoque ao conteúdo que aparece atrás do elemento, contribuindo para a profundidade visual da interface.

### Layout Responsivo com Flexbox

O Flexbox organiza o relógio analógico, o painel digital e os demais elementos da interface, permitindo ajustar o alinhamento e o espaçamento de acordo com a resolução disponível.

As regras responsivas ajudam a preservar a legibilidade e a evitar sobreposições em dispositivos móveis e telas maiores.

## 💻 Como Executar o Projeto Localmente

O projeto utiliza tecnologias nativas do navegador e não exige instalação de dependências ou configuração de um ambiente de backend.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/devRafaelSantana-Code/projeto-relogio-analogico.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd projeto-relogio-analogico
   ```

3. **Execute a aplicação:**

   Abra o arquivo `index.html` diretamente em um navegador moderno ou utilize a extensão Live Server no Visual Studio Code para executar o projeto em um servidor local.

## 👨‍💻 Autor

**Rafael Santana**  
Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack.

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript, manipulação do DOM, cálculos matemáticos e desenvolvimento de interfaces responsivas.
</p>
