import useFetch from "../Hooks/useFetch"
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const lastDay = days.length
    const history = useHistory();
   
    const addDay = (event) => {
        event.preventDefault();
        if(window.confirm('날짜를 추가하시겠습니까?')) {
            fetch('http://localhost:3001/days', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'day': lastDay+1
                })
            })
            .then(res => {
                if(res.ok) {
                    alert('날짜가 추가되었습니다.')
                    history.push(`/day/${lastDay+1}`)
                }
            })
        }
    }
    return (
        <form onSubmit={addDay}>
            <div>
                <h3>현재 만들어진 단어장: {days.length}일치</h3>
            </div>
            <button>날짜 추가</button>
        </form>
    )
}