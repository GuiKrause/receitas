"use client"
import { useEffect, useState } from "react";
import Cartao from "../Cartao";

export default function CardList() {

    const [cards, setCards] = useState([
        { id: 1, titulo: "Ovo com arroz e pepino", tempo: 25, serve: 2 },
        { id: 2, titulo: "Ovo mexido", tempo: 20, serve: 2 },
        { id: 3, titulo: "Ovo com macarrão", tempo: 15, serve: 1 },
        { id: 4, titulo: "Pão com ovo", tempo: 10, serve: 1 },
    ])

    useEffect(() => {

        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN; 

        async function getData() {
            fetch('', {
                method: 'GET',
                headers: {
                    'Autorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => setCards(response.data))
            .catch(error => console.log(error));
        }
        getData();
    }, [])

    return(
        <div className="flex flex-wrap w-full justify-center">
            {cards.map((e) => <Cartao key={e.id} props={e} />)}
        </div>
    );
}