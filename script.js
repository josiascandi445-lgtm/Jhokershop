let dadosCarregados = false;
let selectedDiamonds = "";


fetch("https://api.jsonbin.io/v3/b/69613c7343b1c97be924c142/latest")

  .then(res => res.json())

  .then(data => {
    const info = data.record;
   dadosCarregados = true;
  selectedDiamonds = info.produtos1.desc;

    //textos de boas vindas
    document.getElementById("linha1").textContent = info.boasVindas.linha1;
    document.getElementById("linha2").textContent = info.boasVindas.linha2;
    document.getElementById("linha3").textContent = info.boasVindas.linha3;
    document.getElementById("linha4").textContent = info.boasVindas.linha4;

    //produtos
    // 1 Pacote Mini
    document.getElementById("botao0").innerText = info.produtos1.botao;
    document.getElementById("desc0").innerText = info.produtos1.desc;
    document.getElementById("sub0").innerText = info.produtos1.sub;
    document.getElementById("preco0").innerText = info.produtos1.preco;
     //fnção pegando a quantidade Pacote Mini
    document.getElementById("botao0").value = info.produtos1.desc; // Ex: "78 diamantes"



    // 2 Pacote Lite
    document.getElementById("botao1").textContent = info.produtos2.botao;
    document.getElementById("desc1").textContent = info.produtos2.desc;
    document.getElementById("sub1").textContent = info.produtos2.sub;
    document.getElementById("preco1").textContent = info.produtos2.preco;
    //fnção pegando a quantidade Pacote Lite
    document.getElementById("botao1").value = info.produtos2.desc;

    // 3 Pacote Ligeiro
    document.getElementById("botao2").textContent = info.produtos3.botao;
    document.getElementById("desc2").textContent = info.produtos3.desc;
    document.getElementById("sub2").textContent = info.produtos3.sub;
    document.getElementById("preco2").textContent = info.produtos3.preco;
    //fnção pegando a quantidade Pacote Ligeiro
    document.getElementById("botao2").value = info.produtos3.desc;

    // 4 Pacote Mediano
    document.getElementById("botao3").textContent = info.produtos4.botao;
    document.getElementById("desc3").textContent = info.produtos4.desc;
    document.getElementById("sub3").textContent = info.produtos4.sub;
    document.getElementById("preco3").textContent = info.produtos4.preco;
    //fnção pegando a quantidade Pacote Mediano
    document.getElementById("botao3").value = info.produtos4.desc;

    // 5  Pacote Pro
    document.getElementById("botao4").textContent = info.produtos5.botao;
    document.getElementById("desc4").textContent = info.produtos5.desc;
    document.getElementById("sub4").textContent = info.produtos5.sub;
    document.getElementById("preco4").textContent = info.produtos5.preco;
    //fnção pegando a quantidade Pacote Pro
    document.getElementById("botao4").value = info.produtos5.desc;

    // 6 Pacote Extremo 
    document.getElementById("botao5").textContent = info.produtos6.botao;
    document.getElementById("desc5").textContent = info.produtos6.desc;
    document.getElementById("sub5").textContent = info.produtos6.sub;
    document.getElementById("preco5").textContent = info.produtos6.preco;
    //fnção pegando a quantidade Pacote Extremo
    document.getElementById("botao5").value = info.produtos6.desc;

    // Pagamento
    // Pagamento 1
    document.getElementById("titulo0").textContent = info.pagamentos1.titulo;
    document.getElementById("descricao0").textContent = info.pagamentos1.descricao;
    document.getElementById("nome0").textContent = info.pagamentos1.nome;

    // Pagamento 2
    document.getElementById("titulo1").textContent = info.pagamentos2.titulo;
    document.getElementById("descricao1").textContent = info.pagamentos2.descricao;
    document.getElementById("nome1").textContent = info.pagamentos2.nome;

    // Pagamento 3
    document.getElementById("titulo2").textContent = info.pagamentos3.titulo;
    document.getElementById("descricao2").textContent = info.pagamentos3.descricao;
    document.getElementById("iban0").textContent = info.pagamentos3.iban;
    document.getElementById("nome2").textContent = info.pagamentos3.nome;

    // Pagamento 4
    document.getElementById("titulo3").textContent = info.pagamentos4.titulo;
    document.getElementById("descricao3").textContent = info.pagamentos4.descricao;
    document.getElementById("iban1").textContent = info.pagamentos4.iban;
    document.getElementById("nome3").textContent = info.pagamentos4.nome;

    // Pagamento 5
    document.getElementById("titulo4").textContent = info.pagamentos5.titulo;
    document.getElementById("express").textContent = info.pagamentos5.express;
    document.getElementById("paypao").textContent = info.pagamentos5.paypao;
    document.getElementById("unitelmoney").textContent = info.pagamentos5.unitelmoney;


    // Assinatura
    // Asiinaturas 1
    document.getElementById("assin1").innerText = info.assinaturas1.assin;
    document.getElementById("info0").textContent = info.assinaturas1.info;
    document.getElementById("assinpreco0").textContent = info.assinaturas1.assinpreco;

    // Asiinaturas 2
    document.getElementById("assin2").textContent = info.assinaturas2.assin;
    document.getElementById("info1").textContent = info.assinaturas2.info;
    document.getElementById("assinpreco1").textContent = info.assinaturas2.assinpreco;

    // Asiinaturas 3
    document.getElementById("assin3").textContent = info.assinaturas3.assin;
    document.getElementById("info2").textContent = info.assinaturas3.info;
    document.getElementById("assinpreco2").textContent = info.assinaturas3.assinpreco;

    // Asiinaturas 4
    document.getElementById("passe").textContent = info.assinaturas4.passe;
    document.getElementById("passeinfo").textContent = info.assinaturas4.passeinfo;
    document.getElementById("passepreco").textContent = info.assinaturas4.passepreco;

    // Asiinaturas 5
    document.getElementById("evolutiva1").textContent = info.assinaturas5.evolutiva;
    document.getElementById("trilhapreco1").textContent = info.assinaturas5.trilhapreco;

    // Asiinaturas 6
    document.getElementById("evolutiva2").textContent = info.assinaturas6.evolutiva;
    document.getElementById("trilhapreco2").textContent = info.assinaturas6.trilhapreco;

    // Asiinaturas 7
    document.getElementById("evolutiva3").textContent = info.assinaturas7.evolutiva;
    document.getElementById("trilhapreco3").textContent = info.assinaturas7.trilhapreco;

    // Asiinaturas 8
    document.getElementById("passenivel").textContent = info.assinaturas8.passenivel;
    document.getElementById("passeninfo").textContent = info.assinaturas8.passeninfo;
    document.getElementById("passenpreco").textContent = info.assinaturas8.passenpreco;

  })
  .catch(err => console.error("Erro ao Carregar Dados!: ", err));


  

  function selectDiamonds(element) {
    selectedDiamonds = element.value;
  
    document.querySelectorAll('.diamond-options button').forEach(btn => {
      btn.classList.remove('active');
    });
  
    element.classList.add('active');
  }


