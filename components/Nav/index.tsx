import {FaBars, FaBell} from 'react-icons/fa'
import SearchBar from '../SearchBar'
import Profile_Display from '../Profile_Display'

export default function index() {
  return (
    <div className='flex items-center w-full px-7 py-3'>
        <div className="flex-[0.05] aspect-square bg-contain bg-center bg-no-repeat" style={{backgroundImage:"url('/img/afit_logo.png')"}}></div>
        <FaBars className='mx-5' style={{fontSize:'calc(1rem + 0.5vw)'}}/>

        <h1 className='font-bold' style={{fontSize:'calc(1rem + 0.5vw)'}}>
            Dashboard
        </h1>

        <SearchBar/>

        <FaBell className='mx-5'/>

        <Profile_Display/>
    </div>
  )
}
