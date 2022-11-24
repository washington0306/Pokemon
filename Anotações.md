# JavaScript Assíncrono:

    - Async
    - Await
    - promise
    - Try
    - catch

---

# **API** (Aplication Programing Interface)

Forma de intermediar os resultados
do 'back-end' coom o que se apresenta no 'front-end', conseguindo acessa-los
atráves de URL's.

---

## Significado de algumas tags

- input placeholder: tributo especifica uma dica curta que descreve o
  valor esperado de um campo de entrada (por exemplo, um valor de amostra
  ou uma breve descrição do formato esperado).
  A dica curta é exibida no campo de entrada antes que o usuário insira um
  valor.
  Observação: o placeholderatributo funciona com os seguintes tipos de
  entrada: texto, pesquisa, url, tel, email e senha

- box-shadow: Sombra da caixa propriedade do CSS,é utilizado para adicionar
  efeitos de sombra em volta de um elemento. Você pode especificar mais
  de um efeito, os separando com virgulas. box-shadowsfoco é descrito ao
  pelo deslocamentos (offset Y elemento);

---

## Configurando lint

- Rodar comando:

```bash
npm i -d eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier
```

- Criar arquivo eslint.js na raíz:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```

- Criar arquivo .prettierrc na raíz do projeto

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2
}
```

- Reiniciar o VSCode.