function sendToWhatsApp() {
  const playerId = document.getElementById('playerId').value.trim();
  if(!dadosCarregados) {
    alert("Por favor aguarde, os dados estão sendo carregados...");
    return;
  }

  if(!playerId){
    alert('Insira o seu ID');
    return;
  }  
  const message = `Olá Jhoker Shop! Quero fazer uma recarga de ${selectedDiamonds} . Aqui está o meu ID:${playerId} aguarde enquanto faço o pagamento`;

const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
 window.open(url, '_blank');

 
}



function contaff() {
  const message = `Olá Jhoker Shop! Quero obter mais informações sobre venda e compra de conta ff.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura1() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Jhoker Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura2() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Jhoker Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura3() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Jhoker Shop! Quero comprar a Assinatura Semanal Económica. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva1() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Jhoker Shop! Quero comprar a Trilha da Evolutiva de 3 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva2() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Jhoker Shop! Quero comprar a Trilha da Evolutiva de 7 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva3() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Jhoker Shop! Quero comprar a Trilha da Evolutiva de 30 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function passeb() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }


  const message = `Olá Jhoker Shop! Quero comprar o Passe Booyha. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function passeDeNivel() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }


  const message = `Olá Jhoker Shop! Quero comprar o Passe de Nível. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
  const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}



/* let selectedDiamonds = 78;
function selectDiamonds(value) {
  selectedDiamonds = value;
  document.querySelectorAll('.diamond-options button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}*/


