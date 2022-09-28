import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {

        const querydb = getFirestore();

        const queryDoc = doc(querydb, 'items', 'nkOwqiliR3jIKMJNmBOM');
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [id])

    return (
        <>
            <ItemDetail data={data} />
        </>
    );
}

export default ItemDetailContainer;