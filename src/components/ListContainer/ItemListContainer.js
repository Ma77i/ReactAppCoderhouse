
import ItemList from "./ItemList"
import { Container } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { useParams } from "react-router";
//import { POKES } from "../../data"
import Loading from "../Loading";
import {firestore} from '../../firebase'

const ItemListContainer = ({ greeting }) => {


    const [data, setData] = useState([])

    //const [load, setLoad] = useState(true)
    const params = useParams()
    //console.log(load);

    useEffect(() => {
/*
        const promise = new Promise((resolve, reject) => {

            setLoad(true)

            setTimeout(() => {
                console.log("setTimeOut");
                if (params.id) {
                    resolve(POKES.filter(prod => prod.category === params.id))
                } else {
                    resolve(POKES)
                };
                reject("Ocurrió un error al traer los productos")

            }, 2000)
        })

        promise.then((resolve) => {
            console.log("Cargado con exito");
            setData(resolve)
        }).then(setLoad(false))
        */
/*
        let collection = firestore().collection('products')

        if (typeof id !== 'undefined') {
            collection = collection.where('category', '==', id)
        }

        collection.limit(20)
            .get()
            .then(querySnapshot => {
                setData(querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }))
            }).catch(() => setData([]))

*/
    const dataBase = firestore  

    const collection = dataBase.collection('products')

    const query = collection.get()
        query.then((result) => {

            const parseResult = []
            result.forEach((document)=>{
                const id = document.id
                const data = document.data()
                const data_final = {id, ...data}

                console.log(data_final);
                parseResult.push(data_final)
            });
            setData(parseResult)

        }).catch((err) => {
            console.log('Datos no encontrados');
        });

        

    }, [params]);
    



        return <>
                {data.length 
                ?
                    <Container>
                        <h1>{greeting}</h1>
                        <ItemList items={data} />
                    </Container>
                :
                    <Container>
                        <h1>{greeting}</h1>
                        <Loading />
                    </Container>}
                </>
}


export default ItemListContainer