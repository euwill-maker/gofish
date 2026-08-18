# GOFISH Caça & Pesca — catálogo online

Site catálogo da GOFISH (Av. Tupi, 1921 — Pato Branco/PR). O cliente monta o pedido
e finaliza pelo WhatsApp da loja. Não há checkout nem pagamento online.

HTML/CSS/JS puro, sem build. Basta abrir `index.html`.

## Onde mexer

Tudo que muda no dia a dia está em **`assets/products.js`**:

- `CONFIG` — WhatsApp, endereço, horário, CNPJ, CR do Exército (procure por `TROCAR`)
- `CATEGORIAS` — árvore de categorias
- `PRODUTOS` — os produtos (nome, preço, fotos, descrição)

Fotos ficam em `assets/img/produtos/`.
`ilustrativa: true` mostra o selo "imagem ilustrativa" no card.

## Status

⚠️ **Preview para aprovação.** Preços são exemplos, não os reais da loja.
Fotos marcadas como ilustrativas são de licença livre (créditos em `creditos.html`)
e devem ser substituídas pelas fotos oficiais da loja.
Site marcado como `noindex` até a versão final.
