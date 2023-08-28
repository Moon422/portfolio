export const AboutMe: React.FC = () => {
    return (
        <>
            <div className='flex items-center mb-4'>
                <h1 className='uppercase text-4xl font-poppins font-medium text-0B0909 me-8'>About me</h1>
                <div className='w-1/3 rounded-full h-1 bg-gradient-to-r from-FF9C1B to-EC1B09'></div>
            </div>
            <p className='text-justify font-raleway font-medium mb-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam doloremque dolores? Sed sint autem explicabo nam delectus asperiores maiores laborum necessitatibus, saepe voluptatum perspiciatis, ea impedit debitis, odio expedita.
                Impedit eligendi recusandae adipisci illum nulla temporibus harum quas dolores repellat est quisquam officia, praesentium tempora tenetur vel inventore ipsa commodi! Assumenda delectus laborum maiores iure explicabo ullam mollitia fugit.
            </p>
            <h2 className='text-3xl font-poppins font-medium text-0B0909 mb-7'>What I do!</h2>
            <div className="grid grid-cols-2 gap-x-7 gap-y-6">
                <div className='bg-FFEBD1 py-3 px-6 rounded-xl'>
                    <h3 className='font-poppins text-lg font-semibold py-2'>Frontend Development</h3>
                    <p className='font-raleway text-sm pb-2'>
                        As a frontend developer, I specialize in crafting dynamic and user-friendly web experiences. With proficiency in cutting-edge technologies, I'm well-equipped to bring your ideas to life. My toolkit includes ReactJS and TypeScript for building robust and scalable applications. I'm also skilled in crafting beautiful and responsive UIs using frameworks like Tailwind CSS and Bootstrap. Let's collaborate to create captivating user interfaces that captivate and engage your audience.
                    </p>
                </div>
                <div className='bg-F2F7FC py-3 px-6 rounded-xl'>
                    <h3 className='font-poppins text-lg font-semibold py-2'>Backend Development</h3>
                    <p className='font-raleway text-sm pb-2'>
                        In the realm of backend development, I bring a wealth of expertise to the table. My proficiency spans across versatile technologies, including ASP.NET Core for robust .NET applications, FastAPI for rapid and efficient Python APIs, and Django for scalable and feature-rich web applications. I thrive in architecting powerful server-side solutions to complement and complete your web projects. Let's collaborate to build the backbone of your digital innovations.
                    </p>
                </div>
                <div className='bg-F2F7FC py-3 px-6 rounded-xl'>
                    <h3 className='font-poppins text-lg font-semibold py-2'>Firebase Development</h3>
                    <p className='font-raleway text-sm pb-2'>
                        Experience the magic of Firebase with me. I specialize in harnessing the full potential of Firebase, offering you a wide range of cloud-based services. From real-time databases and secure authentication to cloud functions and hosting, I'm well-versed in creating scalable, secure, and responsive web and mobile applications using Firebase. Let's leverage the power of Firebase to bring your project to life with cutting-edge features and seamless user experiences.
                    </p>
                </div>
                <div className='bg-FFEBD1 py-3 px-6 rounded-xl '>
                    <h3 className='font-poppins text-lg font-semibold py-2'>Database</h3>
                    <p className='font-raleway text-sm pb-2'>
                        Navigating the world of databases, I specialize in MySQL, a robust and versatile relational database system. I'm well-versed in designing efficient database schemas, optimizing queries, and ensuring data integrity. Leveraging the power of Object-Relational Mapping (ORM) frameworks such as Entity Framework for .NET, SQLAlchemy for Python, and Django ORM for web development, I streamline data operations, making database management a breeze. Let's build data-driven applications that are both powerful and efficient.
                    </p>
                </div>
            </div>
        </>
    )
}
