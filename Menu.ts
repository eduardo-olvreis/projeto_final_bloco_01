import readline = require("readline-sync")

export function main(){
    let opcao: number

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
            console.log("\nPrograma Encerrado!\n")
            break
        }

        switch(opcao){
            case 1:
                console.log("Cadastrar Jogo")
                keyPress()
                break
            case 2:
                console.log("Listar todos os Jogos")
                keyPress()
                break
            case 3:
                console.log("Buscar Jogo por ID")
                keyPress()
                break
            case 4:
                console.log("Atualizar dados do Jogo")
                keyPress()
                break
            case 5:
                console.log("Remover Jogo do catálogo")
                keyPress()
                break
            default:
                console.log("Opcao inválida!")
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
