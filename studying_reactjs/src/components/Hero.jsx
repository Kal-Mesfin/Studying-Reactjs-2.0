function Hero({title="Apply for a job now.", subtitle="Find the job that fits your skill level"}){
    return (
        <div className="bg-yellow-500 py-20">
            <div className="max-w-7xl mx-auto items-center px-4 flex flex-col ">
                <div className="text-center">
                   <h1 className="text-6xl font-extrabold text-white font-mono sm:text-4xl md:text-5xl ">
                    {title}
                   </h1>
                    <p className="font-serif my-6 text-xl text-white ">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );

};
export default Hero