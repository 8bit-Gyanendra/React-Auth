import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import NewsApiInterface from '../Interface/NewsApiInterface';

const NewAPI = () => {

    const [data, setData] = useState([])
    useEffect(() => {
      getNews()
    }, [data])
    

    const getNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=7da6e2228bb743e4aea735b1ae40724d")
            .then((response) => {
                // console.log(response);
                setData(response.data.articles)
            })
    }

    const onClick = () => {

    }

    return (
        
        <div>
            <div className='container py-3'>
                <h1 className='text-center'>News Feed</h1>
            </div>
            <div className="news-cards" >
                {
                    data.map((value : NewsApiInterface, index : number ) => {
                        console.log(value);
                        return (
                            
                            <Card style={{ width: '18rem', margin: "30px" }} key={index}  >
                                {/* <Card.Img variant="top" src="{value.urlToImage}"/> */}
                                <img src={value.urlToImage} alt="" className='card-img-top'/>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                               {value.content}
                                
                                    </Card.Text>
                                    <Button variant="primary">Show Detail</Button>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default NewAPI;