var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });


    /* Espelho de como vai ficar, após a concatenação;
    <div class="lista-produtos-single">
        <h3 class="nome-produto">Produto</h3> <!--Produto-->
        <h3 class="preco-produto"><span>Preco</span></h3"> <!--Preço-->
    </div>
    */
    
    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML=''; //Limpar a lista antes de começar.
    itens.map((val)=>{
        soma+= parseFloat(val.valor); // Convertendo string para um valor inteiro/float;
        listaProdutos.innerHTML+=`
        <div class="lista-produtos-single">
            <h3 class="nome-produto">`+val.nome+`</h3> <!--Produto-->
            <h3 class="preco-produto"><span>R$: `+val.valor+`</span></h3"> <!--Preço-->
        </div>
        `;
    });

    soma = soma.toFixed(2); //Apenas duas casas decimais;
    nomeProduto.value = '';
    precoProduto.value = '';

    let elementoSoma = document.querySelector('.soma-produto h2');
    elementoSoma.innerHTML = 'R$:'+soma;

}).addEventListener('submit',logSubmit);

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    itens=[];
    document.querySelector('.lista-produtos').innerHTML = '';
    document.querySelector('.soma-produto h2').innerHTML= 'R$:0';
});