
import ItemList from "./ItemList"
import { Container } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import Loading from "../Loading";
import {firestore} from '../../firebase'

const ItemListContainer = ({ greeting }) => {


    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {

        const dataBase = firestore  
        const collection = dataBase.collection('products')

        if (params.id){
            const filter = collection.where("category","==",params.id)
            const query = filter.get()
            query.then((result) => {

                const parseResult = []
                result.forEach((document)=>{
                    parseResult.push({...document.data(), id: document.id})
                });
                setData(parseResult)
    
            }).catch((err) => {
                console.log('Datos no encontrados');
            });
        }else {
            const query = collection.get()
            query.then((result) => {

                const parseResult = []
                result.forEach((document)=>{
                    parseResult.push({...document.data(), id: document.id})
                });
                setData(parseResult)
            }).catch((err) => {
                console.log('Datos no encontrados', err);
            });
        }
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
                    </Container>
                }
                </>
}


export default ItemListContainer