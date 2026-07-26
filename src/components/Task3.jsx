import React, { useState } from 'react'

export default function Task3() {

    const products = [
        { id: 1, name: "phone", price: 10.000 },
        { id: 2, name: "laptop", price: 40.000 },
        { id: 3, name: "headphones", price: 300 },
        { id: 4, name: "keyboard", price: 160 },
        { id: 5, name: "mouse", price: 50 },
        { id: 6, name: "monitor", price: 2000 },
        { id: 7, name: "printer", price: 8000 },
        { id: 8, name: "tablet", price: 20.000 },
        { id: 9, name: "camera", price: 15000 }
    ]

    const [showList, setShowList] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState(null)

    return (
        <>
            <div className='relative h-screen w-screen'>
                <img src="./assets/images/computer.jpg" className='w-screen h-screen z-0 opacity-90' />
                <div className='flex justify-center flex-col gap-20 items-center h-dvh z-10 absolute inset-0'>
                    <h1 className='text-5xl text-[#dad0fd]'>Product List</h1>
                    <button onClick={() => setShowList(!showList)}
                        className=' bg-[#2e2e49] text-5xl text-[#dbd4ef] border-4 rounded-3xl p-5'>
                        {showList ? "Hide Products" : "Show Products"}
                    </button>

                    {showList && !selectedProducts && (
                        <ul className='flex justify-center gap-5 p-7 '>
                            {products.map((products) => (
                                <li key={products.id} className='flex flex-col gap-5 items-center justify-center bg-[#2e2e49] rounded-3xl  text-[#dbd4ef] p-5 text-xl'>
                                    {products.name}
                                    <button onClick={() => setSelectedProducts(products)} className='flex justify-center bg-[#2e2e49] p-5 text-xl text-[#dbd4ef] border-4 rounded-3xl'>
                                        Show Details
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {selectedProducts && (
                        <div className='flex flex-col gap-5 text-[#dbd4ef] rounded-3xl bg-[#2e2e49] p-5 text-xl '>
                            <h2>Details for: {selectedProducts.name}</h2>
                            <p>Price: ${selectedProducts.price}</p>
                            <button onClick={() => setSelectedProducts(null)} className='flex flex-col gap-3 p-5 text-[#dbd4ef] border-4 bg-[#2e2e49] rounded-3xl text-xl'>Back to List</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
