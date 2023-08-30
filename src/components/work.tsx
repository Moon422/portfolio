import React, { useRef, useState } from 'react'
import portfolioPhoto from "../assets/images/portfolio.png"
import classroomPhoto from "../assets/images/classroom.png"
import databasePhoto from "../assets/images/database.png"
import researchPhoto from "../assets/images/research.jpeg"
import sadPhoto from "../assets/images/sad.jpeg"
import youtubePhoto from "../assets/images/youtube.png"

export const Work: React.FC = () => {
    const links = useRef<Array<{
        text: string,
        tag: string,
        isActive: boolean
    }>>(
        [
            { text: "All", tag: "all", isActive: true },
            { text: "App Development", tag: "app_development", isActive: false },
            { text: "Web Development", tag: "web_development", isActive: false },
            { text: "Design", tag: "design", isActive: false },
            { text: "Mentorship", tag: "mentorship", isActive: false },
        ]
    )

    const works = useRef<Array<{
        title: string,
        image: string,
        tags: Array<string>
    }>>([
        { title: "Portfolio", image: portfolioPhoto, tags: ['app_development', 'web_development'] },
        { title: "Student Performance Monitoring System", image: databasePhoto, tags: ['app_development', 'web_development', 'design', 'system_design', 'database'] },
        { title: "Classroom UI Clone", image: classroomPhoto, tags: ['web_development', 'design'] },
        { title: "Youtube UI Clone", image: youtubePhoto, tags: ['web_development', 'design'] },
        { title: "Research on the Effectiveness of Prototyping for Requirement Gathering", image: researchPhoto, tags: ['research'] },
        { title: "System Analysis of IUB revenue monitoring system", image: sadPhoto, tags: ['system_analysis'] }
    ])

    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [activeTag, setActiveTag] = useState<string>("all")

    return (
        <>
            <div className='flex items-center mb-4'>
                <h1 className='uppercase text-4xl font-poppins font-medium text-0B0909 me-8'>Portfolio</h1>
                <div className='w-1/3 rounded-full h-1 bg-gradient-to-r from-FF9C1B to-EC1B09'></div>
            </div>
            <div className="flex justify-end gap-x-4 font-poppins text-base font-medium">
                {
                    links.current.map((item, index) => <div onClick={e => {
                        links.current[activeIndex].isActive = false
                        links.current[index].isActive = true
                        setActiveIndex(() => index)
                        setActiveTag(() => links.current[index].tag)
                    }} key={index} className={`${item.isActive ? 'text-red-500' : 'text-57657A'} hover:cursor-pointer`}>{item.text}</div>)
                }
            </div>
            <div className="flex gap-x-8">
                {
                    (() => {
                        const filteredWorks = works.current.filter(item => {
                            return activeTag === 'all' || item.tags.includes(activeTag)
                        })

                        const splitIndex = Math.ceil(filteredWorks.length / 2)

                        return ([
                            <div>
                                {
                                    filteredWorks.slice(0, splitIndex).map(
                                        (item, index) => (
                                            <div className={`p-2 mb-8 rounded-lg ${index % 2 ? 'bg-FFE3BF' : 'bg-FFEED9'}`}>
                                                <div key={index} className={`rounded-lg mb-2 flex justify-center items-center overflow-hidden ${index % 2 ? 'h-24' : 'h-40'}`}>
                                                    <img src={item.image} alt="cover photo" className='w-full h-auto object-cover' />
                                                </div>
                                                <p className='font-poppins'>
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    )
                                }
                            </div>,
                            <div>
                                {
                                    filteredWorks.slice(splitIndex).map(
                                        (item, index) => (
                                            <div className={`p-2 mb-8 rounded-lg ${index % 2 ? 'bg-FFEED9' : 'bg-FFE3BF'}`}>
                                                <div key={index} className={`rounded-lg mb-2 flex justify-center items-center overflow-hidden ${index % 2 ? 'h-40' : 'h-24'}`}>
                                                    <img src={item.image} alt="cover photo" className='w-full h-auto object-cover' />
                                                </div>
                                                <p className='font-poppins'>
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        ])
                    }
                    )()
                }
            </div>
        </>
    )
}
