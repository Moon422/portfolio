import React, { useContext, useEffect } from 'react'
import { toastStateContext } from '../App'
import { addMessage } from '../firebase/firebase'
import { Message } from '../models'

export const Contact: React.FC = () => {
    const toastContext = useContext(toastStateContext)

    useEffect(() => {
        document.title = `Contact Me | Mahfuzur Rahman`
    }, [])

    return (
        <>
            <div className='flex items-center mb-4'>
                <h1 className='uppercase text-4xl font-poppins font-medium text-0B0909 me-8'>Contact</h1>
                <div className='w-1/3 rounded-full h-1 bg-gradient-to-r from-FF9C1B to-EC1B09'></div>
            </div>
            <div className="grid xl:grid-cols-2 gap-8 mb-8">
                <div className="w-full h-56 p-6 rounded-3xl bg-FFEED9">
                    <p className='font-poppins font-medium text-xl pt-3 pb-2 flex items-center'>
                        <span className='me-4 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                            <span className="material-symbols-rounded text-3xl">phone_in_talk</span>
                        </span>
                        Phone:
                    </p>
                    <div className='ps-4 flex items-center hover:cursor-pointer' onClick={e => {
                        navigator.clipboard.writeText(e.currentTarget.innerText)
                        toastContext?.createToast("Phone number copied to clipboard", 3000, true)
                    }}>
                        <p>+8801748689039</p>
                        <div className='w-12 h-12 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                            <span className="material-symbols-outlined ms-2">
                                content_copy
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-56 p-6 rounded-3xl bg-F2F7FC gap-x-2">
                    <p className='font-poppins font-medium text-xl pt-3 pb-2 flex items-center'>
                        <span className='me-4 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                            <span className="material-symbols-rounded text-3xl">mail</span>
                        </span>
                        Email:
                    </p>
                    <div className='ps-4 flex items-center hover:cursor-pointer' onClick={e => {
                        navigator.clipboard.writeText(e.currentTarget.innerText)
                        toastContext?.createToast("Email address copied to clipboard", 3000, true)
                    }}>
                        <p>mahfuzurrm98@gmail.com</p>
                        <div className='w-12 h-12 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                            <span className="material-symbols-outlined ms-2">
                                content_copy
                            </span>
                        </div>
                    </div>
                    <div className='ps-4 flex items-center hover:cursor-pointer' onClick={e => {
                        navigator.clipboard.writeText(e.currentTarget.innerText)
                        toastContext?.createToast("Email address copied to clipboard", 3000, true)
                    }}>
                        <p>mahfuzur.rm789@gmail.com</p>
                        <div className='w-12 h-12 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                            <span className="material-symbols-outlined ms-2">
                                content_copy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-F2F7FC p-7 rounded-3xl">
                <p className='font-raleway mb-4'>
                    I am always open to discussing <strong>new projects</strong>, <strong>opportunities in tech world</strong>, <strong>partnerships</strong> and more so <strong>mentorship</strong>.
                </p>
                <form onSubmit={async (e) => {
                    e.preventDefault()

                    console.log("clicked")

                    const formData = new FormData(e.currentTarget)

                    const message: Message = {
                        name: formData.get("name")!.toString(),
                        email: formData.get("email")!.toString(),
                        message: formData.get("message")!.toString(),
                        createdAt: new Date()
                    }

                    const obj = await addMessage(message)

                    if (obj) {
                        toastContext?.createToast("Message has been sent", 2000, true)
                    } else {
                        toastContext?.createToast("There was some error sending the message", 2000, false)
                    }
                }}>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" name="name" id="name" className='mb-3 w-full bg-transparent border-b-2 p-2 border-b-gray-500 focus:outline-none focus:border-b-blue-500' /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" name="email" id="email" className='mb-3 w-full bg-transparent border-b-2 p-2 border-b-gray-500 focus:outline-none focus:border-b-blue-500' /><br />
                    <label htmlFor="message">Message:</label><br />
                    <input type="text" name="message" id="message" className='mb-4 w-full bg-transparent border-b-2 p-2 border-b-gray-500 focus:outline-none focus:border-b-blue-500' /><br />
                    <button type="submit" className='w-40 h-12 p-1 rounded-3xl bg-gradient-to-br from-FF9C1B to-EC1B09'>
                        <span className='bg-F2F7FC rounded-3xl w-full h-full flex justify-center items-center'>
                            Submit
                        </span>
                    </button>
                </form>
            </div>
        </>
    )
}
