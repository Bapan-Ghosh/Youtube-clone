import React from 'react'
import {useSelector} from 'react-redux';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import {Link} from "react-router-dom"

const Sidebar = () => {
  const selector = useSelector((store)=>store.app.isMenuOpen );
  return (
    <>
    {selector &&<div className='p-2 pl-1 shadow-sm w-[12%]'>
       {/* Section 1 */}
        <ul className='pb-4'>
         <Link to="/"> <div className="home flex gap-8 mb-3 hover:bg-slate-100 rounded-2xl">
            <IoMdHome size={28}/>
            <li>Home</li>
          </div></Link>
          <div className="shorts flex gap-8 mb-1">
               <SiYoutubeshorts size={28}/>  
               <li>Shorts</li>
          </div>
          <div className="subscriptikon flex gap-8 mb-1">
            <MdSubscriptions size={28}/>
            <li>Subscriptions</li>
          </div>
        </ul>
      {/* Section 2 */}
      <hr />
        <h1>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        {/* section 3 */}
        <hr />
        <h1 className='pt-4'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
    </div>}
    </>
  )
}

export default Sidebar