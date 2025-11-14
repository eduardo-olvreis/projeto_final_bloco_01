import { Jogo } from "../model/Jogo";

export interface JogosRepository{

    cadastrar(jogos: Jogo): void
    listarTodos(): void
    buscarPorId(id: number): void
    atualizarDados(jogo: Jogo): void
    remover(id: number): void

}