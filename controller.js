// Função para validar o acesso na tela de login
function acessar() {
    // Obtém os valores dos campos de email e senha
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
    // Verifica se os campos estão preenchidos
    if (!loginEmail || !loginSenha) {
        // Se algum campo estiver vazio, exibe um alerta
        alert("Favor preencher todos os campos");
    } else {
        // Se ambos os campos estiverem preenchidos, redireciona para a página de cadastro
        window.location.href = "cadastro.html";
    }
 }
 // Array que armazena a lista de nomes de usuários
 var dadosLista = [];
 var EmailLista = [];
 var CPFlista = [];
 // Função para salvar o nome do usuário na lista
 function salvarUser() {
    // Obtém o valor do campo de nome de usuário
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;
    let CPFUser = document.getElementById("CPFUser").value;
    // Verifica se o campo de nome não está vazio
    if (document.getElementById('emailUser').value == "" || document.getElementById('emailUser').value.indexOf('@') == -1 || document.getElementById('emailUser').value.indexOf('.') == -1) {
        // Se alguma das condições acima for verdadeira, exibe um alerta
        alert("Por favor, informe um e-mail válido");
    } else if (nomeUser && emailUser && CPFUser) {
        // Adiciona o nome ao array de dadosLista
        dadosLista.push(nomeUser);
        EmailLista.push(emailUser);
        CPFlista.push(CPFUser);
        // Atualiza a lista exibida na tela
        criarLista();
        // Limpa o campo de nome de usuário
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
        document.getElementById("CPFUser").value = "";
    } else {
        // Se o campo estiver vazio, exibe um alerta
        alert("Favor informa todos os campos para cadastrado");
    }
 }
 // Função para criar e atualizar a lista de usuários na tela
 function criarLista() {
    // Cria o cabeçalho da tabela
    let tabela = "<tr><th> Nome Usuário</th><th>E-mail</th><th>CPF</tr><th>Ações</th>";
    // Itera sobre todos os nomes na lista de dados
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        // Adiciona uma nova linha para cada nome com um botão de editar
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + CPFlista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)' class='btn-rosa'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)' class='btn-rosa'>excluir</button></td></tr>";
    }
    // Atualiza o conteúdo da tabela com a nova lista
    document.getElementById("tabela").innerHTML = tabela;
 }
 // Função para editar um nome na lista
 function editar(i) {
    // Preenche o campo de nome com o nome selecionado para edição
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById('emailUser').value = EmailLista[(i - 1)];
    document.getElementById('CPFUser').value = CPFlista[(i - 1)];
    // seleciona para a edição
    dadosLista.splice(dadosLista[(i - 1)], 1);
    EmailLista.splice(EmailLista[(i - 1)], 1);
    CPFlista.splice(CPFlista[(i - 1)], 1);
    // Atualiza a lista exibida na tela após a remoção
 }
 // Função para excluir um nome na lista
 function excluir(i) {
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
 }