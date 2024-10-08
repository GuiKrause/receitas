"use client"
import { useState } from "react";
import Cartao from "../Cartao";

export default function CardList() {

    const [cards, setCards] = useState([
        { id: 1, titulo: "Ovo com arroz e pepino", tempo: 25, serve: 2 },
        { id: 2, titulo: "Ovo mexido", tempo: 20, serve: 2 },
        { id: 3, titulo: "Ovo com macarrão", tempo: 15, serve: 1 },
        { id: 4, titulo: "Pão com ovo", tempo: 10, serve: 1 },
    ])

    return(
        <div className="flex flex-wrap w-full justify-center">
            {cards.map((e) => <Cartao props={e} />)}
        </div>
    );
}