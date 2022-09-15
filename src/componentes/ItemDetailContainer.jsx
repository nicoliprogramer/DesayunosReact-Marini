import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'


const items = [
    {
        id: 1,
        title: "Box Premium PROMO",
        description: "Contiene: Taza de cerámica premium, Caja super original, 2 Fotos Polaroid, Globo Metalizado Cumple, Globo Latex Feliz Cumple, Tarta cabsha, Alfajor de maicena, Pastafrola, Jugo de naranja, Bizcochos de grasa, Oblea de chocolate, Bombones, Mermeladas, Chalitas con chía, Chalitas comunes, 9 de oro saladas, Magdalena, Galletas Toddys, Tostadas, Infusiones.",
        category: 'items',
        precio: 223,
    },
    {
        id: 2,
        title: "Desayuno Feliz Cumpleaños",
        description: "Contiene: Taza de Vidrio, Bandeja de madera 25x35cm, Tarta cabsha, Alfajor de maicena, Pastafrola, Jugo de naranja, Bizcochos de grasa, Oblea Bon o Bon, Bombones, Mermeladas, Chalitas con chía, Chalitas comunes, Globo Feliz Cumple(color aleatorio), 9 de oro saladas, Magdalena, Galletas Toddys, Tostadas, Infusiones.",
        category: 'promo',
        precio: 222,
    },
]

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    const filtrarPorId = () => {
        items.some((product) => {
            if (product.id == id) {
                setData(product)
            }
        }
        )
    }

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(filtrarPorId)
        }, 2000)
    })

    useEffect(() => {
        getData
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                console.log("Error");
            })
    }, [detalleId]);

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    );
};

export default ItemDetailContainer;
