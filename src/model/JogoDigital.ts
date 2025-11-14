import { Jogo } from "./Jogo";

export class JogoDigital extends Jogo{

    private _chaveAtivacao: number

    constructor(id: number, nome: string, preco: number, descricao: string, chaveAtivacao: number){
        super(id,nome,preco,descricao)
        this._chaveAtivacao = chaveAtivacao
    }

    public get chaveAtivacao(){
        return this._chaveAtivacao
    }
    public set chaveAtivacao(chaveAtivacao: number){
        this._chaveAtivacao = chaveAtivacao
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Chave de ativacao: ${this._chaveAtivacao}`)
        console.log("=-=-=-=-=-=-=-=-=-=-=\n")
    }

}