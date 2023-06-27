import Link from "next/link"

export default function Login(){
    return(
        <div>
            <h1>Página de Login</h1>
            <p>Não tem um Cadastro ainda? <Link href="/Cadastro">Clique aqui</Link>.</p>
            <form>
                <input placeholder="Digite seu email"/>
                <input placeholder="Digite sua senha"/>
                <button>Entrar</button>
            </form>
        </div>
    )
}