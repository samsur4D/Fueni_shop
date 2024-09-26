import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Banner Part */}

          {/* navber */}
          <nav className='flex  container mx-auto gap-60 justify-between'>
            <div>
              <img className='h-6' src="../public/furni_shop-high-resolution-logo-black-transparent.png" alt="" />
            </div>

            <div>
              <ul className='flex gap-20'>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className='flex gap-12'>
            <div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
           </div>

            </div>
          </nav>
          {/* navber */}

         {/* <div className='w-full flex bg-red-400 h-full container mt-6'>
                      <div className='basis-/5'>
                         <img src="../public/DOTS.png" alt="" />
                         <img className='absolute z-10 ' src="../public/Content.png" alt="" />
                      </div>

                      <div className='relative left-60 basis-4/5  w-[1700px]'>
                        <img className='' src="../public/banner_image.png" alt="" />
                       </div>
         </div> */}

<div className='container  flex mt-5 w-full h-full'>

 <div className='bg-red-600 mt-10  basis-2/6 h-full w-full'>
            {/* two images */}
            <img className='absolute top-28 left-96 ml-24' src="../public/DOTS.png" alt="" />
            <img className='absolute mt-32 h-[400px] z-10' src="../public/Content.png" alt="" />
 </div>
 <div className='bg-yellow-400 relative   basis-5/6 h-full w-full'>
     {/* banner image */}
 <img src="../public/banner_image.png" alt="" />
 </div>
</div>


      {/* Banner Part */}
    </>
  )
}

export default App
