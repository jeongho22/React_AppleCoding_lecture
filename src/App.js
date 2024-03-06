
/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {


  // state 만드는법 저장소이름,함수이름

  let [글제목,글제목변경] = useState(['남자 코트 추천','중성 코트 추천','김정호 코트 추천']);
  let [따봉,따봉변경] = useState([1,1,1]);
  let [logo,setLogo] = useState('RecatBlog');
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0); // 첫번째 제목, 두번째 제목, 세번째 제목
  let [입력값,입력값변경] = useState('');
  let [발행일, 발행변경] = useState(["2월 5일"])

  // data 변수 , state 변경 함수




    // let [a,c] = [1,2];
    // destructuring 문법

  return (
      <div className="App">
          <div className="black-nav">
              <div>{logo}</div>
          </div>


          <button onClick={() => {
              let copy = [...발행일] //독립적 사본
              copy[0] = "2월 10일"
              console.log(copy == 발행일)
              발행변경(copy)

          }}>...변경기능
          </button>

          <button onClick={() => {
              let copy = [...글제목]
              copy.sort();
              글제목변경(copy)
          }}>정렬
          </button>


          {
              //a는 array 안에 있던 데이터 {a} 해보면됌
              글제목.map(function (a, i) {
                  return (
                      <div className="list" key={i}>
                          <h4 onClick={() => {
                              setModal(!modal);
                              setTitle(i)
                          }}>{글제목[i]} </h4>


                          <span onClick={(e) => {
                              e.stopPropagation();
                              let copy = [...따봉];
                              copy[i] += 1;
                              따봉변경(copy);
                          }}>👍</span> {따봉[i]}


                          <p>{발행일[0]}</p>


                          <button onClick={() => {
                              let copy = [...글제목];
                              copy.splice(i, 1); // (num , 1 ) 몇번째 항목을 1개 삭제한다.
                              글제목변경(copy);

                              let 따봉copy=[...따봉];
                              따봉copy.splice(i,1);
                              따봉변경(따봉copy);
                          }}>삭제
                          </button>


                      </div>
                  )
              })
          }

          <div>
              {/*입력값 변경 input박스 들어가는 부분임*/}
              {/*입력값 state 의 들어감*/}

              <input onChange={e =>
                  입력값변경(e.target.value)}></input>

              {/*e.target: 이벤트가 발생한 대상 요소를 가리킵니다. 여기서는 입력 필드(<input>) 자체를 의미합니다.*/}
              {/*e.target.value: e.target이 가리키는 요소의 현재 값, 즉 입력 필드에 입력된 텍스트 값을 의미합니다.*/}

              <button onClick={() => {
                  if (입력값.trim() !== '') {
                      let copy = [...글제목]; // 1.남자코트, 중성코트, 김정호코트 3개 들어있음
                      copy.unshift(입력값);           // 2.array 에 추가하는 함수 unshift copy에 하나 더 추가
                      글제목변경(copy)                 // 3.copy 에 있는걸 글제목변경 함수로 변경해줌

                      let 따봉copy=[...따봉];   // 따봉 배열의 사본을 만듭니다.
                      따봉copy.unshift(0);         // 새 글에 대한 따봉 수를 0으로 초기화하여 배열의 맨 앞에 추가합니다.
                      따봉변경(따봉copy);                 // 변경된 배열로 따봉 상태를 업데이트합니다.


              }
                  else {
                      alert("글을 입력해주세요.")}
              }}>글발행
              </button>
          </div>


          {/*컴포넌트 만드는법*/}
          {/*/!*html 에서는 함수 못써서 if문 삼항연산자씀*!/*/}

          {
              modal === true ?
                  <Modal 글제목={글제목} title={title} 글제목변경={글제목변경}></Modal>  // 하위
                  :
                  null
          }


          {/*props 상위컴포넌트에서 하위 컴포넌트로 전송하는법*/}
          {/*1. 하위 컴포넌트 작명(자유)={state 이름}*/}
          {/*2.props 파라미터 등록후 props.작명*/}


      </div>
  );

    //1. 동적인 UI 만드는 step
    //2. UI의 현재 상태를 state로 저장
    //3. state에 따라 UI가 어떻게 보일지 작성


    function Modal(전달) {
        return (
            <div className="modal">
                {/*props 전송된거 받기*/}
                <h4>{전달.글제목[전달.title]}</h4>

                <button onClick={() => {
                    let copy = [...전달.글제목]
                    copy[전달.title] = "주차 금지 구역";
                    console.log(전달.title)
                    전달.글제목변경(copy)
                }}>변경</button>

            </div>
      )
  }



    //컴포넌트 만드는법
    //1. function 만들고
    //2. return 안에 html 넣고
    //3. <함수명></함수명> 쓰기

}

export default App;
