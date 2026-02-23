import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Product = () => {
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    const [category, setCategory] = useState()
    const [products, setProducts] = useState([])
    const [image, setImage] = useState()
    function addProduct() {
        console.log(title)
        console.log(desc)
        console.log(price)
        console.log(stock)
        console.log(category)
        console.log(image)
        axios.post("http://localhost:8080/createProduct", {
            title,
            desc,
            price,
            stock,
            category,
            image
        })
    }
    async function getAllProducts() {
        const response = await axios.get("http://localhost:8080/getAllProducts")
        setProducts(response.data.data)
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    console.log(products);

    return (
        <div>


            <div>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter your product name' />
                <input onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Enter your product description' />
                <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Enter your product price' />
                <input onChange={(e) => setStock(e.target.value)} type="text" placeholder='Enter your product stock' />
                <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Enter your product category' />
                <input onChange={(e) => setImage(e.target.value)} type="text" placeholder='Enter your product image url' />
                <button onClick={addProduct}>Add Product</button>
            </div>
            {products.map((item) => {
                return (
                    <div key={item._id}>
                        <h1>{item.title}</h1>
                        <p>{item.stock}</p>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Product