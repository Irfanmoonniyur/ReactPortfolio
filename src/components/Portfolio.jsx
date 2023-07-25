import React from 'react'
import toDoList from "../assets/portfolio/todolist.png"
import newsLetter from "../assets/portfolio/newslt.png"
import sociopedia from "../assets/portfolio/mrenSocialMedia.png"
import simonGame from "../assets/portfolio/Simon Game.png"
import socioped from "../assets/portfolio/Simon Game.png"
import sociopedi from "../assets/portfolio/Simon Game.png"



const Portfolio = () => {
    const portfolios=[{
        id:1,
        src:toDoList,
        Demo:"https://tame-blue-lovebird-robe.cyclic.app/",
        code:""
    },{
        id:2,
        src:newsLetter,
        Demo:"https://newsletter-zqwa.onrender.com/",
        code:""
    },{
        id:3,
        src:socioped,
        Demo:"",
        code:""
    },{
        id:4,
        src:simonGame,
        Demo:"https://simon-game-1uw1.onrender.com/",
        code:""    },{
        id:5,
        src: sociopedi,
        Demo:"",
        code:""
    },{
        id:6,
        src:sociopedia,
        Demo:"",
        code:""
    },]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className='py-6'>Check out my work here</p>
            </div>
            
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({id,src,Demo,code}) => {
            return(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
    
    
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                    <div className="flex item-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={Demo}>Demo </a></button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href ={code}>code</a></button>
                    </div>
                    </div>)
        })}
            </div>
        </div>
    </div>
  );
};

export default Portfolio