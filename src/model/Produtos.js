import supabase from "./supabase.js"

export async function buscaTodos(){
    const resposta = await supabase.from("Produtos").select();
    return resposta;
}

export async function busca(id){
    return await supabase.from("Produtos").select().eq("id", id); // equal = 
}

export async function buscaLista(lista_id){
    return await supabase.from("Produtos").select().in("id", lista_id);
}