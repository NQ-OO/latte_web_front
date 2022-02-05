import React, { useState, useEffect, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import '../css/questInput.css';
import axios from 'axios';

// 아래는 Input에서 학교 드롭박스를 불러오는 함수
function Schools({schools}) {
  if (schools.id===1) return null
  else {
  return (
    <option>{schools.title}</option>
  )}
}

function QuestInput() {
  const { register, handleSubmit } = useForm();

  let POST_DATA = [];
  const onSubmit = (data) => {
    console.log(data)
    POST_DATA = data;
    console.log(POST_DATA)
  }

  const [schools, setSchools] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setSchools(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://site1.public.nqo.me/schools/');
        console.log(response.data)
        setSchools(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!schools) return null;

  return (
  <>
    <div class="quest-input">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("school")}>
          {schools && schools.map(schools => (
            <Schools schools={schools}/>
          ))}
        </select>
        <input type="text"  placeholder="매우 쳐라" {...register("todo_quest")}/>
        <input type="submit" value="작성"/>
      </form>
    </div>
  </> 
  )

}

export default QuestInput;
