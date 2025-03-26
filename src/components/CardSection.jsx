import React from 'react'
import Card from './Card'

const CardSection = () => {
    return (
        <div className='py-16 bg-gray-100'>
            <div className='max-w-[1440px] mx-auto '>
                <h2 className='text-[1.4rem] leading-[2rem] tracking-[0] font-semibold'>
                    You may also like
                </h2>
                <div className="p-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <Card key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection