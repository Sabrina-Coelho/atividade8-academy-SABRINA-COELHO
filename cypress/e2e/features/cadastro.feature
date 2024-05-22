#language: pt

Funcionalidade: Criar usuário

Cenário: Usuário deve ser cadastrado com sucesso
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida e confirmo a senha
E clico no botão Cadastrar
Então as mensagens "Sucesso" e "Cadastro realizado!" são exibidas

Cenário: Nome em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um e-mail válido
E informo uma senha válida e confirmo a senha
E não preencho o campo Nome
E clico no botão Cadastrar
Então a mensagem "Informe o nome" é exibida

Cenário: Email em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo uma senha válida e confirmo a senha
E não preencho o campo E-mail
E clico no botão Cadastrar
Então a mensagem "Informe o e-mail" é exibida

Cenário: Senha em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E não preencho o campo Senha
E clico no botão Cadastrar
Então a mensagem "Informe a senha" é exibida

Cenário: Senha com menos de 6 dígitos devem dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo a senha "12345" e confirmo
E clico no botão Cadastrar
Então a mensagem "A senha deve ter pelo menos 6 dígitos." é exibida

Cenário: Senha com mais de 12 dígitos devem erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo a senha "1234567891234" e confirmo
E clico no botão Cadastrar
Então a mensagem "A senha deve ter no máximo 12 dígitos." é exibida

Cenário: Não confirmar a senha deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida
E não preencho o campo Confirmar Senha
E clico no botão Cadastrar
Então a mensagem "Informe a senha" é exibida

Cenário: A senha e a confirmação devem ser iguais
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida
E informo uma senha diferente para o campo Confirmar Senha
E clico no botão Cadastrar
Então a mensagem "As senhas devem ser iguais" é exibida

Cenário: Email sem "@" deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo uma senha válida e confirmo a senha
E informo o e-mail "teste.com"
E clico no botão Cadastrar
Então as mensagens "Falha no cadastro." e "Não foi possível cadastrar o usuário." são exibidas

Cenário: Email sem ".com" deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo uma senha válida e confirmo a senha
E informo o e-mail "teste@teste"
E clico no botão Cadastrar
Então as mensagens "Falha no cadastro." e "Não foi possível cadastrar o usuário." são exibidas

Cenário: Não é possível existir dois usuários com o mesmo e-mail
Dado que realizei o cadastro de um usuário
E que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo uma senha válida e confirmo a senha
E informo um e-mail já existente
E clico no botão Cadastrar
Então as mensagens "Falha no cadastro." e "E-mail já cadastrado. Utilize outro e-mail" são exibidas

Cenário: O usuário deve ser criado como tipo 0 (usuário comum)
Dado que realizei o cadastro de um novo usuário
Quando acesso a página Perfil
E clico em Gerenciar Conta
Então o tipo de usuário é Comum

