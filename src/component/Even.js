import { useEffect } from "react";

const Even = () => {
    useEffect(()=> {
        return()=>{
            console.log("Even 컴포넌트가 언마운트");
        };
    },[]);
    return <div>현재 카운터는 짝수 입니다.</div>
}

export default Even;