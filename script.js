const button = document.querySelector('button');

//ao clicar no botao faça ...
button.addEventListener('click', function(){

  //criar um elemento <p> onde guardamos sua referencia na const mensagem
  const mensagem = document.createElement('p');

  //adicionar a classe css no elemento mensagem
  mensagem.classList.add('mensagem');

  //insere um conteudo de texto no elemento mensagem
  mensagem.textContent = 'O Tocantins é um estado brasileiro localizado na região Norte do país, no centro geográfico do Brasil. Faz fronteira com os seguintes estados: Maranhão a norte, nordeste e leste, Piauí a leste, Bahia a leste e sudeste, Goiás a sul, Mato Grosso a oeste e sudoeste, Pará a oeste e noroeste';
  
  //insere a mensagem depois do botao
  this.insertAdjacentElement('afterend', mensagem);
  
  //depois que a animacao de css terminar remove o elemento do html
  mensagem.addEventListener('animationend', function(){
      this.remove()
  });
  
  
})