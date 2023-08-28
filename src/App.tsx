import 'material-symbols'
import './App.css'
import { ProfileCard } from './components/profile-card'
import { AboutMe } from './components/about-me'

function App() {


  return (
    <div className='px-20'>
      <div className="flex justify-end">
        <div className="bg-transparent shadow mb-3 px-8 py-3 rounded-2xl">

        </div>
      </div>
      <div className="flex">
        <div className='bg-white px-6 pb-16 pt-28 rounded-2xl w-1/4 me-5'>
          <ProfileCard />
        </div>
        <div className="w-3/4 bg-white rounded-2xl ps-20 pe-14 pt-5 pb-8">
          <AboutMe />
        </div>
      </div >
    </div>
  )
}

export default App
