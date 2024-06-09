import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux"
import { toggleMenu,openMenu } from "../redux/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { youtube_search_api } from "../utils/Constants";
import { cacheResults } from "../redux/searchSlice";
import { useNavigate } from "react-router-dom";

const Header =()=>{
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([]); // for the api response
    const [showSuggestions,setShowSuggestions] = useState(false); 

    const searchCache = useSelector(store =>store.search)
   
    /*
       searchCache = {
          "iphone" : ["iphone 11", "iphone 14"]
       }
    */
    useEffect(()=>{
        //make an api call after every key press
        // but if difference between 2 Api calls is <200ms
        // decline the api call
        
        // Debouncing
        const timer = setTimeout(()=>{ 
            console.log(searchCache[searchQuery]) // comparing with the key if key is present it won't call the api again
            if(searchCache[searchQuery]){
               setSuggestions(searchCache[searchQuery])        
            }
            else
              getSearchSuggestions();
        },200); 

        return ()=>{
              clearTimeout(timer);  // to decline the api calls
        }
        
    },[searchQuery])

    const getSearchSuggestions = async ()=>{ 
        const searchRes = await fetch(youtube_search_api+searchQuery);
        const json = await searchRes.json();
        console.log(json[1]);
        setSuggestions(json[1])
        // update in my cache
        dispatch(
            cacheResults({
            [searchQuery] : json[1],
        }))
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    }

    const navi = useNavigate();
    const navigate = ()=>{
        dispatch(openMenu())
          navi("/")
    }

    return (
        <div className="flex justify-between mt-2">
            <div className="left flex flex-row" >
                <GiHamburgerMenu onClick={toggleMenuHandler} className="cursor-pointer mr-7 hover:bg-gray-100 hover:rounded-full" size={28} />
               <div onClick={navigate} className="flex">
                 <img className="cursor-pointer h-6 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="youtube logo" />
                 <p className="font-light text-[10px]">IN</p> 
               </div> 
            </div>
            <div className="middle cursor-pointer">
                {/* <div> */}
                <div className="flex ">
                 <div dir="ltr">
                   <input type="text" 
                     placeholder="Search"
                     value={searchQuery}
                     onChange = {(e)=>setSearchQuery(e.target.value)} 
                     onFocus = {()=> setShowSuggestions(true)}
                     onBlur = {()=>setShowSuggestions(false)} 
                     className="h-9 w-[500px] border-[1px] border-gray-400 focus:border-blue-50 rounded-s-2xl pl-4 p-1"/>
                 </div>
                 <div dir="rtl">
                   <CiSearch size={2} className=" bg-gray-100 h-9 w-14 rounded-s-2xl border-[1px] border-gray-400"/>
                 </div>   
                </div>
               {showSuggestions &&<div className="absolute bg-white w-[37%] pl-4 py-2 rounded-xl mt-2 ">
                    <ul>
                        {suggestions.map((s)=><li key={s} className="flex gap-4 hover:bg-gray-100"><CiSearch/> {s}</li>)}
                    </ul>
                </div>}
                {/* </div> */}
            </div>
            <div className="right cursor-pointer">
               <FaUserCircle size={28}/>
            </div>
        </div>
    )
} 

export default Header;