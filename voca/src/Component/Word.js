import { useState } from "react"

export default function  Word({word}) {

    const [isShow, setIsShow]=useState(false);
    const [isDone, setIsDone]=useState(word.isDone);
    const wordCheck = ()=>{
        setIsShow(!isShow);
    }
    const wordComplete = () => {
        setIsDone(!isDone);
    }
    return (
        <tr className={isDone ? 'off' : ''}>
            <td><input type = "checkbox" checked={isDone} onChange={wordComplete}></input></td>
            <td>{word.eng}</td> 
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={wordCheck}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
                <button className="btn_del ">삭제</button>
            </td>
        </tr>
    )
}