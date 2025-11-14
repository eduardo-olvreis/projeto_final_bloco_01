import { Jogo } from "./Jogo";

export class JogoFisico extends Jogo{

    private _plataforma: string
    private _estoque: number

    constructor(nome: string, preco: number, descricao: string, plataforma: string, estoque: number){
        super(nome,preco,descricao)
        this._plataforma = plataforma
        this._estoque = estoque
    }

    public get plataforma(){
        return this._plataforma
    }
    public set plataforma(plataforma: string){
        this._plataforma = plataforma
    }

    public get estoque(){
        return this._estoque
    }
    public set estoque(estoque: number){
        this._estoque = estoque
    }

    public checarEstoque(): boolean{
        return this._estoque > 0
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Plataforma: ${this._plataforma}`)
        console.log(`Disponível no estoque? ${this.checarEstoque() ? `Sim` : `Não`} (${this._estoque})`)
        console.log("=-=-=-=-=-=-=-=-=-=-=\n")
    }

}