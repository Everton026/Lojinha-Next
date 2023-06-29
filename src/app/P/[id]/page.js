'use client'
import { busca } from "@/model/Produtos"
import { useEffect, useState } from "react"

export default function  PID(props){

    const id = props.params.id

    const [quantidade, setQuantidade] = useState(1);
    const [produto, setProduto] = useState(null);
    
    function addCarrinho(){
        let carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse(carrinho);
        
        let objeto = {id: id, quantidade: quantidade}
        
        carrinho.push(objeto);
        carrinho = JSON.stringify(carrinho)
        //objeto = JSON.stringify(objeto)

        localStorage.setItem("carrinho", carrinho)
    }

    useEffect(()=>{
        async function data(){
            const resposta = await busca(id);
            if(resposta.status == 200){
                setProduto(resposta.data[0])
            }
        }
        data();
    }, [])

    return(
        <div>
            {
                produto == null ? <p>Produto não encontrado</p> : 
                <div>
                    <h1>{produto.nome}</h1>
                    <p>{produto.descricao}</p>
                    <p>R$ {produto.preco}</p>
                    <img src={produto.imagem}/>

                    <label>
                        Quantidade:
                        <input type="number" onChange={(e)=> setQuantidade(e.target.value)}/>
                    </label>
                    <button onClick={()=> addCarrinho()}>Adiconar ao Carrinho</button>
                </div>    
            }
        </div>
    )
}