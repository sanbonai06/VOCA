import useFetch from "../Hooks/useFetch"
import { useRef } from "react";
import { useHistory } from "react-router-dom";
export default function CreateWord() {

    const days = useFetch('http://localhost:3001/days')
    const history = useHistory();

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
        
    function onSubmit(event){
        event.preventDefault();
        if(window.confirm('저장하시겠습니까?')) {
            fetch('http://localhost:3001/words', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    'day': dayRef.current.value,
                    'eng': engRef.current.value,
                    'kor': korRef.current.value,
                    'isDone': false,
                })
            })
            .then(res => {
                if(res.ok) {
                    alert('단어가 추가되었습니다');
                    history.push(`/day/${dayRef.current.value}`);
                }
            })
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type = "text" placeholder="computer" ref = {engRef}></input>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type = "text" placeholder="컴퓨터" ref = {korRef}></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref = {dayRef}>
                    {days.map(day => (
                        <option key = {day.id} value = {day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>저장하기</button>
        </form>
    )
}