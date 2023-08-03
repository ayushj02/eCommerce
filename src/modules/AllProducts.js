import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [products, setProducts] = useState([])

    const specProd = [
        {
            category : 'Mens Clothing',
            link : `men's clothing`
        },
        {
            category : 'Womens Clothing',
            link : `women's clothing`
        },
        {
            category : 'Jewelery',
            link : `jewelery`
        },
        {
            category : 'Electronics',
            link : `electronics`
        }
    ]

    useEffect(() => {
        const fetchProducts = async() => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

  return (
    <>
      <div>
      <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Ecommerce
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Welcome to our online store! We are a dedicated team passionate about providing high-quality products and exceptional shopping experiences to our customers.                        </p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Search Bar
                            </label>
                            <input
                                type="text"
                                id="search-input"
                                name="search-input"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>
                        
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Search
                        </button>
                    </div>
                    <div className="flex lg:w-2/3 content-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        {
                            specProd.map((item) => {
                                return <button onClick={async() => {
                                        const response = await fetch(`https://fakestoreapi.com/products/category/${item.link}`)
                                        const data = await response.json()
                                        setProducts(data)
                                }} className="text-white bg-indigo-400 border-0 mt-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">{item.category}</button>
                            })
                        }
                        
                        <button onClick={async() => {
                            const response = await fetch(`https://fakestoreapi.com/products`)
                            const data = await response.json()
                            setProducts(data)
                    }} className="text-white bg-indigo-400 border-0 mt-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">All</button>
                    </div>
                </div>
            </section>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
        {
            products.filter((val) => {
                if(searchTerm == ""){
                    return val;
                }
                else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val;
                }
            })
            .map((val) => {
                return (
                    <Link to={`/products/${val.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" key={val.id}>
                        <a className="block relative h-48 rounded overflow-hidden">
                          <img
                            alt={val.title}
                            className="object-contain object-center w-full h-full block"
                            src={val.image}
                          />
                        </a>
                        <div className="mt-4">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            {val.category}
                          </h3>
                          <h2 className="text-gray-900 title-font text-lg font-medium">
                            {val.title}
                          </h2>
                          <p className="mt-1 text-md font-semibold">${val.price}</p>
                        </div>
                      </Link>
                )
            })
        }
    </div>
  </div>
</section>

    </div>  
    </>
  )
}

export default AllProducts