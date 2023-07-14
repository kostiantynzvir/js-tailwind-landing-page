export default function VideoComp(){
    return(

        <div className="mt-8">
        <div className="px-7 py-16 text-center bg-cyan-100" style={{height:'400px'}}>
            <h1 className="text-4xl font-bold mb-7">Show visitors what they're signing up
                for</h1>
            <p className="text-lg tracking-wider ">Include a video or photo from one of your sessions to help people understand your service
                or just hype 'em up.
            </p>
        </div>
        <video className="w-4/5 h-auto m-auto -mt-12" controls>
            <source src="/pexels_videos_2675511 (1080p).mp4" type="video/mp4"></source>
            </video></div>

    )
}