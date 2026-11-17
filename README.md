# Template de site para pet shop e clínica veterinária

Site de uma página (React + Vite + Tailwind) pronto para ser adaptado a cada cliente.
**Tudo o que muda de um cliente para outro fica em um único arquivo: `src/site.config.js`.**
Os agendamentos funcionam pelo WhatsApp: o site monta a mensagem e abre o `wa.me`. Nenhum dado é enviado a servidor.

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist/
npm run lint     # verificação de código
```

## Como personalizar

### 1. `src/site.config.js`

Cada seção do arquivo controla uma parte do site:

| Seção | O que controla |
|---|---|
| `negocio` | nome, slogan e frase curta do rodapé |
| `contato` | WhatsApp, e-mail, endereço, link do mapa e mensagens enviadas pelo WhatsApp |
| `horario` | texto do rodapé e horários do JSON-LD |
| `redes` | Instagram, Facebook, TikTok e YouTube |
| `servicos` | lista "Contamos com" e serviços de estética (nome, descrição, preço) |
| `imagens` | arquivo, texto alternativo e dimensões de cada foto; `logo` usa o arquivo em `public/` (ex.: `public/logo-pellos.png`); enquanto o arquivo não existir, o cabeçalho usa o ícone da patinha |
| `demonstracao` | faixa "Site de demonstração" fixa no rodapé da tela (`ativo: false` remove) |
| `textos` | títulos, parágrafos, botões, rótulos e opções dos formulários, por seção |
| `seo` | título, descrição, Open Graph e Twitter Card (imagem 1200x630 em `public/images/`), endereço do site, tipo do JSON-LD e `noindex` (impede a indexação no Google) |

Regras úteis:

- **Campo vazio (`""` ou `[]`) = o elemento não aparece.** Sem Instagram? Deixe `instagram: ""`. Serviço sem preço? Deixe `preco: ""`.
- O WhatsApp (`contato.whatsapp`) leva só dígitos, com DDI e DDD. Ex.: `5511999999999`.
- Nas mensagens do WhatsApp, `{campo}` é trocado pelo que o visitante preencheu (ex.: `{nomePet}`).
- O `<title>`, as meta tags e o JSON-LD são gerados no build a partir de `seo`, `negocio`, `contato` e `horario` (veja `plugins/seo.js`).
- Todos os dados que vêm preenchidos são exemplos e precisam ser trocados pelos do cliente.

### 2. Imagens: pasta `public/images/`

Coloque as fotos do cliente em `public/images/` e aponte o nome do arquivo na seção `imagens` do `site.config.js`.
Atualize também o texto alternativo (`alt`) e as dimensões (`largura` e `altura`). Prefira `.webp`.

### 3. Outros pontos

- **Cores e fonte:** `src/index.css` (bloco `@theme`).
- **Endereço de publicação:** `base` em `vite.config.js` (hoje `/petshoppellos/`). Use o nome do repositório no GitHub Pages ou `/` em domínio próprio.
- **Nome do pacote:** `name` em `package.json`.
- **Loja de produtos:** por enquanto não há venda pelo site, então a loja está toda comentada: `src/pages/shop.jsx`, `produtos`, `textos.shop` e `mensagens.produto` em `src/site.config.js`, e a linha do `<Shop />` em `src/App.jsx`. Para ligar, descomente tudo isso e inclua o link `#shop` em `textos.navbar.links`. As fotos dos produtos ficam em `public/images/`.
- **Política de privacidade:** o texto jurídico fica em `src/pages/privacidade.jsx`. O responsável pelos dados é preenchido em `textos.privacidade.responsavel`.

## Antes de entregar a um cliente

- [ ] Trocar **todos** os dados de exemplo em `src/site.config.js` (nome, slogan, WhatsApp, endereço, horário, serviços, preços).
- [ ] Testar o número de WhatsApp: clicar nos botões e enviar o formulário de agendamento de cada serviço e o de atendimento veterinário.
- [ ] Usar somente fotos e textos **autorizados** pelo cliente, ou com licença de uso. Substituir as imagens de demonstração.
- [ ] Atualizar o texto alternativo (`alt`) de todas as imagens.
- [ ] Revisar os **textos legais**: política de privacidade (identificação do responsável, canal para solicitações) com o cliente ou um profissional jurídico.
- [ ] Conferir se indicadores como avaliação e número de clientes são reais. Se não forem, apague-os (`indicadores: []`).
- [ ] Revisar preços e o aviso de variação por porte.
- [ ] Ao publicar o site definitivo: `demonstracao.ativo: false`, `seo.noindex: false` e tirar "- Demonstração" dos títulos em `seo`.
- [ ] Preencher `seo.url` com o endereço final e, se houver, `seo.ogImagem`.
- [ ] Ajustar `base` no `vite.config.js` para o endereço de publicação.
- [ ] Rodar `npm run build`, abrir o site publicado e testar no celular.
- [ ] Conferir o título da aba e a prévia de compartilhamento.
