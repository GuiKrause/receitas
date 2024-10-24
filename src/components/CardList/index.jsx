"use client"
import { useEffect, useState } from "react";
import Cartao from "../Cartao";

export default function CardList() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN; 

        async function getData() {
            await fetch('http://localhost:1337/api/receitas?populate=*', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json(response))
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