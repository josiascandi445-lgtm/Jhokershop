let selectedDiamonds = 78;

    function selectDiamonds(value) {
      selectedDiamonds = value;
      document.querySelectorAll('.diamond-options button').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
    }

    
    function sendToWhatsApp() {
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }  
      const message = `Olá Jhoker Shop! Quero fazer uma recarga de ${selectedDiamonds} diamantes. Aqui está o meu ID:${playerId} aguarde enquanto faço o pagamento`;

    const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
     window.open(url, '_blank');

     
    }

    function contaff(){
      const message = `Olá Jhoker Shop! Quero obter mais informações sobre venda e compra de conta ff.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }

    function assinatura1(){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }
      const message = `Olá Jhoker Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
   
    function assinatura2(){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }
      const message = `Olá Jhoker Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
    
    function assinatura3(){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }
      const message = `Olá Jhoker Shop! Quero comprar a Assinatura Semanal Económica. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
    
    function evolutiva1 (){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }
      const message = `Olá Jhoker Shop! Quero comprar a Trilha da Evolutiva de 3 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }

    function  evolutiva2 (){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }
      const message = `Olá Jhoker Shop! Quero comprar a Trilha da Evolutiva de 7 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }

    function  evolutiva3 (){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }
      const message = `Olá Jhoker Shop! Quero comprar a Trilha da Evolutiva de 30 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }

    function passeb(){
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }

      const message = `Olá Jhoker Shop! Quero comprar o Passe Booyha. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
      const url = `https://wa.me/+244974551595?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
