#language: pt

Funcionalidade: Gerenciar conta

Cenário: Um usuário autenticado pode acessar a edição de informações
Dado que realizei o cadastro de um usuário
E realizei o login do usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
Então tenho acesso aos dados da conta
E posso realizar a edição de informações

Cenário: Um usuário não autenticado não pode acessar a edição de informações
Dado que não realizei o Login
Quando acesso a página inicial
Então não tenho acesso à página Perfil

Cenário: Um usuário comum pode alterar apenas as próprias informações
Dado que realizei o cadastro de um usuário
E realizei o login do usuário
Quando acesso a página Perfil
Então tenho acesso apenas ao meu perfil

Cenário: É possível alterar o próprio nome
Dado que realizei o cadastro de um usuário
E realizei o login do usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
E clico no botão de edição
Então consigo alterar meu nome para "Alteração"
E as mensagens "Sucesso" e "Informações atualizadas!" são exibidas

Cenário: É possível alterar a própria senha
Dado que realizei o cadastro de um usuário
E realizei o login do usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
E clico no botão de edição
E preencho os campos Senha e Confirmar Senha com dados válidos
E clico no botão Salvar
Então as mensagens "Sucesso" e "Informações atualizadas!" são exibidas

Cenário: Não é possível alterar a senha sem preencher o campo de confirmação
Dado que realizei o cadastro de um usuário
E realizei o login do usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
E clico no botão de edição
E preencho apenas o campo de Senha
E clico no botão Salvar
Então a mensagem "As senhas devem ser iguais." é exibida

Cenário: Quando autenticado, o usuário deve ter acessos a todos os seus dados relevantes
Dado que realizei o cadastro de um usuário
E realizei o login do usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
Então visualizo as informações de Nome
E visualizo as informações de E-mail
E visualizo o Tipo de Usuário