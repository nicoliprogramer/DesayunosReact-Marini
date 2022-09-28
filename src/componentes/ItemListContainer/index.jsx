import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Title from '../Title';



export const ItemListContainer = ({ props }) => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();

        const queryCollection = collection(querydb, 'items');
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }


    }, [categoryId])



    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ItemList productos={productos} />

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Title greeting={props} />
                    </div>
                </div>

            </div>
        </div >

    )
}

export default ItemListContainer;