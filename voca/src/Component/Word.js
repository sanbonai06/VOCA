import { useState } from "react"

export default function  Word(props) {

    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow]=useState(false);
    const [isDone, setIsDone]=useState(word.isDone);
    const wordCheck = ()=>{
        setIsShow(!isShow);
    }
    const wordComplete = () => {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json',

            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        })
        .then(res => {
            if(res.ok) setIsDone(!isDone);
        })
        .catch(err => {
            return err;
        })
    }

    const del = () => {
        if(window.confirm('정말로 삭제하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            })
            .then(res => {
                if(res.ok) {
                    setWord({id : 0});
                }
            })  
        }
    }

    if(word.id === 0) return null;
    return (
        <tr className={isDone ? 'off' : ''}>
            <td><input type = "checkbox" checked={isDone} onChange={wordComplete}></input></td>
            <td>{word.eng}</td> 
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={wordCheck}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
                <button className="btn_del " onClick={del}>삭제</button>
            </td>
        </tr>
    )
}