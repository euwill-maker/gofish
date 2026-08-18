/* ===== GO FISHING — motor do site (catálogo + carrinho + WhatsApp) ===== */

/* ---------- ícones ---------- */
const ICO = {
  arma:'<path d="M2 8h13l2 3h5v4h-3l-1 3h-4l-1-3H8l-2 4H2z"/>',
  municao:'<path d="M9 2h6l1 5v9a4 4 0 0 1-4 4 4 4 0 0 1-4-4V7z"/><path d="M8 11h8"/>',
  pressao:'<path d="M3 10h11l5-3v7h-4l-2 4H8l-1-4H3z"/><path d="M14 10V6"/>',
  tatico:'<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/>',
  recarga:'<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>',
  vara:'<path d="M3 21 17 7"/><path d="M17 7V3h4v4z"/><path d="M17 7c0 6-4 10-10 10"/>',
  molinete:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/>',
  isca:'<path d="M2 12c4-6 12-8 20-2-8 6-16 4-20 2z"/><circle cx="17" cy="10" r="1"/><path d="M6 15l-2 4"/>',
  linha:'<path d="M12 3v9a4 4 0 0 0 4 4h1"/><path d="M8 20a4 4 0 0 0 8 0"/><circle cx="12" cy="3" r="1.5"/>',
  caixa:'<path d="M3 8h18v11H3z"/><path d="M3 8l2-4h14l2 4"/><path d="M3 13h18"/><path d="M10 13v3h4v-3"/>',
  cart:'<circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.1h8.5a1.5 1.5 0 0 0 1.5-1.2L21 7H6"/>',
  busca:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  wa:'<path d="M20.5 3.5A11 11 0 0 0 3.2 17.1L2 22l5-1.3A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.5-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 6 6 0 0 0 2.6.6 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"/>',
  loja:'<path d="M3 9h18v11H3z"/><path d="M3 9l1.5-5h15L21 9"/><path d="M9 20v-6h6v6"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
  alerta:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
  pin:'<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  relogio:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  fone:'<path d="M4 5h5l2 5-2.5 1.5a11 11 0 0 0 5 5L15 14l5 2v5a16 16 0 0 1-16-16z"/>',
  lixo:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
  seta:'<path d="m9 6 6 6-6 6"/>'
};
const icon = (n, s = 22) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICO[n] || ''}</svg>`;

/* ---------- helpers ---------- */
const money = v => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
/* texto comparável: sem acento e em minúsculas (cliente digita "municao", não "munição") */
const semAcento = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const slugify = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const catById = id => CATEGORIAS.find(c => c.id === id);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ID estável por produto (usado no carrinho) */
PRODUTOS.forEach(p => { p.id = slugify(p.nome); });

/* Imagem: usa a foto real se existir; senão desenha uma ilustração da categoria */
function imgOf(p) {
  if (p.imagens && p.imagens.length) return p.imagens[0];
  const c = catById(p.categoria);
  const d = ICO[c ? c.icone : 'loja'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7f8f4"/><stop offset="1" stop-color="#e6e9df"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <g transform="translate(140 140) scale(5)" fill="none" stroke="#7c856a" stroke-opacity=".75"
       stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</g>
    <text x="200" y="330" font-family="sans-serif" font-size="15" fill="#8d9581"
       text-anchor="middle">foto em breve</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* ---------- HORÁRIO: a loja está aberta agora? ---------- */
const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const hhmm = m => String(Math.floor(m / 60)).padStart(2, '0') + 'h' + (m % 60 ? String(m % 60).padStart(2, '0') : '');

function statusLoja() {
  const exp = CONFIG.expediente || {};
  const agora = new Date();
  const min = agora.getHours() * 60 + agora.getMinutes();
  const hoje = exp[agora.getDay()];
  if (hoje && min >= hoje[0] && min < hoje[1]) {
    return { aberto: true, texto: 'Aberto agora · fecha às ' + hhmm(hoje[1]) };
  }
  if (hoje && min < hoje[0]) {
    return { aberto: false, texto: 'Abre hoje às ' + hhmm(hoje[0]) };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (agora.getDay() + i) % 7;
    if (exp[d]) return { aberto: false, texto: 'Abre ' + DIAS[d] + ' às ' + hhmm(exp[d][0]) };
  }
  return { aberto: false, texto: CONFIG.horario };
}

const rotaMaps = () => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(CONFIG.mapsQuery);

/* ---------- RASTREAMENTO (Meta Pixel + GA4) ---------- */
function iniciarRastreamento() {
  if (CONFIG.metaPixel) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', CONFIG.metaPixel); fbq('track', 'PageView');
  }
  if (CONFIG.ga4) {
    const g = document.createElement('script');
    g.async = true; g.src = 'https://www.googletagmanager.com/gtag/js?id=' + CONFIG.ga4;
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', CONFIG.ga4);
  }
}

/* evento único que alimenta os dois — e não quebra se nenhum estiver configurado */
function evento(nome, dados = {}) {
  const mapaMeta = { add_to_cart: 'AddToCart', begin_checkout: 'InitiateCheckout',
                     contact: 'Contact', view_item: 'ViewContent', search: 'Search' };
  try { if (window.fbq && mapaMeta[nome]) fbq('track', mapaMeta[nome], dados); } catch (e) {}
  try { if (window.gtag) gtag('event', nome, dados); } catch (e) {}
  (window.dataLayer = window.dataLayer || []).push({ event: nome, ...dados });
}

/* ---------- CARRINHO ---------- */
const CART_KEY = 'gofishing_cart';
let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { cart = []; }

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}
function addToCart(id, qtd = 1) {
  const p = PRODUTOS.find(x => x.id === id);
  if (!p) return;
  const item = cart.find(i => i.id === id);
  if (item) item.qtd += qtd; else cart.push({ id, qtd });
  saveCart();
  evento('add_to_cart', { currency: 'BRL', value: p.preco * qtd, items: [{ item_name: p.nome }] });
  openCart();
}
function setQtd(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd < 1) cart = cart.filter(i => i.id !== id);
  saveCart();
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); }
const cartTotal = () => cart.reduce((t, i) => {
  const p = PRODUTOS.find(x => x.id === i.id);
  return t + (p ? p.preco * i.qtd : 0);
}, 0);

function renderCart() {
  const n = cart.reduce((t, i) => t + i.qtd, 0);
  $$('.badge').forEach(b => { b.textContent = n; b.hidden = n === 0; });

  const barra = $('#barra-pedido');
  if (barra) {
    barra.hidden = n === 0;
    document.body.classList.toggle('com-barra', n > 0);
    if (n) {
      $('#barra-qtd').textContent = n + (n === 1 ? ' item' : ' itens');
      $('#barra-total').textContent = money(cartTotal());
    }
  }

  const body = $('#cart-body'), foot = $('#cart-foot');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `<div class="vazio">${icon('cart', 42)}
      <div><b>Seu pedido está vazio</b><br><span style="font-size:13px">Adicione produtos do catálogo para montar seu orçamento.</span></div>
      <a class="btn btn-ghost" href="catalogo.html">Ver catálogo</a></div>`;
    foot.hidden = true;
    return;
  }
  foot.hidden = false;
  body.innerHTML = cart.map(i => {
    const p = PRODUTOS.find(x => x.id === i.id);
    if (!p) return '';
    return `<div class="item">
      <img src="${imgOf(p)}" alt="${p.nome}">
      <div>
        <div class="item-nome">${p.nome}</div>
        <div class="item-preco">${p.preco ? money(p.preco) : 'Sob consulta'}</div>
        <div class="qtd">
          <button onclick="setQtd('${p.id}',-1)" aria-label="Diminuir">−</button>
          <span>${i.qtd}</span>
          <button onclick="setQtd('${p.id}',1)" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button class="item-del" onclick="removeFromCart('${p.id}')" aria-label="Remover">${icon('lixo', 18)}</button>
    </div>`;
  }).join('');

  const temConsulta = cart.some(i => {
    const p = PRODUTOS.find(x => x.id === i.id); return p && !p.preco;
  });
  $('#cart-total').innerHTML = money(cartTotal()) + (temConsulta ? ' <small style="font-size:11px;color:var(--muted)">+ itens sob consulta</small>' : '');
}

/* ---------- MENSAGEM DO WHATSAPP ---------- */
function waLink(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}
function pedirItem(id) {
  const p = PRODUTOS.find(x => x.id === id);
  if (!p) return;
  const preco = p.preco ? ` — ${money(p.preco)}` : ' — sob consulta';
  evento('contact', { metodo: 'whatsapp_produto', produto: p.nome, value: p.preco, currency: 'BRL' });
  window.open(waLink(`Olá, ${CONFIG.nome}! Tenho interesse neste produto do site:\n\n*${p.nome}*${preco}\n\nPode me passar mais informações?`), '_blank');
}
function finalizarPedido() {
  if (!cart.length) return;
  const nome = ($('#cart-nome') && $('#cart-nome').value.trim()) || '';
  let txt = `Olá, ${CONFIG.nome}! Quero fazer um pedido pelo site:\n\n`;
  let controlado = false;
  cart.forEach(i => {
    const p = PRODUTOS.find(x => x.id === i.id);
    if (!p) return;
    if (p.controlado) controlado = true;
    txt += `• ${i.qtd}x ${p.nome} — ${p.preco ? money(p.preco * i.qtd) : 'sob consulta'}\n`;
  });
  txt += `\n*Total: ${money(cartTotal())}*`;
  if (controlado) txt += `\n\n(Sei que os itens controlados exigem documentação — já tenho/quero orientação sobre o CR.)`;
  if (nome) txt += `\n\nMeu nome: ${nome}`;
  evento('begin_checkout', { currency: 'BRL', value: cartTotal(),
    items: cart.map(i => ({ item_name: (PRODUTOS.find(x => x.id === i.id) || {}).nome, quantity: i.qtd })) });
  window.open(waLink(txt), '_blank');
}

/* ---------- DRAWER ---------- */
function openCart() { $('#cart-drawer').classList.add('open'); $('#overlay').classList.add('show'); }
function closeCart() { $('#cart-drawer').classList.remove('open'); $('#overlay').classList.remove('show'); }

/* ---------- CARD DE PRODUTO ---------- */
function cardHTML(p) {
  return `<article class="card">
    <div class="card-img" onclick="abrirProduto('${p.id}')">
      <img src="${imgOf(p)}" alt="${p.nome}" loading="lazy">
      ${p.controlado ? '<span class="tarja">Produto controlado</span>' : ''}
      ${!p.disponivel ? '<span class="tag-novo" style="background:#64748b">Sob encomenda</span>' : ''}
      ${p.ilustrativa ? '<span class="selo-ilustrativa">imagem ilustrativa</span>' : ''}
    </div>
    <div class="card-body">
      <span class="card-marca">${p.marca || ''}${p.calibre ? ' · ' + p.calibre : ''}</span>
      <h3 class="card-nome" onclick="abrirProduto('${p.id}')">${p.nome}</h3>
      <div class="card-preco">
        ${p.preco
      ? `<b>${money(p.preco)}</b><small>ou 10x de ${money(p.preco / 10)}</small>`
      : '<span class="consulta">Sob consulta</span>'}
      </div>
      <button class="btn btn-primary btn-block" onclick="addToCart('${p.id}')">Adicionar ao pedido</button>
    </div>
  </article>`;
}

/* ---------- MODAL ---------- */
function abrirProduto(id) {
  const p = PRODUTOS.find(x => x.id === id);
  if (!p) return;
  const c = catById(p.categoria);
  $('#modal-content').innerHTML = `
    <button class="modal-close" onclick="fecharProduto()" aria-label="Fechar">${icon('x', 20)}</button>
    <div class="modal-grid">
      <div class="modal-galeria">
        <div class="modal-img"><img id="modal-foto" src="${imgOf(p)}" alt="${p.nome}">
          ${p.ilustrativa ? '<span class="selo-ilustrativa">imagem ilustrativa</span>' : ''}</div>
        ${(p.imagens && p.imagens.length > 1) ? `<div class="miniaturas">${p.imagens.map((src, i) =>
          `<button class="mini ${i === 0 ? 'ativa' : ''}" onclick="trocarFoto(this,'${src}')">
             <img src="${src}" alt="Foto ${i + 1} de ${p.nome}"></button>`).join('')}</div>` : ''}
      </div>
      <div class="modal-info">
        <span class="card-marca">${c ? c.nome : ''}${p.sub ? ' · ' + p.sub : ''}</span>
        <h3>${p.nome}</h3>
        <div class="modal-preco">${p.preco
      ? `<b>${money(p.preco)}</b><br><small style="color:var(--green);font-weight:600">no PIX ou 10x de ${money(p.preco / 10)}</small>`
      : '<b style="font-size:22px;color:var(--muted)">Sob consulta</b>'}</div>
        <p style="color:var(--muted);font-size:14px;margin:0">${p.descricao || ''}</p>
        ${p.controlado ? `<div class="aviso-legal">${icon('alerta', 20)}
          <div><b>Produto controlado pelo Exército</b>
          Venda exclusiva mediante apresentação de CR/documentação válida e autorização de compra. Proibida a venda a menores de 25 anos.</div></div>` : ''}
        <div class="modal-specs">
          ${p.marca ? `<div><span>Marca</span><b>${p.marca}</b></div>` : ''}
          ${p.calibre ? `<div><span>Calibre</span><b>${p.calibre}</b></div>` : ''}
          ${p.sub ? `<div><span>Tipo</span><b>${p.sub}</b></div>` : ''}
          <div><span>Disponibilidade</span><b>${p.disponivel ? 'Em estoque' : 'Sob encomenda'}</b></div>
        </div>
        <button class="link-compartilhar" id="btn-compartilhar" onclick="compartilharProduto('${p.id}')">
          ${icon('seta', 15)} Copiar link deste produto</button>
        ${relacionadosHTML(p)}
        <div class="modal-acoes">
          <button class="btn btn-primary btn-block" onclick="addToCart('${p.id}');fecharProduto()">Adicionar ao pedido</button>
          <button class="btn btn-wa btn-block" onclick="pedirItem('${p.id}')">${icon('wa', 18)} Pedir só este item</button>
        </div>
      </div>
    </div>`;
  $('#modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  history.replaceState(null, '', '?produto=' + p.id);
  evento('view_item', { items: [{ item_name: p.nome }], value: p.preco, currency: 'BRL' });
}

/* link do produto para o vendedor mandar no WhatsApp */
function compartilharProduto(id) {
  const p = PRODUTOS.find(x => x.id === id);
  const url = location.origin + location.pathname + '?produto=' + id;
  if (navigator.share) {
    navigator.share({ title: p.nome, text: `${p.nome} — ${CONFIG.nome}`, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
    const b = document.getElementById('btn-compartilhar');
    if (b) { const t = b.innerHTML; b.innerHTML = 'Link copiado!'; setTimeout(() => b.innerHTML = t, 1800); }
  }
}
function trocarFoto(botao, src) {
  document.getElementById('modal-foto').src = src;
  $$('.mini').forEach(b => b.classList.toggle('ativa', b === botao));
}
function fecharProduto() {
  $('#modal').classList.remove('open');
  document.body.style.overflow = '';
  if (location.search.includes('produto=')) history.replaceState(null, '', location.pathname);
}

function relacionadosHTML(p) {
  const irmaos = PRODUTOS.filter(x => x.categoria === p.categoria && x.id !== p.id).slice(0, 4);
  if (irmaos.length < 2) return '';
  return `<div class="relacionados">
    <h4>Quem viu isso, levou também</h4>
    <div class="relacionados-lista">
      ${irmaos.map(r => `<button class="relacionado" onclick="abrirProduto('${r.id}')">
        <img src="${imgOf(r)}" alt="${r.nome}" loading="lazy">
        <span>${r.nome}</span>
        <b>${r.preco ? money(r.preco) : 'Sob consulta'}</b>
      </button>`).join('')}
    </div></div>`;
}

/* ---------- HEADER / NAV compartilhados ---------- */
function montarHeader() {
  const tiro = CATEGORIAS.filter(c => c.grupo === 'tiro');
  const pesca = CATEGORIAS.filter(c => c.grupo === 'pesca');
  const link = c => `<li><a href="catalogo.html?cat=${c.id}">${c.nome}</a></li>`;

  $('#header-slot').innerHTML = `
  <div class="topbar"><div class="wrap">
    <span class="status-loja ${statusLoja().aberto ? 'aberto' : ''}">${statusLoja().texto}</span>
    <span class="so-desktop">${CONFIG.endereco} · ${CONFIG.cidade}</span>
    <span style="display:flex;gap:14px;align-items:center">
      ${CONFIG.instagram ? `<a href="${CONFIG.instagram}" target="_blank" rel="noopener">${CONFIG.instagramUser || 'Instagram'}</a>` : ''}
      <a href="${waLink('Olá! Vim pelo site.')}" target="_blank">${icon('wa', 14)} <strong>${CONFIG.telefone}</strong></a>
    </span>
  </div></div>
  <header class="header">
    <div class="wrap header-main">
      <a class="logo" href="index.html">
        <span class="logo-mark"><img src="${CONFIG.logo}" alt="${CONFIG.nome}"></span>
        <span class="logo-txt"><b>${CONFIG.nome}</b><span>${CONFIG.slogan}</span></span>
      </a>
      <form class="search" onsubmit="return irBusca(event)">
        <input type="search" id="busca-topo" placeholder="O que você procura?">
        <button type="submit" aria-label="Buscar">${icon('busca', 18)}</button>
      </form>
      <div class="header-actions">
        <button class="icon-btn" onclick="openCart()" aria-label="Meu pedido">
          ${icon('cart', 22)}<span class="badge" hidden>0</span>
        </button>
        <button class="icon-btn menu-toggle" onclick="document.querySelector('.nav').classList.toggle('open')" aria-label="Menu">
          ${icon('menu', 22)}
        </button>
      </div>
    </div>
    <nav class="nav"><div class="wrap"><ul>
      <li class="nav-tag">Caça &amp; Tiro</li>${tiro.map(link).join('')}
      <li class="nav-tag">Pesca</li>${pesca.map(link).join('')}
      <li><a href="catalogo.html"><strong>Ver tudo</strong></a></li>
    </ul></div></nav>
  </header>`;
}

function montarFooter() {
  const link = c => `<li><a href="catalogo.html?cat=${c.id}">${c.nome}</a></li>`;
  $('#footer-slot').innerHTML = `
  <footer class="footer"><div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="logo" href="index.html" style="margin-bottom:14px">
          <span class="logo-mark"><img src="${CONFIG.logo}" alt="${CONFIG.nome}"></span>
          <span class="logo-txt"><b>${CONFIG.nome}</b><span>${CONFIG.slogan}</span></span>
        </a>
        <p style="color:var(--muted);font-size:13.5px;max-width:330px;margin:0 0 14px">
          Há ${CONFIG.anos} anos em ${CONFIG.cidade.split('—')[0].trim()}: armas, munições, artigos táticos
          e tudo para a pesca${CONFIG.clubeTiro ? ' — além do nosso clube de tiro' : ''}.
          Atendimento consultivo e pedidos pelo WhatsApp.
        </p>
        <div style="display:flex;gap:9px;flex-wrap:wrap">
          <a class="btn btn-wa" href="${waLink('Olá! Vim pelo site.')}" target="_blank"
             onclick="evento('contact',{metodo:'whatsapp_rodape'})">${icon('wa', 18)} Falar no WhatsApp</a>
          <a class="btn btn-ghost" href="${rotaMaps()}" target="_blank" rel="noopener"
             onclick="evento('como_chegar')">${icon('pin', 18)} Como chegar</a>
        </div>
      </div>
      <div><h4>Caça &amp; Tiro</h4><ul>${CATEGORIAS.filter(c => c.grupo === 'tiro').map(link).join('')}</ul></div>
      <div><h4>Pesca</h4><ul>${CATEGORIAS.filter(c => c.grupo === 'pesca').map(link).join('')}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>${[CONFIG.endereco, CONFIG.cidade, CONFIG.telefone, CONFIG.email].filter(Boolean).join(' · ')}</span>
      ${[CONFIG.cnpj && ('CNPJ ' + CONFIG.cnpj), CONFIG.cr].filter(Boolean).length
        ? `<span>${[CONFIG.cnpj && ('CNPJ ' + CONFIG.cnpj), CONFIG.cr].filter(Boolean).join(' · ')}</span>` : ''}
      <span>Venda de produtos controlados exclusivamente a maiores de 25 anos, mediante apresentação de documentação válida (CR/Certificado de Registro) e autorização de compra. Este site é um catálogo — não realizamos vendas nem pagamentos online.</span>
      <span>Fotos de produto são <strong>ilustrativas</strong>, de bancos de imagem de licença livre —
        <a href="creditos.html" style="text-decoration:underline">ver créditos</a>. Serão substituídas pelas fotos da loja.</span>
      <span>© ${new Date().getFullYear()} ${CONFIG.nome}. Todos os direitos reservados.</span>
    </div>
  </div></footer>`;
}

function montarEstruturaComum() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="overlay" id="overlay" onclick="closeCart();if(typeof fecharFiltros==='function')fecharFiltros()"></div>
    <aside class="drawer" id="cart-drawer">
      <div class="drawer-head">
        <h3>Meu pedido</h3>
        <button class="icon-btn" onclick="closeCart()" aria-label="Fechar">${icon('x', 20)}</button>
      </div>
      <div class="drawer-body" id="cart-body"></div>
      <div class="drawer-foot" id="cart-foot" hidden>
        <input id="cart-nome" placeholder="Seu nome (opcional)">
        <div class="total-row"><span>Total do pedido</span><b id="cart-total">R$ 0,00</b></div>
        <button class="btn btn-wa btn-block" onclick="finalizarPedido()">${icon('wa', 18)} Finalizar pedido no WhatsApp</button>
        <span style="font-size:11.5px;color:var(--muted);text-align:center">
          O pedido abre no WhatsApp da loja. Nenhum pagamento é feito pelo site.</span>
      </div>
    </aside>
    <div class="modal" id="modal" onclick="if(event.target===this)fecharProduto()">
      <div class="modal-card" id="modal-content"></div>
    </div>
    <a class="wa-float" href="${waLink('Olá! Vim pelo site.')}" target="_blank" aria-label="WhatsApp">${icon('wa', 26)}</a>
    <button class="barra-pedido" id="barra-pedido" onclick="openCart()" hidden>
      <span class="barra-info"><b id="barra-qtd">0 itens</b><span id="barra-total">R$ 0,00</span></span>
      <span class="barra-cta">Ver pedido ${icon('seta', 18)}</span>
    </button>`);
  renderCart();
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { fecharProduto(); closeCart(); if (typeof fecharFiltros === 'function') fecharFiltros(); }
  });
}

function irBusca(e) {
  e.preventDefault();
  const q = $('#busca-topo').value.trim();
  location.href = 'catalogo.html' + (q ? '?q=' + encodeURIComponent(q) : '');
  return false;
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  iniciarRastreamento();
  montarHeader();
  montarFooter();
  montarEstruturaComum();
  if (typeof initHome === 'function') initHome();
  if (typeof initCatalogo === 'function') initCatalogo();
  const pedido = new URLSearchParams(location.search).get('produto');
  if (pedido && PRODUTOS.some(p => p.id === pedido)) abrirProduto(pedido);
});
