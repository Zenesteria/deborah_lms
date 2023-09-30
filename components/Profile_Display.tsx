import {FaUserCircle} from 'react-icons/fa'

interface compProps{

}

export default function Profile_Display({}:compProps) {
  return (
    <div className='flex'>
        <div className="text-center">
            <h3 className='text-[0.7rem] font-bold'>
                AFIT Librarian
            </h3>
            <p className='text-[0.5rem]'>
                Admin
            </p>
        </div>

        <FaUserCircle className='text-[2rem] mx-4'/>
    </div>
  )
}
