import { Jogo } from "../model/Jogo";

export interface JogoRepository{

    cadastrar(jogos: Jogo): void
    listarTodos(): void
    buscarPorId(id: number): void
    atualizarDados(jogo: Jogo): void
    remover(id: number): void

}