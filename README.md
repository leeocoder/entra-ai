# 🔀 Redirect Portal

Um sistema de redirecionamento elegante e modular construído com **Vanilla JavaScript**. Ideal para usar com links em bio (Instagram, TikTok) ou encurtadores de URL personalizados via GitHub Pages.

## ✨ Funcionalidades

- **Design Minimalista**: Estilo visual limpo e moderno (inspirado no Dribbble).
- **Feedback Visual**: Loader animado e mensagens rotativas que engajam o usuário enquanto o redirecionamento acontece.
- **Configuração Simples**: Adicione novos destinos editando apenas um arquivo JSON-like.
- **Clean Code**: Estrutura modular separada por responsabilidades (`routes`, `messages`, `logic`).
- **Sem Dependências**: Feito com HTML, CSS e JS puro. Leve e rápido.

## 🚀 Como Usar

O sistema funciona através de um parâmetro de URL chamado `where`.

### Exemplos de URL

- **Instagram**: `https://leeocoder.github.io/entra-ai/?where=instagram`
- **YouTube**: `https://leeocoder.github.io/entra-ai/?where=youtube`

Se você acessar sem parâmetros ou com uma rota inválida, o sistema exibirá uma mensagem de erro amigável.

## ⚙️ Configuração

### Adicionar Novas Rotas

Abra o arquivo `routes.js`. Você verá uma lista de objetos. Para adicionar um novo destino, basta incluir um novo bloco:

```javascript
{
  key: "linkedin", // O valor que vai na URL (?where=linkedin)
  url: "https://linkedin.com/in/seu-perfil",
  messages: [
    "Abrindo currículo...",
    "Conectando profissionalmente...",
    "Carregando perfil..."
  ]
}
```

- **key**: O identificador usado na URL.
- **url**: O link de destino final.
- **messages**: Uma lista de frases que serão exibidas rotativamente enquanto o usuário aguarda (1.5s entre cada mensagem).

### Ajustar Tempo de Redirecionamento

No arquivo `redirect.js`, você pode alterar o tempo de espera na linha do `setTimeout` (padrão de 2500ms ou 2.5 segundos):

```javascript
setTimeout(() => {
  window.location.href = route.url;
}, 2500);
```

## 🎨 Personalização

- **Logo/Cores**: Edite as variáveis CSS no início do arquivo `styles.css` para combinar com sua marca:
  ```css
  :root {
    --accent-color: #6c5ce7; /* Cor principal */
    --bg-color: #f8f9fa;     /* Cor de fundo */
  }
  ```

## 📦 Deploy no GitHub Pages

1. Faça o upload (“push”) deste código para um repositório no GitHub.
2. Vá em **Settings** > **Pages** no seu repositório.
3. Em **Source**, selecione `Deploy from a branch` e escolha a branch `main` (ou `master`).
4. Salve. O GitHub vai levar alguns instantes e gerar seu link.
5. O link final será exatamente neste formato:
   
   👉 **`https://leeocoder.github.io/entra-ai/`**

6. Para testar, adicione o parâmetro no final:
   `https://leeocoder.github.io/entra-ai/?where=instagram`

---

Feito com 💜 e Clean Code.
