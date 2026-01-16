const url = 'https://api.jsonbin.io/v3/b/69613c7343b1c97be924c142/latest'
const putUrl = 'https://api.jsonbin.io/v3/b/69613c7343b1c97be924c142'
const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': '$2a$10$kP8RkA5NFAcKTqDCA1CufuRJ76gli/19k/67hLlKdhU5ZkB9uas0u'
};



function atualizarCampo(secao, campoJson, idInput, idBotao) {
  const valor = document.getElementById(idInput).value;
  const botao = document.getElementById(idBotao);

  const textoOriginal = botao.innerText;
  botao.innerText = "Atualizando...";
  botao.disabled = true; // desativa o botão temporariamente

  fetch(url, { headers })
    .then(res => res.json())
    .then(data => {
      const json = data.record;

      if (!json[secao]) json[secao] = {};
      json[secao][campoJson] = valor;

      return fetch(putUrl, {
        method: "PUT",
        headers,
        body: JSON.stringify(json)
      });
    })
    .then(() => {
      alert("🟢 Campo atualizado!");
    })
    .catch(err => {
      console.error("Erro:", err);
      alert("❌ Erro ao atualizar! Verifique a sua internet ou tente novamente");
    })
    .finally(() => {
      botao.innerText = textoOriginal;
      botao.disabled = false;
    });
}










/**const url = 'https://api.jsonbin.io/v3/b/69613c7343b1c97be924c142/latest'
const putUrl = 'https://api.jsonbin.io/v3/b/69613c7343b1c97be924c142'
const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': '$2a$10$kP8RkA5NFAcKTqDCA1CufuRJ76gli/19k/67hLlKdhU5ZkB9uas0u'
};

function atualizarCampo(secao, campoJson, idInput) {
  const valor = document.getElementById(idInput).value;


  fetch(url, { headers })
    .then(res => res.json())
    .then(data => {
      const json = data.record;
      
      //garantir que exista a secção
      if(!json[secao])
      json[secao] = {};

      json[secao][campoJson] = valor;

      return fetch(putUrl, {
        method: "PUT",
        headers,
        body: JSON.stringify(json)
      });
    })
    .then(() => alert("🟢 Campo atualizado!"))
    .catch(err => console.error("Erro:", err));


}
 */










