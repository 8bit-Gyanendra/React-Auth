import React, { useEffect, useState } from 'react'
import { Button, Card, Form, FormControl } from 'react-bootstrap';
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

    return (

        <div>
            <div className='container py-3'>
                <h1 className='text-center'>News Feed</h1>
            </div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            
            <div className="news-cards" >
                {
                    data.map((value: NewsApiInterface, index: number) => {
                        console.log(value);
                        return (

                            <Card style={{ width: '18rem', margin: "30px" }} key={index}  >
                                {/* <Card.Img variant="top" src="{value.urlToImage}"/> */}
                                <img src={value.urlToImage} alt="" className='card-img-top' />
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