"use client"

import Cabecalho from "@/components/Cabecalho";
import { useState, useEffect } from "react";

export default function ReceitaPage({ params }) {

    const [receita, setReceita] = useState({})

    useEffect(() => {
        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN; 
        async function getData() {
            await fetch(`http://localhost:1337/api/receitas/${params.slug}?populate=*`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json(response.data))
            .then(response => setReceita(response.data))
            .catch(error => console.log(error));
        }
        getData();
    }, [params])

    return(
        <>
            <Cabecalho />
            <div className="w-[1400px] m-auto">
                <h2 className="text-2xl pt-2 pb-2">{receita.titulo}</h2>
                <p>Preparo: {receita.porcoes}</p>
                <p>Serve: {receita.preparo}</p>
            </div>
        </>
    )
}