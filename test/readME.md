## getLinksfromMD()

# Biblioteca JS para extrair links de arquivos markdown

**Esta biblioteca se destina à extração de links de arquivos MD.**
Na versão atual é possível fornecer um texto (string) no formato markdown e conseguir como resultado os links presentes no texto.
A função retorna uma array de objetos com os links existentes (link e texto) e uma array vazia caso não exista algum link na string.

## Como instalar:

```shell

$  npm install get-links-from-md-jj

```

## Como utilizar:

```node

> const getLinksFromMD = require("get-links-from-md-jj");
> console.log(getLinksFromMD.getLinksFromMD(`[example](www.example.com) oieeee turu pom? [text](www.link.com)`));
> // returns "[ { href: 'www.example.com', text: 'example' },
  { href: 'www.link.com', text: 'text' } ]"
> console.log(getLinksFromMD.getLinksFromMD(`lalalala no link here`));
> // returns "[]"

```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão - aceita-se contribuições)
- correção de eventuais bugs;
- melhorar a forma em que os links são 'devolvidos';
- melhorar experiência com rapidez e mensagens de resultados.

#### versão 1.0.0 (released)
- funcionalidades: extrair links de arquivos MD.
- verifica string e devolve uma array de objetos com os links presentes (link e texto) ou uma array vazia caso não existam links.
