'use client'
import { buscaTodos } from "@/model/Produtos"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
   async function dados(){
   const resposta = await buscaTodos(); 
   setProdutos(resposta.data)
  }
  dados();
   }, [])
  
  return (
    <div>
      <h1>Everton Store</h1>
      <p>Confira nossos produtos:</p>
      {
        produtos == 0 ? <p>Carregando...</p> : 
        produtos.map(P => 
        <Link href={"/P/"+P.id}>
          <div key={P.id}>
            <p>{P.nome}</p>
            <p>{P.preco}</p>
            <img src={P.imagem}/>
          </div>  
        </Link>
        )
      }
    </div>
  )
}
