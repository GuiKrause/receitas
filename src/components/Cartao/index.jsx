import { Clock, Soup } from "lucide-react";
import Image from "next/image";

export default function Cartao() {
    return(
        <div className="m-4 rounded border-2 border-solid border-rose-400">
            <Image className="bg-cover bg-center" src="/assets/images/ovo_pepino.png" width={387} height={297} alt="Prato de ovo com pepino"/>
            <h2 className="p-2 bg-rose-300 text-gray-800">
                Ovo com arroz e pepino
            </h2>
            <div className="p-2 text-xs flex items-center gap-2">
                <Clock />
                25 minutos
            </div>
            <div className="p-2 text-xs flex items-center gap-2">
                <Soup />
                serve 2 pessoas
            </div>
        </div>
    ) 
}