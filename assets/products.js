/* ============================================================
   GO FISHING — DADOS DO SITE
   Tudo que muda no dia a dia está neste arquivo.
   Procure por "TROCAR" para achar o que precisa dos dados reais.
   ============================================================ */

/* ---------- 1. DADOS DA LOJA (TROCAR) ---------- */
const CONFIG = {
  nome:        'GOFISH',
  slogan:      'Caça & Pesca',
  logo:        'assets/img/logo.jpg',
  anos:        10,                                   // 10 anos (do logo)
  whatsapp:    '5546999428662',                      // (46) 99942-8662 — CONFIRMAR: o link da bio usa 5546999308003
  telefone:    '(46) 99942-8662',
  email:       '',                                   // TROCAR se tiverem e-mail
  endereco:    'Av. Tupi, 1921',
  cidade:      'Pato Branco — PR',
  horario:     'Seg a Sex 8h30 às 18h30 · Sáb 8h30 às 12h30', // TROCAR — confirmar horário
  instagram:   'https://instagram.com/gofishpatobranco',
  instagramUser:'@gofishpatobranco',
  cnpj:        '',                                   // TROCAR quando tiver
  cr:          '',                                   // TROCAR — nº do CR do Exército
  clubeTiro:   true,                                 // eles têm clube de tiro
  mapsQuery:   'Av. Tupi, 1921, Pato Branco - PR',
  site:        'https://euwill-maker.github.io/gofish/',

  /* Cole aqui os IDs para ligar o rastreamento das campanhas.
     Enquanto estiverem vazios, nenhum script de rastreio é carregado. */
  metaPixel:   '',   // TROCAR — ID do Pixel do Meta (só números)
  ga4:         '',   // TROCAR — ID do Google Analytics 4 (G-XXXXXXX)

  /* Horário de funcionamento em minutos do dia (0=domingo … 6=sábado).
     Usado no selo "aberto agora". TROCAR se o horário real for outro. */
  expediente: {
    1: [510, 1110], 2: [510, 1110], 3: [510, 1110], 4: [510, 1110], 5: [510, 1110],
    6: [510, 750]
  }
};

/* ---------- 2. CATEGORIAS ---------- */
const CATEGORIAS = [
  { id:'armas-de-fogo',    nome:'Armas de Fogo',        grupo:'tiro',  icone:'arma',
    subs:['Pistolas','Revólveres','Espingardas','Carabinas'] },
  { id:'municoes',         nome:'Munições',             grupo:'tiro',  icone:'municao',
    subs:['.38 SPL','9x19mm','.380 ACP','.22 LR','12 GA','.40 S&W'] },
  { id:'pressao-airsoft',  nome:'Pressão e Airsoft',    grupo:'tiro',  icone:'pressao',
    subs:['Carabinas PCP','Pistolas de Pressão','Airsoft'] },
  { id:'tatico',           nome:'Tático e Acessórios',  grupo:'tiro',  icone:'tatico',
    subs:['Coldres','Coletes','Cutelaria','Lanternas','Mochilas'] },
  { id:'recarga',          nome:'Recarga',              grupo:'tiro',  icone:'recarga',
    subs:['Prensas','Estojos','Componentes'] },
  { id:'varas',            nome:'Varas de Pesca',       grupo:'pesca', icone:'vara',
    subs:['Telescópicas','Para Molinete','Para Carretilha'] },
  { id:'molinetes',        nome:'Molinetes e Carretilhas', grupo:'pesca', icone:'molinete',
    subs:['Molinetes','Carretilhas'] },
  { id:'iscas',            nome:'Iscas',                grupo:'pesca', icone:'isca',
    subs:['Artificiais','Superfície','Meia-água'] },
  { id:'linhas',           nome:'Linhas, Anzóis e Chumbadas', grupo:'pesca', icone:'linha',
    subs:['Linhas','Anzóis','Chumbadas'] },
  { id:'acessorios-pesca', nome:'Caixas e Acessórios',  grupo:'pesca', icone:'caixa',
    subs:['Caixas','Redes e Puçás','Alicates e Ferramentas'] }
];

/* ---------- 3. PRODUTOS (TROCAR pelos reais) ----------
   controlado: true  -> mostra tarja "Produto Controlado" e aviso de CR
   destaque:   true  -> aparece na home
   preco: 0          -> mostra "Sob consulta"
   imagens: []       -> usa ilustração automática da categoria
   ------------------------------------------------------ */
