import facebookIcon from "../assets/images/facebook.svg"
import linkedinIcon from "../assets/images/linkedin.svg"
import youtubeIcon from "../assets/images/youtube.svg"
import githubIcon from "../assets/images/github.svg"
import profilePhoto from "../assets/images/profile-photo.jpg"

export const ProfileCard: React.FC = () => {
    return (
        <>
            <img src={profilePhoto} alt="profile picture" className='rounded-3xl absolute -top-24 shadow shadow-slate-300' />
            <h2 className='font-poppins text-center font-bold text-3xl text-0B0909 mb-4'>Mahfuzur Rahman</h2>
            <h5 className='font-raleway text-center font-medium text-0B0909 opacity-50 mb-3'>Fullstack Developer</h5>
            <div className="flex justify-center mb-5 gap-2">
                <a href="https://www.facebook.com/moon.knight117/">
                    <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                        <img src={facebookIcon} alt="facebook icon" width="60%" height="60%" />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/moon422/">
                    <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                        <img src={linkedinIcon} alt="linkedin icon" width="60%" height="60%" />
                    </div>
                </a>

                <a href="https://www.youtube.com/channel/UClZaC3bNQWgEskcXyFL_pFg">
                    <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                        <img src={youtubeIcon} alt="youtube icon" width="60%" height="60%" />
                    </div>
                </a>
                <a href="https://github.com/Moon422">
                    <div className='bg-F2F7FC rounded-lg w-12 h-12 flex justify-center items-center'>
                        <img src={githubIcon} alt="github icon" width="60%" height="60%" />
                    </div>
                </a>
            </div>
            <div className="p-8 rounded-3xl bg-F2F5F9">
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
                    <a href="https://raw.githubusercontent.com/Moon422/portfolio/main/CV%20-%20Mahfuzur%20Rahman.pdf" className='px-20 py-2 rounded-3xl flex justify-center items-center bg-gradient-to-r from-FF9C1B to-EC1B09 text-white'><span className="material-symbols-rounded me-2">
                        download
                    </span>Resume</a>
                </div>
            </div>
        </>
    )
}
