import React from 'react'

const Background = () => {
  return (
       <div className='h-full w-full overflow-hidden object-cover '>
        
        <video className='absolute top-0 left-0 w-full h-full object-cover  z-[-1]' src="/BMW/video/video1.mp4" autoPlay loop muted></video>
        <div className='flex flex-col h-[400px] w-[700px] bg-transparent absolute top-[40%] left-[1%] gap-2 p-10 '>

            <h1 className='text-7xl text-white font-bold ' >wellcome to BMW world !!!</h1>
            <p className='text-white text-lg'>BMW — short for Bayerische Motoren Werke AG (Bavarian Motor Works) — is a German luxury automobile and motorcycle manufacturer, founded in 1916. The brand is known worldwide for combining elegant design, cutting-edge technology, and powerful performance....</p>
             <div > <button className='text-2xl font-bold text-white cursor-pointer hover:underline'
             
             
             >Read more.</button> </div> 
            </div>    


              
    </div>
  )
}

export default Background