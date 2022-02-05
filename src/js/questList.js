import React, { useState, useEffect } from 'react';
import '../css/questList.css';
import axios from 'axios';

function Test({test}) {
  return (
    <li>
      <span>{test.school}</span><br></br><span>{test.todo_quest}</span>
    </li>
  )
}

function QuestList() {
  const [quests, setQuests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setQuests(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://site1.public.nqo.me/quests/');
        console.log(response.data)
        setQuests(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!quests) return null;

  console.log(quests["Quests"][0])
  return (
    <>
      <ul>
        {quests["Quests"] && quests["Quests"].map(quest => (
          <Test test={quest}/>
        ))}
      </ul>
    </> 
  )
}

export default QuestList;
