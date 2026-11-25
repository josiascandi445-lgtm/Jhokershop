(() => {
  'use strict';
  const WA = '244974551595';
  const $ = s => document.querySelector(s);
  const E = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };

  const DEFAULT = {
    packs: [
      { n: 'Pacote Mini', q: '78 diamantes', b: '65 + 13 bónus', p: '900 Kz' },
      { n: 'Pacote Lite', q: '120 diamantes', b: '100 + 20 bónus', p: '1.300 Kz' },
      { n: 'Pacote Ligeiro', q: '372 diamantes', b: '310 + 62 bónus', p: '3.700 Kz' },
      { n: 'Pacote Mediano', q: '624 diamantes', b: '520 + 104 bónus', p: '5.300 Kz' },
      { n: 'Pacote Pro', q: '1.272 diamantes', b: '1060 + 212 bónus', p: '11.500 Kz' },
      { n: 'Pacote Extremo', q: '2.616 diamantes', b: '2180 + 436 bónus', p: '22.000 Kz' }
    ],
    groups: [
      { title: 'Assinaturas', items: [
        { n: 'Assinatura mensal', i: '1.800 diamantes em 30 dias', p: '10.500 Kz', img: 'ff_icon/ass_mensal.webp' },
        { n: 'Assinatura semanal', i: '340 diamantes em 7 dias', p: '2.500 Kz', img: 'ff_icon/ass_semanal.webp' },
        { n: 'Assinatura semanal económica', i: '47 diamantes em 7 dias', p: '500 Kz', img: 'ff_icon/ass_sem_eco.png' },
        { n: 'Passe Booyah', i: 'Colete pontos até completar', p: '2.000 Kz', img: 'ff_icon/pb.png' }
      ] },
      { title: 'Trilha da evolutiva', items: [
        { n: 'Evolutiva 3 dias', p: '800 Kz', img: 'ff_icon/ev03d.png' },
        { n: 'Evolutiva 7 dias', p: '1.500 Kz', img: 'ff_icon/evo7d.png' },
        { n: 'Evolutiva 30 dias', p: '3.500 Kz', img: 'ff_icon/evo30d.png' }
      ] },
      { title: 'Outros', items: [
        { n: 'Passe de nível', i: '1.272 diamantes', p: '5.500 Kz', img: 'ff_icon/card-dima.jpg' }
      ] }
    ],
    pay: [
      { t: 'Banco BAI', l: [['Conta', '0040 0000 88356594101 26']], h: 'Eduardo Muata Mahata Mueji' },
      { t: 'Banco BFA', l: [['Conta', '000600004752330330106']], h: 'Eduardo Muata Mahata Mueji' },
      { t: 'Atlântico para Atlântico', l: [['Conta', '23306644810001'], ['IBAN', '0055.0000.3306.6448.1018.3']], h: 'Simões Simao Mateus' },
      { t: 'BIC para BIC', l: [['Conta', '23419870910001'], ['IBAN', '0051 0000 34198709101 95']], h: 'Eduardo Muata Mahata Mueji' },
      { t: 'Pagamento móvel', l: [['Express', '974551595'], ['PayPay AO', '974551595'], ['Unitel Money', '974551595']] }
    ]
  };

  /* Ponto de integração do backend: substituir o corpo desta função pela leitura do Firestore.
     Deve devolver um objeto com a mesma forma de DEFAULT ({ packs, groups, pay }). */
  const LEGACY_URL = 'https://api.jsonbin.io/v3/b/69613c7343b1c97be924c142/latest';
  async function loadCatalog() {
    try {
      const res = await fetch(LEGACY_URL);
      if (!res.ok) throw new Error(res.status);
      return fromLegacy((await res.json()).record);
    } catch (e) { return DEFAULT; }
  }
  function fromLegacy(r) {
    const d = structuredClone(DEFAULT);
    d.packs.forEach((k, i) => { const o = r['produtos' + (i + 1)]; Object.assign(k, { n: o.botao, q: o.desc, b: o.sub, p: o.preco }); });
    d.groups.flatMap(g => g.items).forEach((k, i) => {
      const o = r['assinaturas' + (i + 1)];
      const m = i === 3 ? ['passe', 'passeinfo', 'passepreco'] : i > 3 && i < 7 ? ['evolutiva', null, 'trilhapreco'] : i === 7 ? ['passenivel', 'passeninfo', 'passenpreco'] : ['assin', 'info', 'assinpreco'];
      k.n = o[m[0]]; if (m[1]) k.i = o[m[1]]; k.p = o[m[2]];
    });
    return d;
  }

  let data = DEFAULT, sel = 0;
  const idInput = $('#playerId'), idErr = $('#idErr');

  function order(label) {
    const id = idInput.value.trim();
    if (!id) {
      idErr.hidden = false; idInput.setAttribute('aria-invalid', 'true');
      idInput.focus(); idInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const msg = `Olá Jhoker Shop! Quero comprar ${label}. Aqui está o meu ID: ${id}. Aguarde enquanto faço o pagamento.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }

  function choose(i) {
    sel = i;
    const k = data.packs[i];
    document.querySelectorAll('.pack').forEach((b, j) => b.setAttribute('aria-checked', j === i));
    $('#selName').textContent = `${k.q} (${k.n})`;
    $('#selPrice').textContent = k.p;
  }

  function copy(v, b) {
    navigator.clipboard.writeText(v).then(() => {
      b.textContent = 'Copiado';
      setTimeout(() => { b.textContent = 'Copiar'; }, 1500);
    }).catch(() => {});
  }

  function render(d) {
    data = d;
    $('#packs').replaceChildren(...d.packs.map((k, i) => {
      const b = E('button', 'pack'); b.type = 'button'; b.setAttribute('role', 'radio');
      b.append(E('b', '', k.q), E('span', '', k.n), E('small', '', k.b), E('em', '', k.p));
      b.onclick = () => choose(i);
      return b;
    }));
    choose(Math.min(sel, d.packs.length - 1));

    $('#subs').replaceChildren(...d.groups.map(g => {
      const s = E('div', 'grp'), l = E('div', 'items');
      s.append(E('h3', '', g.title));
      g.items.forEach(k => {
        const c = E('article', 'item'), im = E('img'), t = E('div', 'txt'), f = E('div', 'foot'), b = E('button', 'btn small', 'Comprar');
        im.src = k.img; im.alt = ''; im.loading = 'lazy';
        t.append(E('h4', '', k.n)); if (k.i) t.append(E('p', '', k.i));
        b.type = 'button'; b.onclick = () => order(k.n);
        f.append(E('strong', '', k.p), b);
        c.append(im, t, f); l.append(c);
      });
      s.append(l); return s;
    }));

    $('#pay').replaceChildren(...d.pay.map(p => {
      const c = E('article', 'bank'); c.append(E('h4', '', p.t));
      p.l.forEach(([a, v]) => {
        const r = E('div', 'row'), b = E('button', 'copy', 'Copiar');
        b.type = 'button'; b.onclick = () => copy(v, b);
        r.append(E('span', '', a), E('code', '', v), b); c.append(r);
      });
      if (p.h) c.append(E('p', 'holder', p.h));
      return c;
    }));
  }

  idInput.addEventListener('input', () => {
    idInput.value = idInput.value.replace(/\D/g, '').slice(0, 15);
    idErr.hidden = true; idInput.removeAttribute('aria-invalid');
  });
  $('#orderBtn').addEventListener('click', () => { const k = data.packs[sel]; order(`uma recarga de ${k.q} (${k.n})`); });

  render(DEFAULT);
  loadCatalog().then(render);
})();
