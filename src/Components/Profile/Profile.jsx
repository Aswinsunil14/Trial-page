import React from 'react'

const Profile = () => {
  return (
    <div className="dark:!bg-navy-800  rounded-primary   flex h-full w-full max-w-[550px] flex-col items-center  bg-cover bg-clip-border  dark:text-white dark:shadow-none ">
    <div className="relative  w-full justify-center rounded-xl " >
      <div className="absolute -bottom-2 flex h-[78px] w-[78px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img className="h-full w-full rounded-full transform transition duration-500 hover:scale-150" src="https://i.ibb.co/6YbS9ff/avatar11.png" alt="" />
      </div>
    </div>
    <div className=" flex flex-col items-center">
      <h4 className="text-bluePrimary text-xl font-bold font-light ">Adela Parkson</h4>
      <p className="text-lightSecondary text-base font-normal">Product Manager</p>
    </div>
    <div className="mt-2 mb-3 flex gap-4 md:!gap-14">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-bluePrimary text-2xl font-bold">17</h3>
        <p className="text-lightSecondary text-sm font-normal">Posts</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-bluePrimary text-2xl font-bold">9.7K</h3>
        <p className="text-lightSecondary text-sm font-normal">Followers</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-bluePrimary text-2xl font-bold">434</h3>
        <p className="text-lightSecondary text-sm font-normal">Following</p>
      </div>
    </div>
  </div>
  )
}

export default Profile