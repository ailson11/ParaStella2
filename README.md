# Presentinho de aniversário para Stella 💗

Um site estático feito com HTML, CSS e JavaScript. Não precisa instalar frameworks nem pagar hospedagem para publicar no GitHub Pages.

## 1. Abrir no VS Code

1. Baixe e extraia `presente-stella.zip`.
2. Abra o VS Code.
3. Vá em **File > Open Folder** e escolha a pasta `presente-stella`.
4. Instale a extensão **Live Server** (Ritwick Dey).
5. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Também pode abrir `index.html` diretamente no navegador, mas o Live Server é melhor durante a edição.

## 2. Colocar as fotos de vocês

1. Abra `assets/fotos/`.
2. Coloque seis imagens nessa pasta.
3. Renomeie para `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`, `foto-4.jpg`, `foto-5.jpg` e `foto-6.jpg`.
4. Se suas imagens forem PNG ou WEBP, atualize também a extensão no arquivo `js/content.js`.
5. Edite as legendas no mesmo arquivo.

Para usar mais fotos, adicione novos objetos dentro da lista `photos` em `js/content.js`.

## 3. Personalizar as mensagens

Abra `js/content.js`. Lá você pode editar:
- `mainLetter`: a carta principal;
- `photos`: nomes dos arquivos e legendas;
- `notes`: títulos e textos das cartinhas;
- `reasons`: motivos pelos quais Stella é especial;
- `finalMessage`: mensagem da surpresa final.

Salve o arquivo e atualize o navegador.

## 4. Adicionar música (opcional)

Coloque um arquivo de áudio chamado `musica.mp3` em `assets/audio/`. O site só começa a tocar quando a pessoa clicar no botão de música.

Use uma música que você tenha autorização para usar ou um áudio livre de direitos.

## 5. Publicar gratuitamente no GitHub Pages

1. Entre em https://github.com e crie uma conta, se ainda não tiver.
2. Crie um repositório novo, por exemplo `presente-stella`.
3. Envie todos os arquivos e pastas deste projeto para o repositório (não envie apenas o ZIP).
4. No repositório, abra **Settings > Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
7. Aguarde alguns minutos. O GitHub mostrará o endereço público do site na própria página Pages.

## Estrutura

```text
presente-stella/
├── index.html
├── README.md
├── assets/
│   ├── audio/
│   │   └── (adicione musica.mp3 aqui)
│   └── fotos/
│       ├── foto-1.jpg
│       ├── foto-2.jpg
│       ├── foto-3.jpg
│       ├── foto-4.jpg
│       ├── foto-5.jpg
│       └── foto-6.jpg
├── css/
│   └── style.css
└── js/
    ├── content.js
    └── main.js
```

## Observações

- O site não envia as fotos para nenhum servidor: as imagens ficam nos arquivos que você publicar junto com o site.
- Para o presente aparecer corretamente no celular da Stella, publique o projeto e envie o link; abrir o site localmente no seu computador não cria um link público.
- As fontes são carregadas do Google Fonts; sem internet, o navegador usa fontes alternativas.
