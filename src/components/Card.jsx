import React from 'react'

const Card = () => {
    return (
        <div className='rounded-lg shadow-md bg-white hover:shadow-2xl transition duration-300 p-4'>
            <span className='text-sm px-1 py-0.5 bg-gray-200 text-black capitalize'>Bestseller</span>
            <div className='space-y-0.5'>
                <div className="flex justify-center items-center">
                    <img src="/1.jpg" alt="iphone" className='w-[128px] h-[128px]' />
                </div>
                <h3 className='text-md text-black font-medium capitalize'>iPhone 13 Pro · Unlocked</h3>
                <p className='text-md text-gray-500'>Graphite - 128 GB - Physical SIM + eSIM</p>
                <div className="flex items-center text-black gap-2 font-medium ">
                    <div className="flex">
                        <svg aria-hidden="true" fill="currentColor" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                            </path>
                        </svg>
                        <svg aria-hidden="true" fill="currentColor" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                            </path>
                        </svg>
                        <svg aria-hidden="true" fill="currentColor" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                            </path>
                        </svg>
                        <svg aria-hidden="true" fill="currentColor" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085c-.258 1.082.919 1.937 1.868 1.357l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826">
                            </path>
                        </svg>
                        <svg aria-hidden="true" fill="currentColor" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M13.154 3.65c-.427-1.026-1.881-1.026-2.308 0L8.838 8.478l-5.21.418C2.519 8.984 2.07 10.367 2.914 11.09l3.97 3.4-1.213 5.085a1.231 1.231 0 0 0 .464 1.289l-.013.055.048-.03a1.231 1.231 0 0 0 1.369.043l4.46-2.724 4.462 2.724c.949.58 2.125-.275 1.867-1.357l-1.212-5.084 3.97-3.4c.844-.724.394-2.107-.714-2.196l-5.21-.418-2.008-4.826M12 16.666a1.248 1.248 0 0 1 .652.183l4.078 2.49-1.109-4.648a1.25 1.25 0 0 1 .403-1.24l3.63-3.108-4.765-.382a1.25 1.25 0 0 1-1.054-.766L12 4.782v11.883" clipRule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <span className="text-[0.75rem] leading-[1rem] tracking-[0]">4.4/5</span>
                    <div className='text-[0.85rem] leading-[1rem] tracking-[0]'>(537 reviews)</div>
                </div>
                <div className="space-y-1">
                    <p className="text-[0.75rem] leading-[1rem] tracking-[0] text-gray-500 ">Starting at</p>
                    <p className="text-[0.95rem] leading-[1rem] tracking-[0] text-black font-medium ">$362.99</p>
                    <p className="text-[1rem] leading-[1rem] tracking-[0] text-gray-500 line-through">$899.00 new</p>
                </div>
            </div>
        </div>
    )
}

export default Card