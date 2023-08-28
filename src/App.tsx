import 'material-symbols'
import './App.css'
import { ProfileCard } from './components/profile-card'
import { AboutMe } from './components/about-me'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import { Resume } from './components/resume'
import { Work } from './components/work'
import { Contact } from './components/contact'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

enum ToastState {
  SHOW, HIDDEN
}

export const toastStateContext = createContext<{ createToast: (text: string) => void } | null>(null)

function App() {
  const [toastText, setToastText] = useState<string>("")
  const [toastState, setToastState] = useState<ToastState>(ToastState.HIDDEN)
  const toastQueue = useRef<Array<{ text: string, duration: number }>>([])
  const toastProcess = useRef<{ running: boolean }>({ running: false })



  return (
    <div className='px-20 pb-10 relative'>
      <button onClick={e => {
        e.preventDefault()
        createToast("test", 2000)
      }}>Test</button>
      <div className={`absolute bg-green-500 p-4 bg-opacity-50 rounded-md top-5 ${toastState == ToastState.SHOW ? 'right-5' : '-right-full'} transition-all`}>
        <p>{toastText}</p>
      </div>
      <header>
        <p className='font-pacifico text-2xl py-8'>Mahfuzur Rahman</p>
      </header>
      <div className="flex justify-end">
        <div className="flex bg-transparent shadow shadow-slate-300 mb-3 px-8 py-3 rounded-2xl gap-x-4">
          <NavLink to="/" className={({ isActive, isPending }) => {
            return isPending ? "link pending" : isActive ? "link active" : "link inactive"
          }}>
            <div className="flex flex-col items-center justify-center w-20 h-20">
              <span className="material-symbols-rounded icon">home</span>Home
            </div>
          </NavLink>
          <NavLink to="/resume" className={({ isActive, isPending }) => {
            return isPending ? "link pending" : isActive ? "link active" : "link inactive"
          }}>
            <div className="flex flex-col items-center justify-center w-20 h-20">
              <span className="material-symbols-rounded icon">article</span>Resume
            </div>
          </NavLink>
          <NavLink to="/work" className={({ isActive, isPending }) => {
            return isPending ? "link pending" : isActive ? "link active" : "link inactive"
          }}>
            <div className="flex flex-col items-center justify-center w-20 h-20">
              <span className="material-symbols-rounded icon">work</span>Work
            </div>
          </NavLink>
          <NavLink to="/contact" className={({ isActive, isPending }) => {
            return isPending ? "link pending" : isActive ? "link active" : "link inactive"
          }}>
            <div className="flex flex-col items-center justify-center w-20 h-20">
              <span className="material-symbols-rounded icon">phone_in_talk</span>Contact
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex">
        <div className='bg-white px-6 pb-16 pt-28 rounded-2xl w-1/4 me-5'>
          <ProfileCard />
        </div>
        <div className="w-3/4 bg-white rounded-2xl ps-20 pe-14 pt-5 pb-8">
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div >
    </div>
  )
}

export default App
