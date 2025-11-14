export abstract class Jogo {
    
    private _id: number = 0
    private _nome: string
    private _preco: number
    private _descricao: string

    constructor (nome: string, preco: number, descricao: string){
        this._nome = nome
        this._preco = preco
        this._descricao = descricao
    }

    public get id(){
        return this._id
    }
    public set id(id: number){
        this._id = id
    }

    public get nome(){
        return this._nome
    }
    public set nome(nome: string){
        this._nome = nome
    }

    public get preco(){
        return this._preco
    }
    public set preco(preco: number){
        this._preco = preco
    }

    public get descricao(){
        return this._descricao
    }
    public set descricao(descricao: string){
        this._descricao = descricao
    }

    public visualizar(): void{
        console.log("\n=-=-=-=-=-=-=-=-=-=-=")
        console.log("Informacoes do Jogo:")
        console.log("=-=-=-=-=-=-=-=-=-=-=")
        console.log(`Nome: ${this._nome}`)
        console.log(`Preco: ${this._preco}`)
        console.log(`Descricao: ${this._descricao}`)
        console.log(`ID: ${this._id}`)
    }
}