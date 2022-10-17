import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Title from '../Title';



export const ItemListContainer = ({ props }) => {
    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();

        const queryCollection = collection(querydb, 'items');
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }


    }, [categoryId])



    return (

        <div className="counter d-flex img-fluid justify-content-center mx-3 p-3">
            <div>
                <ItemList data={data} />

            </div>

            <div >
                <Title greeting={props} />
            </div>

        </div>
    )
}

export default ItemListContainer;