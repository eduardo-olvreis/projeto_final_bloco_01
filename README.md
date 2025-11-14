# Projeto final bloco 1 - Generation <br>

O projeto consiste em uma aplicação como se fosse para um administrador da loja de jogos, podendo adicionar, remover, listar todos os jogos, atualizar e buscar jogo pelo ID <br>

As principais funções são:
1 - Cadastrar Jogo: Aqui é aonde o usuário vai adicionar o jogo no array, pedindo nome, preço, descrição, e o tipo do jogo (fisico ou digital) <br>
2 - Listar todos: Ao selecionar a opção mostrará todos os jogos já cadastrados, caso não tenha nenhum, dará erro e voltará ao menu principal <br>
3 - Buscar por ID: É uma pesquisa mais seleta dos jogos adicionados, ao digitar o ID do jogo aparecerá só ele no terminal <br>
4 - Atualizar dados: Semelhante ao cadastrar jogo, aqui vai pedir todas as informações novamente para poder atualizar o jogo no array <br>
5 - Remover: Remove um jogo do array e deixa de aparecer nos itens acima <br>

As classes JogoDigital e JogoFisico são herdadas da Jogo.ts, nas duas é aonde serão passados os parametros para o tipo de cada jogo.