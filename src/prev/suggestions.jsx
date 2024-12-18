import React from 'react'
import { Link } from 'react-router-dom'


const suggest_list =[
    {text :"javscript"},
    {text :"python"},
    {text :"machine learning"},
    {text :"web development"},
    {text :"react js"},
    {text :"hotel management system"},
    {text :"google api"},
    {text :"automation"},
    {text :"bootsrap website"},
    {text :"c++"},
]


const suggestions = () => {
  return (
    <div className='w-full hide-scrollbar overflow-auto'>
        <div className='flex mx-10 gap-5 py-8 '>
            {suggest_list.map((item,i)=>(
                // <Link to="/search">
                <a href='#'>
                    <div className='border cursor-pointer whitespace-nowrap bg-stone-100 border-stone-300 text-stone-400 px-4 py-1 transition-colors rounded-md hover:bg-stone-300 hover:border-stone-400 hover:text-stone-500'>
                    {item.text}
                </div>
                </a>
                // </Link>
            ))}
        </div>
    </div>
  )
}

export default suggestions