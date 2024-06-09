import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const commentData = [
    {
        name: "Bapan Ghosh",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies:[]
    },
    {
        name: "Bapan Ghosh",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies:[
            {
                name: "Bapan Ghosh",
                text: "Lorem ipsum dolor, sit amet consectetur",
                replies:[]
            },{
                name: "Bapan Ghosh",
                text: "Lorem ipsum dolor, sit amet consectetur",
                replies:[
                    {
                        name: "Bapan Ghosh",
                        text: "Lorem ipsum dolor, sit amet consectetur",
                        replies:[
                            {
                                name :"Arijit Sarkar",
                                text :"dasfafafsdsef",
                                replies:[]
                            }
                        ]
                    },
                ]
            },{
                name: "Bapan Ghosh",
                text: "Lorem ipsum dolor, sit amet consectetur",
                replies:[]
            },
        ]
    },
    {
        name: "Kousik Snai",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies:[]
    },
    {
        name: "Kunal Sarkar",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies:[]
    },
    {
        name: "Sourav Gain",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies:[
            {
                name :"Matin Sardar",
                text:"cool",
                replies:[]
            }
        ]
    },
];

const Comment =({data})=>{
        const {name,text,replies} = data;
        return <div className='flex bg-gray-100 p-2'>
            <FaUserCircle size={20}/>
            <div className='px-4 text-sm'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
}

const CommentList = ({Comments})=>{
    return (
        <>
          {Comments.map((comment)=>{
             return (
                <>
                   <Comment data={comment} />
                   <div className='pl-5 border border-l-black ml-5'>
                       <CommentList Comments={comment.replies}/>
                   </div>
                </>
             ) 
          })}
        </>
    )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'> Comments:</h1>
        <CommentList Comments={commentData}/>
    </div>
  )
}

export default CommentsContainer