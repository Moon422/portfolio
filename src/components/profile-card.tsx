import facebookIcon from "../assets/images/facebook.svg"
import linkedinIcon from "../assets/images/linkedin.svg"
import youtubeIcon from "../assets/images/youtube.svg"
import githubIcon from "../assets/images/github.svg"

export const ProfileCard: React.FC = () => {
    return (
        <>
            <h2 className='font-poppins text-center font-bold text-3xl text-0B0909 mb-4'>Mahfuzur Rahman</h2>
            <h5 className='font-raleway text-center font-medium text-0B0909 opacity-50 mb-3'>Fullstack Developer</h5>
            <div className="flex justify-center mb-5 gap-2">
                <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                    <img src={facebookIcon} alt="facebook icon" width="60%" height="60%" />
                </div>
                <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                    <img src={linkedinIcon} alt="facebook icon" width="60%" height="60%" />
                </div>
                <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                    <img src={youtubeIcon} alt="facebook icon" width="60%" height="60%" />
                </div>
                <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                    <img src={githubIcon} alt="facebook icon" width="60%" height="60%" />
                </div>
            </div>
            <div className="p-8 rounded-2xl bg-F2F5F9">
                <div className="flex items-center mb-4">
                    <div className='me-2 w-12 h-12 flex justify-center items-center bg-gradient-to-br from-EC1B09 to-FF9C1B text-transparent bg-clip-text'>
                        <span className="material-symbols-rounded">
                            call
                        </span>
                    </div>
                    <div>
                        <p className='font-raleway text-sm font-semibold text-1A1003 opacity-50'>Phone</p>
                        <p className='font-raleway text-sm font-semibold'>+8801748689039</p>
                    </div>
                </div>
                <hr className='w-1/2 mx-auto mb-4' />
                <div className="flex items-center mb-4">
                    <div className='me-2 w-12 h-12 flex justify-center items-center'>
                        <span className="material-symbols-rounded text-EC1B09">
                            drafts
                        </span>
                    </div>
                    <div>
                        <p className='font-raleway text-sm font-semibold text-1A1003 opacity-50'>Email</p>
                        <p className='font-raleway text-sm font-semibold'>mahfuzurrm98@gmail.com</p>
                    </div>
                </div>
                <hr className='w-1/2 mx-auto mb-4' />
                <div className="flex items-center mb-4">
                    <div className='me-2 w-12 h-12 flex justify-center items-center'>
                        <span className="material-symbols-rounded text-FF9C1B">
                            location_on
                        </span>
                    </div>
                    <div>
                        <p className='font-raleway text-sm font-semibold text-1A1003 opacity-50'>Location</p>
                        <p className='font-raleway text-sm font-semibold'>A20/8, Citylane, Anandapur, Savar, Dhaka</p>
                    </div>
                </div>
                <hr className='w-1/2 mx-auto mb-4' />
                <div className="flex justify-center">
                    <a href="" className='px-20 py-2 rounded-full flex justify-center items-center bg-gradient-to-r from-FF9C1B to-EC1B09 text-white'><span className="material-symbols-rounded me-2">
                        download
                    </span>Resume</a>
                </div>
            </div>
        </>
    )
}
