import React from 'react'

export const Contact: React.FC = () => {
    return (
        <>
            <div className='flex items-center mb-4'>
                <h1 className='uppercase text-4xl font-poppins font-medium text-0B0909 me-8'>Contact</h1>
                <div className='w-1/3 rounded-full h-1 bg-gradient-to-r from-FF9C1B to-EC1B09'></div>
            </div>
            <div className="flex gap-x-16">
                <div className="w-1/2 flex h-56 p-6 rounded-xl bg-FFEED9 gap-x-2">
                    <div className='w-12 h-12 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                        <span className="material-symbols-rounded text-3xl">phone_in_talk</span>
                    </div>
                    <div>
                        <p className='font-poppins font-medium text-xl pt-3 pb-2' >Phone:</p>
                        <p className='hover:cursor-pointer' onClick={e => navigator.clipboard.writeText(e.currentTarget.innerText)}>+8801748689039</p>
                    </div>
                </div>
                <div className="w-1/2 flex h-56 p-6 rounded-xl bg-F2F7FC gap-x-2">
                    <div className='w-12 h-12 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                        <span className="material-symbols-rounded text-3xl">mail</span>
                    </div>
                    <div>
                        <p className='font-poppins font-medium text-xl pt-3 pb-2' >Email:</p>
                        <p className='hover:cursor-pointer' onClick={e => navigator.clipboard.writeText(e.currentTarget.innerText)}>mahfuzurrm98@gmail.com</p>
                        <p className='hover:cursor-pointer' onClick={e => navigator.clipboard.writeText(e.currentTarget.innerText)}>mahfuzur.rm789@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
