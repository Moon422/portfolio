import facebookIcon from "../assets/images/facebook.svg"
import linkedinIcon from "../assets/images/linkedin.svg"
import youtubeIcon from "../assets/images/youtube.svg"
import githubIcon from "../assets/images/github.svg"
import mobileIcon from "../assets/images/mobile.svg"
import emailIcon from "../assets/images/email.svg"
import locationIcon from "../assets/images/location.svg"

export const ProfileCard: React.FC = () => {
    return (
        <div className='bg-white'>
            <h2 className='font-poppins text-center font-bold text-3xl text-0B0909 mb-4'>Mahfuzur Rahman</h2>
            <h5 className='font-raleway text-center font-medium text-0B0909 opacity-50'>Fullstack Developer</h5>
            <div className="flex justify-center">
                <div className='bg-F2F7FC rounded-lg me-2 p-5'>
                    <img src={facebookIcon} alt="facebook icon" width="100%" height="100%" />
                </div>
                <div className='bg-F2F7FC rounded-lg me-2 p-5'>
                    <img src={linkedinIcon} alt="facebook icon" width="100%" height="100%" />
                </div>
                <div className='bg-F2F7FC rounded-lg me-2 p-5'>
                    <img src={youtubeIcon} alt="facebook icon" width="100%" height="100%" />
                </div>
                <div className='bg-F2F7FC rounded-lg me-2 p-5'>
                    <img src={githubIcon} alt="facebook icon" width="100%" height="100%" />
                </div>
            </div>
            <div className="p-8">
                <div className="flex items-center">
                    <div className='me-2 p-4'>
                        <img src={mobileIcon} alt="mobile" width="100%" height="100%" />
                    </div>
                    <div>
                        <p className='font-raleway text-sm font-semibold text-1A1003 opacity-50'>Phone</p>
                        <p className='font-raleway text-sm font-semibold'>+8801748689039</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
