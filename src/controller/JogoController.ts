import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";

export class JogoController implements JogoRepository {
    
    private listaJogos: Array<Jogo> = new Array <Jogo>()
    ultimoID: number = 0
    
    cadastrar(jogos: Jogo): void {
        let novoID = this.gerarID()
        jogos.id = novoID
        this.listaJogos.push(jogos)
        console.log(`\nO Jogo ${jogos.nome} (ID: ${novoID}) foi cadastrado com sucesso!`)
    }
    listarTodos(): void {
        if(this.listaJogos.length === 0){
            throw new Error(`\nNenhum Jogo encontrado!`)
        }
        for(let jogo of this.listaJogos){
            jogo.visualizar()
        }
    }
    buscarPorId(id: number): void {
        let posicao = this.buscarPosicaoPorId(id)
        if(posicao !== -1){
            let jogoBuscado = this.listaJogos[posicao]
            if(jogoBuscado){
                jogoBuscado.visualizar()
            }
        } else{
            throw new Error(`\nO Jogo de ID ${id} não foi encontrado!`)
        }
    }
    atualizarDados(jogo: Jogo): void {
        let posicao = this.buscarPosicaoPorId(jogo.id)
        if (posicao === -1){
            throw new Error(`\nO Jogo de ID ${jogo.id} não foi encontrado!`)
        } else{
            this.listaJogos[posicao] = jogo
            console.log(`\nO Jogo ID ${jogo.id} foi atualizado com sucesso!`)
        }
    }
    remover(id: number): void {
        let posicao = this.buscarPosicaoPorId(id)
        if(posicao === -1){
            throw new Error(`\nO Jogo ID ${id} não foi encontrado!`)
        } else {
            this.listaJogos.splice(posicao, 1)
            console.log(`\nO Jogo ID ${id} foi removido com sucesso!`)
        }
    }

    private gerarID(): number {
        return ++this.ultimoID
    }

    private buscarPosicaoPorId(id: number): number{
        for(let i = 0; i < this.listaJogos.length; i++){
            const jogoDaLista = this.listaJogos[i]
            if(jogoDaLista && jogoDaLista.id === id){
                return i
            }
        }
        return -1
    }

}