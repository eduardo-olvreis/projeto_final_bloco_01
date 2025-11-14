import readline = require("readline-sync")
import { colors } from "./src/util/Color"
import { Jogo } from "./src/model/Jogo"
import { JogoDigital } from "./src/model/JogoDigital"
import { JogoFisico } from "./src/model/JogoFisico"
import { JogoController } from "./src/controller/JogoController"

export function main(){

    let jogos: JogoController = new JogoController()

    let opcao, tipo, id, preco, chaveAtivacao, estoque: number
    let nome, descricao, plataforma: string
    const tipoJogo = ["Digital", "Fisico"]

    while(true){

        console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        console.log("            LOJA DE JOGOS              ")
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
        console.log("     1 - CADASTRAR JOGO            ")
        console.log("     2 - LISTAR TODOS OS JOGOS     ")
        console.log("     3 - BUSCAR JOGO POR ID        ")
        console.log("     4 - ATUALIZAR DADOS DO JOGO   ")
        console.log("     5 - REMOVER JOGO DO CATÁLOGO  ")
        console.log("     0 - SAIR                      ")
        console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")


        opcao = readline.questionInt("\nSelecione uma opcao: ")

        if(opcao === 0){
            console.log(colors.fg.whitestrong,"\nPrograma Encerrado!\n", colors.reset)
            break
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong, "\nCadastrar Jogo\n", colors.reset)

                console.log("Digite o nome do Jogo: ")
                nome = readline.question("")

                console.log("\nDigite o preco do Jogo: ")
                preco = readline.questionFloat("")

                console.log("\nDigite a descricao do Jogo: ")
                descricao = readline.question("")

                console.log("\nSelecione o tipo do Jogo: ")
                tipo = readline.keyInSelect(tipoJogo, "", {cancel: false}) +1

                switch(tipo){
                    case 1:
                        while(true){
                            console.log("\nDigite a Chave de Ativacao do Jogo Digital (5 caracteres numericos): ")
                            chaveAtivacao = readline.questionInt("")
                            if(chaveAtivacao >= 10000 && chaveAtivacao <= 99999){
                                console.log("\nChave de Ativacao adicionada com sucesso!")
                                break
                            } else{
                                console.log(colors.fg.red,"\nChave de Ativacao invalida! Favor digitar uma chave com 5 caracteres numericos", colors.reset)
                            }
                        }
                        jogos.cadastrar(new JogoDigital(nome, preco, descricao, chaveAtivacao))
                        break
                    
                    case 2:
                        console.log("\nDigite a Plataforma do Jogo: ")
                        plataforma = readline.question("")

                        while(true){
                            console.log("\nDigite a quantidade em estoque: ")
                            estoque = readline.questionInt("")
                            if(estoque >= 0){
                                break
                            } else{
                                console.log(colors.fg.red, "Quantidade de estoque inválida! Favor inserir uma quantidade igual ou maior que 0!",colors.reset)
                            }
                        }
                        jogos.cadastrar(new JogoFisico(nome, preco, descricao, plataforma, estoque))
                        break     
                }

                keyPress()
                break
            case 2:
                console.log(colors.fg.whitestrong,"\nListar todos os Jogos\n", colors.reset)

                try{
                    jogos.listarTodos()
                } catch (error: any){
                    console.log(colors.fg.red, error.message, colors.reset)
                }

                keyPress()
                break
            case 3:
                console.log(colors.fg.whitestrong,"\nBuscar Jogo por ID\n", colors.reset)

                console.log("\nDigite o ID: ")
                id = readline.questionInt("")

                try{
                    jogos.buscarPorId(id)
                } catch (error: any){
                    console.log(colors.fg.red, error.message, colors.reset)
                }

                keyPress()
                break
            case 4:
                console.log(colors.fg.whitestrong,"\nAtualizar dados do Jogo\m", colors.reset)

                console.log("Digite o ID do Jogo que você quer atualizar: ")
                id = readline.questionInt("")

                try{
                    console.log("\nDados atuais: ")
                    jogos.buscarPorId(id)

                    console.log("\nDigite os novos dados: ")

                    console.log("\nDigite o novo nome do jogo: ")
                    nome = readline.question("")

                    console.log("\nDigite o novo preco do jogo: ")
                    preco = readline.questionFloat("")

                    console.log("\nDigite a nova descricao do jogo: ")
                    descricao = readline.question("")

                    console.log("\nSelecione o novo tipo do Jogo: ")
                    tipo = readline.keyInSelect(tipoJogo, "", {cancel: false}) +1

                    switch(tipo){
                        case 1:
                            while(true){
                                console.log("\nDigite a Chave de Ativacao do Jogo Digital (5 caracteres numericos): ")
                                chaveAtivacao = readline.questionInt("")
                                if(chaveAtivacao >= 10000 && chaveAtivacao <= 99999){
                                    console.log("\nChave de Ativacao adicionada com sucesso!")
                                    break
                                } else{
                                    console.log(colors.fg.red,"\nChave de Ativacao invalida! Favor digitar uma chave com 5 caracteres numericos", colors.reset)
                                }
                            }
                            let jogoAtualizadoDigital = new JogoDigital(nome, preco, descricao, chaveAtivacao)
                            jogoAtualizadoDigital.id = id
                            jogos.atualizarDados(jogoAtualizadoDigital)
                            break

                        case 2:
                            console.log("\nDigite a nova plataforma: ")
                            plataforma = readline.question("")

                            console.log("\nDigite a nova quantidade em estoque: ")
                            estoque = readline.questionInt("")

                            let jogoAtualizadoFisico = new JogoFisico(nome, preco, descricao, plataforma, estoque)
                            jogoAtualizadoFisico.id = id
                            jogos.atualizarDados(jogoAtualizadoFisico)
                            break
                    }
                } catch (error: any){
                    console.log(colors.fg.red, error.message, colors.reset)
                }

                keyPress()
                break
            case 5:
                console.log(colors.fg.whitestrong,"\nRemover Jogo do catálogo\n", colors.reset)

                console.log("\nDigite o ID do jogo: ")
                id =readline.questionInt("")

                try{
                    jogos.remover(id)
                } catch (error: any){
                    console.log(colors.fg.red, error.message, colors.reset)
                }

                keyPress()
                break
            default:
                console.log(colors.fg.red,"\nOpcao inválida!", colors.reset)
                keyPress()
                break
        }
    }
}

function keyPress(): void{
    console.log("")
    console.log("\nPressione enter para continuar")
    readline.prompt()
}

main()
