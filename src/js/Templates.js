import React from 'react'
import '../css/Templates.css'
import RankingChart from './rankingChart'
import QuestList from './questList';
import QuestInput from './questInput';
import QuestSort from './questSort';

function Templates() {
  return (
    <>
      <div class="container">
        <label class="box-title"># 후배들아, 학교를 부탁해!</label>
        <div class="box">
          <div class="ranking">
            <label>Ranking | 퀘스트 랭킹</label>
            <div>
              <RankingChart/>
            </div>
          </div>
          <div class="quest">
            <div>
              <label>Add Quest | 퀘스트 추가하기</label>
              <div>아 이건 못 참지! 후배님들을 위한 우리 학교 특! 퀘스트를 등록해주세요 :)</div>
            </div>
            <div>
              <div>
                <QuestSort/>
              </div>
              <div>
                <QuestInput/>
              </div>
              <div>
                <QuestList/>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Templates;
