import React from 'react'
import BlogPost from './BlogPost'
import BlogDatacard from './BlogDatacard'
import underLine from '../../Assets/Lovepik_com-611716906-Color gradient underline.png'

const Blog = () => {
  return (
    <div className=' bg-white h-5/6 md:w-5/6 items-center md:ml-24 '>
      <div className='h-32 block items-center justify-center text-Black text-center py-4' >
        <h1 className='font-bold font-title text-center text-5xl italic '>
          Blogs
        </h1>
          <div className='w-36 h-10 ml-2/3 flex items-center m-auto  '>
          <img src={underLine} />
          </div>
        <p className='text-2xl text-slate-500'>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </p>
      </div>
      <div className='lg:grid lg:grid-cols-3 gap-4 lg:p-8 lg:m-20 lg:py-16 my-5 md:overflow-hidden md:flex md:flex-col md:items-center md:gap-14 md:py-10 '>
        {BlogDatacard.map((val, inp) => {
          return (

            <BlogPost
              key={inp}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />

          )
        })}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Blog