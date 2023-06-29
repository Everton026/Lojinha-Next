'use client'
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function P(){
    useEffect(()=>{
        alert("Página inválida")
        redirect("/")
    }, [])
}