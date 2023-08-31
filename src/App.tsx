import 'material-symbols'
import './App.css'
import { ProfileCard } from './components/profile-card'
import { AboutMe } from './components/about-me'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Resume } from './components/resume'
import { Work } from './components/work'
import { Contact } from './components/contact'
import { createContext, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import bedtimePhoto from "./assets/images/icons8-bedtime-64.png"
import eveningPhoto from './assets/images/icons8-night-100.png'
import dayPhoto from './assets/images/icons8-sun-144.png'
import clock1 from './assets/images/1.png'
import clock2 from './assets/images/2.png'
import clock3 from './assets/images/3.png'
import clock4 from './assets/images/4.png'
import clock5 from './assets/images/5.png'
import clock6 from './assets/images/6.png'
import clock7 from './assets/images/7.png'
import clock8 from './assets/images/8.png'
import clock9 from './assets/images/9.png'
import clock10 from './assets/images/10.png'
import clock11 from './assets/images/11.png'
import clock12 from './assets/images/12.png'
import { tz } from 'moment-timezone'

export const toastStateContext = createContext<{ createToast: (text: string, duration: number, success: boolean) => void } | null>(null)

const Clock = () => {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [timeIcon, setTimeIcon] = useState<string>("")
  const [clockFaceIndex, setClockFaceIndex] = useState<number>(0)
  const clockFaces = useRef<string[]>([
    clock12, clock1, clock2, clock3, clock4, clock5, clock6, clock7, clock8, clock9, clock10, clock11
  ])

  const updateTime = () => {
    const timeDate = tz('Asia/Dhaka')
    setTime(() => timeDate.format("LT"))
    setDate(() => timeDate.format("ll"))
    if (timeDate.hour() >= 23 || timeDate.hour() < 7) {
      setTimeIcon(() => bedtimePhoto)
    } else if (timeDate.hour() >= 7 && timeDate.hour() < 18) {
      setTimeIcon(() => dayPhoto)
    } else {
      setTimeIcon(() => eveningPhoto)
    }
    setClockFaceIndex(() => {
      const seconds = timeDate.second()
      const index = Math.floor(seconds / 5)
      return index
    })
  }

  useEffect(() => {
    updateTime()

    const clockTimer = setInterval(() => {
      updateTime()
    }, 5000)

    return () => {
      clearInterval(clockTimer)
    }
  }, [])

  return (
    <>
      <div className='ms-auto w-12 h-12 me-2'>
        <img src={timeIcon} alt="" className='w-full h-full' />
      </div>
      <div className='font-poppins me-2 text-right'>
        <p className='text-xl font-medium'>
          {time}
        </p>
        <p>
          {date}
        </p>
      </div>
      <div className='w-12 h-12 me-2'>
        <img src={clockFaces.current[clockFaceIndex]} alt="" className='w-full h-full' />
      </div>
    </>
  )
}

function App() {
  return (
    <div className='py-10 px-10 lg:px-20 md:pt-0 md:pb-10'>
      <ToastContainer />
      <header className='hidden h-20 md:flex items-center'>
        <p className='font-pacifico text-2xl py-8'>Mahfuzur Rahman</p>
        <Clock />
      </header>
      <div className="hidden lg:flex justify-end">
        <div className="flex bg-transparent shadow shadow-slate-300 mb-3 px-8 py-3 rounded-3xl gap-x-4">
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
      <toastStateContext.Provider value={{
        createToast: (text: string, duration: number, success: boolean) => (success ? toast.success<string>(text, {
          position: "top-right",
          autoClose: duration,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }) : toast.error<string>(text, {
          position: "top-right",
          autoClose: duration,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }))
      }}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-5">
          <div className='bg-white px-6 py-6 md:h-auto lg:pb-16 lg:pt-28 rounded-3xl w-full xl:w-1/3 2xl:w-1/4 relative items-center flex flex-col md:flex-row lg:flex-col md:items-stretch lg:items-center gap-5'>
            <ProfileCard />
          </div>
          <div className="w-full xl:w-2/3 2xl:w-3/4 bg-white rounded-3xl ps-20 pe-14 pt-5 pb-8">
            <div className="flex justify-center bg-transparent mb-3 px-8 py-3 rounded-3xl gap-x-4">
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
            <Routes>
              <Route path='/' element={<AboutMe />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </toastStateContext.Provider>
    </div>
  )
}

export default App
