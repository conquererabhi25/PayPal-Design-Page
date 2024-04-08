


const Teams =()=>(
    <div className="flex flex-col sm:flex-row justify-center  bg-gray-100 sm:h-[40vh] lg:h-[58vh] mb-10 h-fit">
        <div className="flex flex-col items-center m-5 bg-white p-5 rounded-sm sm:mr-20 mb-5 sm:h-[35vh] lg:h-[50vh] md:h-fit">
            <img src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?w=996" alt="team" 
            className="h-36 w-72 mb-2"/>
           <div className="text-start">
           <h1 className="text-lg mb-1">Contact our sales team</h1>
            <p className="text-sm mb-1">Learn how payment can be leveraged<br/> as a catalyst for growth</p>
            <button type="button" className="mt-12 bg-blue-700 rounded-2xl pl-2 pr-2 p-1 text-sm text-white hover:bg-blue-950">Contact Sales</button>
           </div>
        </div>
        <div className="flex flex-col m-5 bg-white p-5 rounded-sm mb-5 sm:h-[35vh] lg:h-[50vh] md:h-fit">
            <img src="https://img.freepik.com/premium-photo/process-automation-efficiently-manage-files-online-documentation-database-document_117255-2100.jpg?w=1060" alt="team" 
            className="h-36 w-72 mb-2"/>
            <div className="text-start">
            <h1 className="text-xl mb-1 ">Explore developer <br/>documentation</h1>
            <p className="text-sm mb-1">Learn how payment can be leveraged<br/> as a catalyst for growth</p>
            <button type="button" className="mt-5 bg-blue-700 rounded-2xl pl-2 pr-2 p-1 text-sm text-white hover:bg-blue-950">Visit Developer Docs</button>
            </div>
        </div>
    </div>
)

export default Teams