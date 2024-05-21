#language: pt

Funcionalidade: Criar usuário

Cenário: Usuário deve ser cadastrado com sucesso
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida
E clico no botão Salvar
Então as mensagens "Sucesso" e "Cadastro realizado!" são exibidas

Cenário: Nome em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um e-mail válido
E informo uma senha válida
E não preencho o campo Nome
Então a mensagem "Informe o nome" é exibida

Cenário: Email em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo uma senha válida
E não preencho o campo E-mail
Então a mensagem "Informe o e-mail" é exibida

Cenário: Senha em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E não preencho o campo Senha
Então a mensagem "Informe a senha" é exibida

Cenário: Senha com menos de 6 dígitos devem dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo a senha "12345"
Então a mensagem "A senha deve ter pelo menos 6 dígitos." deve ser exibida

Cenário: Não confirmar a senha deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida
E não preencho o campo Confirmar Senha
Então o alerta "Informe a senha" é exibido

Cenário: Email sem "@" deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E uma senha válida
E informo o e-mail "teste.com"
E clico no botão Salvar
Então as mensagens "Falha no cadastro." e "Não foi possível cadastrar o usuário." são exibidas

Cenário: Email sem ".com" deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E uma senha válida
E informo o e-mail "teste@teste"
E clico no botão Salvar
Então as mensagens "Falha no cadastro." e "Não foi possível cadastrar o usuário." são exibidas

Cenário: Não é possível existir dois usuários com o mesmo e-mail
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E uma senha válida
E um e-mail já existente
E clico no botão Salvar
Então as mensagens "Falha no cadastro." e "E-mail já cadastrado. Utilize outro e-mail" são exibidas

Cenário: O usuário deve ser criado como tipo 0 (usuário comum)
Dado que realizei o cadastro de um usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
Então o tipo de usuário deve ser Comum

