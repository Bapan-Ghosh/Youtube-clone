import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className="flex flex-col">
            <div className="mt-7 ">
                <iframe className="rounded-2xl w-[60vw] h-[65vh]" width="560" height="315" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen></iframe>
            </div>
            <CommentsContainer/>
        </div>
    )
}

export default WatchPage;