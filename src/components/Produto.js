export default function Produto(props){
    return(
        <div className="border p-4 mt-5 shadow-2xl" key={props.P.id}>
            <p className="text-lg italic">{props.P.nome}</p>
            {
                props.descricao == true ? <p>{props.P.descricao}</p> : ""
            }
            <p className="text-lg font-bold italic">R$ {props.P.preco}</p>
            <img src={props.P.imagem} width={props.largura}/>
        </div>  
    )
}