/* 기존 함수 선언 방식
function funPrint(n) {
    console.log(n);
    console.log("외부 자바스크립트");
    console.log("버튼" + 1)
}
*/

//ES6+ 부터는 화살표 함수 사용
const funPrint = (n) => {
    // console.log(n);
    // console.log("외부 자바스크립트");
    console.log(`버튼${n}`); // 백틱(` -> 물결표시아래)
}
/*JQurey 문법
$.ready(){

}
*/

// 돔을 생성하는 함수- 돔을 제어할 수 있다.
// document.addEventListener("DOMContentLoaded", 콜백함수); 함수가 인수로 들어간 경우(java는 불가능)

/*
//변수선언
// console.log(x);
let x = 100; //es6부터 var는 퇴출(const(안바뀌는 변수), let(바뀌는 변수)만 씀)
x = 100*2; //const에서 x가 이런식으로 변경되면 오류
console.log(x);
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // 돔이 생성된 함수 내에서만 요소 생성, 찾기 등이 가능
    // console.log(document.getElementById("bt").innerHTML)

    // 요소 생성(버튼생성)
    // let bt = document.createElement("button")
    // document.getElementById("bt").append(bt)
    // bt.innerHTML = "버튼3"
    // document.getElementsByClassName(".bt1").append(bt)   //안됨
    
    //요소 찾기
    //결과 HTMLcollection
    // const bts1 = document.getElementsByClassName("bt1")
    // console.log(bts1)
    //결과 HTMLcollection
    // const bts2 = document.getElementsByTagName("button")
    // console.log(bts2)
    //결과 문자열
    // const bts3 = document.querySelector(".bt1")
    // console.log(bts3)
    //결과 NodeList
    const bts4 = document.querySelectorAll(".bt1")
    // console.log(bts4)
    /*
    console.log(bts4[0].innerHTML);
    console.log(bts4[0].innerText); //웹에서 안보이는 것은 안가지고옴
    console.log(bts4[1].textContent);   //웹에서 안보여도 가지고 옴
    */

    //결과 NodeList 반복문으로 가져오기(const 아니면 let만 씀)
    //for 반복문
    // for(let i=0; i<bts4.length; i++){
    //     console.log(bts4[i]);
    //     // bts4[i].innerHTML = `mybutton${i+1}`
    //     // console.log(bts4[i].innerHTML);
    // }


    // for in 반복문(키값만 가지고 온다.)
    // for(let i in bts4){
    //     console.log(i);
    // }
    

    //foreach(item, index순서) 반복문(메소드형식, 반복 break가 안됨)
    // bts4.forEach((item)=>{
    //     console.log(item.innerHTML);
    // });

    // bts4.forEach((item, idx)=>{
    //     console.log(`${idx} : ${item.innerHTML}`);
    // });

    //for of 반복문(index, item 순서)
    for(let item of bts4){
        console.log(item);
    }
    for(let [idx, item] of bts4.entries()){
        console.log(`${idx} : ${item.innerHTML}`);
        break;
    }

})
// console.log("DOM test")
