'use client'
import { buscaLista } from "@/model/Produtos"
import { useEffect, useState } from "react"

export default function Carrinho(){

    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        let objeto = localStorage.getItem("carrinho")
        objeto = JSON.parse(objeto)
        
        async function dados(){
            const lista = objeto.map(o => o.id);
            const resposta = await buscaLista(lista)
            setProdutos(resposta.data)
        }
        dados();
    }, [])

    return(
        <div>
            <h1>Carrinho</h1>
            <p>Quantidade de produtos: <strong>0</strong></p>
            <p>Total do Carrinho R$ <strong>0</strong></p>
            <hr/>
            {
                produtos == 0 ? <p>Seu carrinho ainda está vazio...</p> :
                produtos.map(objeto =>
                <div>
                    <p>{objeto.nome}</p>
                    <p>{objeto.preco}</p>
                    <img src={objeto.imagem}/>
                </div> 
                    )
            }

        </div>
    )
}