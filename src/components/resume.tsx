import React from 'react'

export const Resume: React.FC = () => {
    return (
        <>
            <div className='flex items-center mb-4'>
                <h1 className='uppercase text-4xl font-poppins font-medium text-0B0909 me-8'>Resume</h1>
                <div className='w-1/3 rounded-full h-1 bg-gradient-to-r from-FF9C1B to-EC1B09'></div>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
                <h3 className='font-poppins text-lg font-semibold py-2'>Education</h3>
                <h3 className='font-poppins text-lg font-semibold py-2'>Experience</h3>
                <div className="rounded-xl py-4 px-2 bg-FFE3BF">
                    <p className='font-raleway text-sm pb-2'>2018 - Ongoing</p>
                    <p className="font-raleway font-semibold text-sm pb-2">BSc. in Computer Science</p>
                    <p className="font-raleway font-medium text-sm">Independent University, Bangladesh (IUB)</p>
                </div>
                <div className="rounded-xl py-4 px-2 bg-FFEED9">
                    <p className='font-raleway text-sm pb-2'>May 2023 - July 2023 (3 Months)</p>
                    <p className="font-raleway font-semibold text-sm pb-2">Software Engineer Trainee (AI)</p>
                    <p className="font-raleway font-medium text-sm">ADN Diginet</p>
                </div>
                <div className="rounded-xl py-4 px-2 bg-FFEED9">
                    <p className='font-raleway text-sm pb-2'>2015 - 2018</p>
                    <p className="font-raleway font-semibold text-sm pb-2">IGCSE O-Level & GCE A-Level (Private Candidate)</p>
                    <p className="font-raleway font-medium text-sm">British Council, Bangladesh</p>
                </div>
                <div className="rounded-xl py-4 px-2 bg-FFE3BF">
                    <p className='font-raleway text-sm pb-2'>Jan 2020 - March 2020 & June 2022 - August 2022 (6 Months)</p>
                    <p className="font-raleway font-semibold text-sm pb-2">Teaching Assistant (C++ & Python)</p>
                    <p className="font-raleway font-medium text-sm">Independent University, Bangladesh (IUB)</p>
                </div>
            </div>
            <div className="flex gap-x-16">
                <div className="gap-y-6 w-1/2">
                    <h3 className='font-poppins text-lg font-semibold py-2'>Work Skills</h3>
                    <div className="flex flex-wrap items-start gap-2">
                        {
                            ["C#", "Python", "Typescript", "HTML", "CSS", "Bootstrap", "Tailwindcss", "ReactJS", "ASP.NET Core", "FastAPI", "Django", "MySQL", "Entity Framework", "SqlAlchemy", "Django ORM", "Git", "Linux"].map((item, index) => <div key={index} className="bg-E1E8EF font-raleway text-xs rounded-lg p-2">{item}</div>)
                        }
                    </div>
                </div>
                <div className="gap-y-6 w-1/2">
                    <h3 className='font-poppins text-lg font-semibold py-2'>Soft Skill</h3>
                    <div className="flex flex-wrap items-start gap-2">
                        {
                            ["Time Management", "Mentorship", "Impeccable Communication", "Flexibility", "Research", "Writing", "Perseverance"].map((item, index) => <div key={index} className="bg-E1E8EF font-raleway text-xs rounded-lg p-2">{item}</div>)
                        }
                    </div></div>
            </div >
        </>
    )
}
