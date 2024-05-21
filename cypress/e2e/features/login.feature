#language: pt

Funcionalidade: Login Usuário

Cenário: Login deve ser realizado com sucesso
Dado que realizei o cadastro de um usuário
E acessei a funcionalidade de Login
Quando informo o e-mail cadastrado
E a senha cadastrada
E clico no botão Login
Então sou redirecionado para a página inicial
E tenho acesso às informações do meu perfil

Cenário: E-mail incorreto deve dar erro
Dado que realizei o cadastro de um usuário
E que acessei a funcionalidade de Login
Quando informo um e-mail não cadastrado
E informo a senha cadastrada
Então as mensagens "Falha ao autenticar" e "Usuário ou senha inválidos." são exibidas

Cenário: E-mail em branco deve dar erro
Dado que realizei o cadastro de um usuário
E que acessei a funcionalidade de Login
Quando informo a senha cadastrada
E não preencho o campo E-mail
Então a mensagem "Informe o e-mail" é exibida

Cenário: Senha em branco deve dar erro
Dado que realizei o cadastro de um usuário
E que acessei a funcionalidade de Login
Quando informo o e-mail cadastrado
E não preencho o campo Senha
Então a mensagem "Informe a senha" é exibida

Cenário: Senha incorreta deve dar erro
Dado que acessei a funcionalidade de Login
Quando informo um e-mail cadastrado
E informo uma senha não cadastrada
Então as mensagens "Falha ao autenticar" e "Usuário ou senha inválidos." são exibidas