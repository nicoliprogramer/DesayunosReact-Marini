import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";


const items =
{
    id: 1,
    title: "Box Premium PROMO",
    description: "Contiene: Taza de cerámica premium, Caja super original, 2 Fotos Polaroid, Globo Metalizado Cumple, Globo Latex Feliz Cumple, Tarta cabsha, Alfajor de maicena, Pastafrola, Jugo de naranja, Bizcochos de grasa, Oblea de chocolate, Bombones, Mermeladas, Chalitas con chía, Chalitas comunes, 9 de oro saladas, Magdalena, Galletas Toddys, Tostadas, Infusiones.",
}


const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 200);
        });

        getData.then(res => setData(res))

    }, []);

    return (
        <div>
            <ItemDetail data={data} />

        </div>
    );
};

export default ItemDetailContainer;
