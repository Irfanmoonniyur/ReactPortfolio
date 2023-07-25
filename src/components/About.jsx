import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, asperiores! Ut numquam 
                incidunt beatae deleniti vel in sunt, ea culpa distinctio ducimus officiis sequi, dolorem voluptatum
                 aut quam commodi labore.</p>
            <br/>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates sit dolor veritatis voluptatem eligendi voluptas possimus est, 
                perferendis consequuntur rem nobis similique ut quisquam soluta veniam 
                numquam incidunt magnam quidem?</p>
           
        </div>
    </div>
  )
}

export default About