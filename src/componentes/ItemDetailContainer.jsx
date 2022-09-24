import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import items from "../productosMock";



const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    const filtrarPorId = () => {
        items.some((item) => {
            if (item.id == id) {
                setData(item)
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
    }, [id]);

    return (
        <>
            <ItemDetail data={data} />
        </>
    );
};

export default ItemDetailContainer;
