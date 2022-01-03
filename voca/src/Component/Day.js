import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Word from './Word';
export default function Day(){
    const a = useParams();
    const day = a.day;
    /*const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))
    console.log(wordList);*/
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setWords(data)
        })
        .catch(err =>
            console.log(err)
        )
    });
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key = {word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}