const PRODUTOS = [
  /* ---- ARMAS DE FOGO ---- */
  { nome:'Pistola Taurus G3C 9mm', categoria:'armas-de-fogo', sub:'Pistolas', marca:'Taurus',
    calibre:'9x19mm', preco:4290, controlado:true, destaque:true, disponivel:true, imagens:['assets/img/produtos/pistola-taurus-g3c-9mm.webp'],
    descricao:'Pistola semiautomática compacta em 9mm, capacidade 12+1, cano de 3,2\". Miras de 3 pontos e gatilho Restrike. Uma das mais vendidas para defesa pessoal e tiro esportivo.' },
  { nome:'Pistola Taurus G2C .380 ACP', categoria:'armas-de-fogo', sub:'Pistolas', marca:'Taurus',
    calibre:'.380 ACP', preco:3690, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/pistola-taurus-g2c-380-acp.webp'], ilustrativa:true,
    descricao:'Compacta e leve, capacidade 12+1, com trava manual e indicador de câmara carregada.' },
  { nome:'Pistola Glock G25 Dark Olive .380 ACP', categoria:'armas-de-fogo', sub:'Pistolas', marca:'Glock',
    calibre:'.380 ACP', preco:6890, controlado:true, destaque:true, disponivel:true,
    imagens:['assets/img/produtos/pistola-glock-g25-380-acp.webp',
             'assets/img/produtos/pistola-glock-g25-380-acp-5.webp',
             'assets/img/produtos/pistola-glock-g25-380-acp-3.webp',
             'assets/img/produtos/pistola-glock-g25-380-acp-6.webp',
             'assets/img/produtos/pistola-glock-g25-380-acp-4.webp',
             'assets/img/produtos/pistola-glock-g25-380-acp-7.webp'],
    descricao:'Glock G25 na cor Dark Olive, geração 4. Armação em polímero reforçado, capacidade 15+1, cano de 102mm. Uma das pistolas .380 mais confiáveis do mercado.' },
  { nome:'Revólver Taurus RT 838 .38 SPL', categoria:'armas-de-fogo', sub:'Revólveres', marca:'Taurus',
    calibre:'.38 SPL', preco:3450, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/revolver-taurus-rt-838-38-spl.webp'],
    descricao:'Revólver 8 tiros em .38 SPL, cano de 6" com ventilação, acabamento inox polido, empunhadura emborrachada e ação dupla/simples. Excelente para tiro esportivo.' },
  { nome:'Revólver Rossi RM66 .357 MAG', categoria:'armas-de-fogo', sub:'Revólveres', marca:'Rossi',
    calibre:'.357 MAG', preco:3990, controlado:true, destaque:true, disponivel:true, imagens:['assets/img/produtos/revolver-rossi-rm66-357-mag.webp'],
    descricao:'Revólver 6 tiros em .357 Magnum, cano de 6" oxidado black, empunhadura em madeira e mira ajustável. Excelente para tiro esportivo e defesa rural.' },
  { nome:'Espingarda Boito Pump BSA-84 Niquelada 12 GA', categoria:'armas-de-fogo', sub:'Espingardas', marca:'Boito',
    calibre:'12 GA', preco:5290, controlado:true, destaque:false, disponivel:true,
    imagens:['assets/img/produtos/espingarda-boito-pump-bsa-84-12-ga.webp'],
    descricao:'Espingarda de repetição (pump action) calibre 12, capacidade de 8 tiros, coronha e telha em madeira e acabamento niquelado. Robusta para caça, defesa rural e tiro prático.' },
  { nome:'Carabina CBC 8022 .22 LR', categoria:'armas-de-fogo', sub:'Carabinas', marca:'CBC',
    calibre:'.22 LR', preco:2890, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/carabina-cbc-8022-22-lr.webp'], ilustrativa:true,
    descricao:'Carabina de ferrolho, capacidade 10 tiros, ideal para treino e caça de pequeno porte.' },

  /* ---- MUNIÇÕES ---- */
  { nome:'Munição CBC .38 SPL 158gr CHOG — cx/50', categoria:'municoes', sub:'.38 SPL', marca:'CBC',
    calibre:'.38 SPL', preco:225, controlado:true, destaque:true, disponivel:true, imagens:['assets/img/produtos/municao-cbc-38-spl-158gr-chog-cx-50.webp'], ilustrativa:true,
    descricao:'Caixa com 50 unidades. Projétil chumbo ogival, uso em treino e defesa.' },
  { nome:'Munição CBC 9x19mm 124gr ETOG — cx/50', categoria:'municoes', sub:'9x19mm', marca:'CBC',
    calibre:'9x19mm', preco:249, controlado:true, destaque:true, disponivel:true, imagens:['assets/img/produtos/municao-cbc-9x19mm-124gr-etog-cx-50.webp'], ilustrativa:true,
    descricao:'Caixa com 50 unidades. Encamisada total, alta consistência de tiro.' },
  { nome:'Munição CBC .380 ACP 95gr — cx/50', categoria:'municoes', sub:'.380 ACP', marca:'CBC',
    calibre:'.380 ACP', preco:215, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/municao-cbc-380-acp-95gr-cx-50.webp'], ilustrativa:true,
    descricao:'Caixa com 50 unidades, encamisada, ideal para treinamento.' },
  { nome:'Munição CBC .22 LR High Velocity — cx/50', categoria:'municoes', sub:'.22 LR', marca:'CBC',
    calibre:'.22 LR', preco:59, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/municao-cbc-22-lr-high-velocity-cx-50.webp'], ilustrativa:true,
    descricao:'Caixa com 50 unidades. Alta velocidade, ótimo custo por tiro.' },
  { nome:'Cartucho CBC 12 GA Chumbo 36g — cx/25', categoria:'municoes', sub:'12 GA', marca:'CBC',
    calibre:'12 GA', preco:189, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/cartucho-cbc-12-ga-chumbo-36g-cx-25.webp'], ilustrativa:true,
    descricao:'Caixa com 25 cartuchos, carga de chumbo, uso em caça e tiro prático.' },
  { nome:'Munição CBC .40 S&W 180gr — cx/50', categoria:'municoes', sub:'.40 S&W', marca:'CBC',
    calibre:'.40 S&W', preco:289, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/municao-cbc-40-s-w-180gr-cx-50.webp'], ilustrativa:true,
    descricao:'Caixa com 50 unidades, encamisada total.' },

  /* ---- PRESSÃO E AIRSOFT ---- */
  { nome:'Carabina de Pressão PCP Rossi Outlander 5.5mm', categoria:'pressao-airsoft', sub:'Carabinas PCP', marca:'Rossi',
    calibre:'5,5mm', preco:3290, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/carabina-de-pressao-pcp-rossi-outlander-5-5mm.webp'], ilustrativa:true,
    descricao:'Carabina PCP com reservatório de 250cc, até 40 disparos por carga. Não exige CR.' },
  { nome:'Carabina de Pressão CBC Nitro X 5.5mm', categoria:'pressao-airsoft', sub:'Carabinas PCP', marca:'CBC',
    calibre:'5,5mm', preco:1290, controlado:false, destaque:false, disponivel:true, imagens:[],
    descricao:'Sistema de gás ram, coronha polímero, ideal para treino de tiro.' },
  { nome:'Pistola de Pressão Gamo P-25 4.5mm', categoria:'pressao-airsoft', sub:'Pistolas de Pressão', marca:'Gamo',
    calibre:'4,5mm', preco:1490, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/pistola-de-pressao-gamo-p-25-4-5mm.webp'], ilustrativa:true,
    descricao:'Pistola CO2 blowback, 16 tiros, réplica realista.' },
  { nome:'Rifle Airsoft Elétrico M4 CQB 6mm', categoria:'pressao-airsoft', sub:'Airsoft', marca:'Cyma',
    calibre:'6mm', preco:1890, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/rifle-airsoft-eletrico-m4-cqb-6mm.webp'], ilustrativa:true,
    descricao:'AEG completo com bateria e carregador, potência ajustável.' },

  /* ---- TÁTICO E ACESSÓRIOS ---- */
  { nome:'Coldre Kydex Externo Nível 2', categoria:'tatico', sub:'Coldres', marca:'Invictus',
    preco:389, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/coldre-kydex-externo-nivel-2.webp'], ilustrativa:true,
    descricao:'Coldre em Kydex com retenção nível 2, ajuste de cant, uso velado ou ostensivo.' },
  { nome:'Colete Tático Modular MOLLE', categoria:'tatico', sub:'Coletes', marca:'Invictus',
    preco:649, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/colete-tatico-modular-molle.webp'], ilustrativa:true,
    descricao:'Sistema MOLLE completo, ajuste rápido, compatível com placas balísticas.' },
  { nome:'Faca Tática Full Tang com Bainha', categoria:'tatico', sub:'Cutelaria', marca:'Ka-Bar',
    preco:499, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/faca-tatica-full-tang-com-bainha.webp'], ilustrativa:true,
    descricao:'Lâmina em aço carbono 1095, cabo emborrachado, bainha de nylon.' },
  { nome:'Lanterna Tática 1200 Lumens Recarregável', categoria:'tatico', sub:'Lanternas', marca:'Nitecore',
    preco:329, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/lanterna-tatica-1200-lumens-recarregavel.webp'], ilustrativa:true,
    descricao:'Alumínio aeronáutico, 5 modos, à prova d’água IPX8, bateria inclusa.' },
  { nome:'Mochila Tática 40L Impermeável', categoria:'tatico', sub:'Mochilas', marca:'Invictus',
    preco:459, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/mochila-tatica-40l-impermeavel.webp'], ilustrativa:true,
    descricao:'Compartimento para hidratação, sistema MOLLE, tecido 600D.' },

  /* ---- RECARGA ---- */
  { nome:'Prensa de Recarga Progressiva', categoria:'recarga', sub:'Prensas', marca:'Lee',
    preco:4590, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/prensa-de-recarga-progressiva.webp'], ilustrativa:true,
    descricao:'Prensa progressiva 4 estações, aumenta muito a produtividade da recarga.' },
  { nome:'Estojo Virgem 9mm — pacote 100un', categoria:'recarga', sub:'Estojos', marca:'CBC',
    preco:189, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/estojo-virgem-9mm-pacote-100un.webp'], ilustrativa:true,
    descricao:'Estojos novos, latão, prontos para recarga.' },
  { nome:'Kit Espoletas Small Pistol — 1000un', categoria:'recarga', sub:'Componentes', marca:'CBC',
    preco:0, controlado:true, destaque:false, disponivel:true, imagens:['assets/img/produtos/kit-espoletas-small-pistol-1000un.webp'], ilustrativa:true,
    descricao:'Venda somente para CACs com documentação válida. Consulte disponibilidade.' },

  /* ---- VARAS ---- */
  { nome:'Vara Telescópica Marine Sports 1,80m', categoria:'varas', sub:'Telescópicas', marca:'Marine Sports',
    preco:189, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/vara-telescopica-marine-sports-1-80m.webp'], ilustrativa:true,
    descricao:'Ação média, 10-20lb, fibra de vidro. Compacta para transporte.' },
  { nome:'Vara para Molinete Lumis Infinity 2,10m', categoria:'varas', sub:'Para Molinete', marca:'Lumis',
    preco:329, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/vara-para-molinete-lumis-infinity-2-10m.webp'], ilustrativa:true,
    descricao:'Carbono IM6, 2 partes, ação rápida, 12-25lb.' },
  { nome:'Vara para Carretilha Albatroz 1,68m', categoria:'varas', sub:'Para Carretilha', marca:'Albatroz',
    preco:279, controlado:false, destaque:false, disponivel:true, imagens:[],
    descricao:'Ideal para pesca de black bass e tucunaré, 10-20lb.' },

  /* ---- MOLINETES E CARRETILHAS ---- */
  { nome:'Molinete Marine Sports Nautika 4000', categoria:'molinetes', sub:'Molinetes', marca:'Marine Sports',
    preco:349, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/molinete-marine-sports-nautika-4000.webp'], ilustrativa:true,
    descricao:'5 rolamentos, drag frontal 8kg, carretel em alumínio.' },
  { nome:'Molinete Shimano Sienna 2500', categoria:'molinetes', sub:'Molinetes', marca:'Shimano',
    preco:429, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/molinete-shimano-sienna-2500.webp'], ilustrativa:true,
    descricao:'Corpo Varispeed, recolhimento suave, ótimo custo-benefício.' },
  { nome:'Carretilha Perfil Baixo 8 Rolamentos', categoria:'molinetes', sub:'Carretilhas', marca:'Albatroz',
    preco:389, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/carretilha-perfil-baixo-8-rolamentos.webp'], ilustrativa:true,
    descricao:'Relação 7.2:1, freio magnético ajustável, manivela em alumínio.' },

  /* ---- ISCAS ---- */
  { nome:'Isca Artificial Meia-Água 11cm', categoria:'iscas', sub:'Meia-água', marca:'Rapala',
    preco:79, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/isca-artificial-meia-agua-11cm.webp'], ilustrativa:true,
    descricao:'Nada de 1 a 2 metros, garatéias reforçadas, ideal para tucunaré.' },
  { nome:'Isca de Superfície Zara 9cm', categoria:'iscas', sub:'Superfície', marca:'Marine Sports',
    preco:59, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/isca-de-superficie-zara-9cm.webp'], ilustrativa:true,
    descricao:'Trabalho "walk the dog", explosiva para tucunaré e traíra.' },
  { nome:'Kit 10 Iscas Artificiais Sortidas', categoria:'iscas', sub:'Artificiais', marca:'Sortido',
    preco:189, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/kit-10-iscas-artificiais-sortidas.webp'], ilustrativa:true,
    descricao:'Kit variado com estojo, cobre diferentes profundidades.' },

  /* ---- LINHAS, ANZÓIS E CHUMBADAS ---- */
  { nome:'Linha Multifilamento 0,30mm 300m', categoria:'linhas', sub:'Linhas', marca:'Fastline',
    preco:129, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/linha-multifilamento-0-30mm-300m.webp'], ilustrativa:true,
    descricao:'4 fios trançados, baixa memória, alta resistência ao atrito.' },
  { nome:'Linha Monofilamento 0,40mm 100m', categoria:'linhas', sub:'Linhas', marca:'Maruri',
    preco:39, controlado:false, destaque:false, disponivel:true, imagens:[],
    descricao:'Boa elasticidade e resistência a nós.' },
  { nome:'Cartela Anzóis Sortidos 100un', categoria:'linhas', sub:'Anzóis', marca:'Maruri',
    preco:49, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/cartela-anzois-sortidos-100un.webp'], ilustrativa:true,
    descricao:'Tamanhos variados, aço carbono niquelado.' },
  { nome:'Kit Chumbadas Oliva 50un', categoria:'linhas', sub:'Chumbadas', marca:'Sortido',
    preco:45, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/kit-chumbadas-oliva-50un.webp'], ilustrativa:true,
    descricao:'Pesos variados de 5g a 40g, com estojo organizador.' },

  /* ---- CAIXAS E ACESSÓRIOS ---- */
  { nome:'Caixa de Pesca 4 Bandejas', categoria:'acessorios-pesca', sub:'Caixas', marca:'Marine Sports',
    preco:239, controlado:false, destaque:true, disponivel:true, imagens:[],
    descricao:'Estrutura reforçada, divisórias ajustáveis, alça de transporte.' },
  { nome:'Puçá Cabo Telescópico 1,80m', categoria:'acessorios-pesca', sub:'Redes e Puçás', marca:'Albatroz',
    preco:159, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/puca-cabo-telescopico-1-80m.webp'], ilustrativa:true,
    descricao:'Rede emborrachada que não machuca o peixe, cabo em alumínio.' },
  { nome:'Alicate de Pesca Inox com Corda', categoria:'acessorios-pesca', sub:'Alicates e Ferramentas', marca:'Albatroz',
    preco:119, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/alicate-de-pesca-inox-com-corda.webp'], ilustrativa:true,
    descricao:'Aço inox, corta linha embutido, com corda de segurança.' },
  { nome:'Caiaque de Pesca 2,90m com Assento', categoria:'acessorios-pesca', sub:'Caixas', marca:'Brudden',
    preco:4290, controlado:false, destaque:true, disponivel:true, imagens:['assets/img/produtos/caiaque-de-pesca-2-90m-com-assento.webp'], ilustrativa:true,
    descricao:'Caiaque em polietileno, estável, com porta-varas e compartimento estanque. Ideal para pesca em rio e represa.' },
  { nome:'Óculos e Abafador de Tiro — Kit Segurança', categoria:'tatico', sub:'Coletes', marca:'TAG',
    preco:289, controlado:false, destaque:false, disponivel:true, imagens:['assets/img/produtos/oculos-e-abafador-de-tiro-kit-seguranca.webp'], ilustrativa:true,
    descricao:'Kit de proteção para uso no clube de tiro: óculos UV400 e abafador de ruídos.' }
];
