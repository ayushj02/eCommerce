import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const carts = JSON.parse(localStorage.getItem('cart')) || []
    const [cartTotal, setCartTotal] = useState(0)
    console.log(carts)

    useEffect(() => {
        const total = carts.reduce((acc,item) => {
            return acc + (item.price * item.quantity) 
        }, 0)
        setCartTotal(total);
        }, [])


    return (
        <>
            <section>
                <h1 className="sr-only">Checkout</h1>
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                            <div className="flex items-center gap-4">
                                <span className="h-10 w-10 rounded-full bg-blue-700" />
                                <h2 className="font-medium text-gray-900">Billing</h2>
                            </div>
                            <div>
                                <p className="text-2xl font-medium tracking-tight text-gray-900">
                                    ${(cartTotal + 10).toFixed(2)}
                                </p>
                                <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
                            </div>
                            <div>
                                <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-100">
                                    
                                    {
                                        carts.length > 0 ?
                                        carts.map((item) => {     
                                            return <li className="flex items-center gap-4 py-4">
                                                
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="h-16 w-16 rounded object-contain"
                                                />
                                                <div>
                                                    <h3 className="text-sm text-gray-900">{item.title}</h3>
                                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                        <div>
                                                            <dt className="inline">Category: </dt>
                                                            <dd className="inline">{item.category}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="inline">Quantity: </dt>
                                                            <dd className="inline">{item.quantity}</dd>
                                                        </div>
                                                        
                                                    </dl>
                                                </div>
                                            </li> 
                                        }) : <div>
                                            Your Cart is Empty <br></br>
                                            <Link to={'/'}>
                                                <button className='mt-2 rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg'>
                                                    Add Items
                                                </button>
                                            </Link>
                                        </div>
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-12 md:py-24">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label
                                        htmlFor="FirstName"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        className="mt-1 h-7 w-full rounded-md border border-gray-600 "
                                    />
                                </div>
                                <div className="col-span-3">
                                    <label
                                        htmlFor="LastName"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="LastName"
                                        className="mt-1 w-full h-7 rounded-md border border-gray-600 "
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label
                                        htmlFor="Email"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        className="mt-1 w-full h-7 rounded-md border border-gray-600 "
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label
                                        htmlFor="Phone"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="Phone"
                                        className="mt-1 w-full h-7 rounded-md border border-gray-600"
                                    />
                                </div>
                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Card Details
                                    </legend>
                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label htmlFor="CardNumber" className="sr-only">
                                                {" "}
                                                Card Number{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="CardNumber"
                                                placeholder="Card Number"
                                                className="relative mt-1 p-1 w-full rounded-t-md border border-gray-600 focus:z-10 "
                                            />
                                        </div>
                                        <div className="flex">
                                            <div className="flex-1">
                                                <label htmlFor="CardExpiry" className="sr-only">
                                                    {" "}
                                                    Card Expiry{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="CardExpiry"
                                                    placeholder="Expiry Date"
                                                    className="relative w-full p-1 rounded-es-md border border-gray-600 focus:z-10"
                                                />
                                            </div>
                                            <div className="-ms-px flex-1">
                                                <label htmlFor="CardCVC" className="sr-only">
                                                    {" "}
                                                    Card CVC{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="CardCVC"
                                                    placeholder="CVC"
                                                    className="relative w-full p-1 rounded-ee-md border border-gray-600 focus:z-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="col-span-6">
                                    <legend className="block text-sm p-2 font-medium text-gray-700">
                                        Billing Address
                                    </legend>
                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label htmlFor="Country" className="sr-only">
                                                Country
                                            </label>
                                            <select
                                                id="Country"
                                                className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                            >
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="sr-only" htmlFor="PostalCode">
                                                {" "}
                                                ZIP/Post Code{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="PostalCode"
                                                placeholder="ZIP/Post Code"
                                                className="relative w-full p-1 rounded-b-md border border-gray-600 focus:z-10"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="col-span-6">
                                    <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout