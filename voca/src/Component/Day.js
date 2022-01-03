import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

export default function Day(){
    const a = useParams();
    const day = a.day;
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))
    console.log(wordList);
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr>
                            <td><input type = "checkbox"></input></td>
                            <td>{word.eng}</td> 
                            <td>{word.kor}</td>
                            <td>
                                <button>뜻 보기</button>
                                <button class="btn_del ">삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}