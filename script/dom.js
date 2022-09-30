//function 키워드로 함수 생성
// function show(){
//     console.log("show");
// }

//화살표 함수에 명령이 한줄만 있을 때는 {} 생략 가능
// const show = () => console.log("show")
//return문 하나일때는 "return"도 생략 가능
// ex) const show = () => 10;

//화살표 함수형식으로 생성
// const show = () => {
//     console.log("show");
//     const msgId = document.querySelector("#msg");

    // msgId.innerHTML = "<h2>페이스북</h2>";
    // msgId.innerText = "<h2>페이스북</h2>";
    // console.log(msgId.innerHTML);
    // console.log(msgId.innerText);
    // msgId.textContent = "<h2>페이스북</h2>";
    // console.log(msgId.textContent)
    
    // 렌덤 주사위
    // let ranCnt = Math.floor(Math.random() * 6) + 1;
    // console.log(ranCnt);
    // let tag = `<div class="msgDiv"><img src="./images/${ranCnt}.png" id="img${ranCnt}"></div>`;

    // 모든 주사위
    // let tag = "";
    // for(let i=1; i<=6; i++){
    //     // tag = tag + `<div class="msgDiv">${i}</div>`
    //     tag += `<div class="msgDiv"><img src="./images/${i}.png" id="img${i}"></div>`
    // }
    
    // msgId.innerHTML = tag;
    //스타일 변경
    // msgId.getComputedStyle = "red";
// }

// const msgId = document.querySelector("#msg");
// msgId.style.display = "none" or "block"
// const oxImg = document.querySelector("#msgWR");
// const choiceNum = document.querySelector("#choiceNum");
// const but1 = document.querySelector(".bt1");
// const but2 = document.querySelector(".bt2");

// 화면보기 함수
const dispDom = (msgIds, oxImgs, choices,  but1s, but2s) => {
    document.querySelector("#msg").style.display = msgIds
    document.querySelector("#msgWR").style.display = oxImgs
    document.querySelector("#choiceNum").style.display = choices
    document.querySelector(".bt1").style.display = but1s
    document.querySelector(".bt2").style.display = but2s
}

// 주사위 프로젝트
document.addEventListener("DOMContentLoaded", () => {
    // section on->off
    dispDom("none", "none", "none", "block", "none")
})

// 렌덤숫자를 다른 함수에서도 사용하려면 함수 밖에서 변수 생성해놓아야 함.
// let ranCnt;

const show = () => {
    // section on->off
    dispDom("none", "none", "block", "none", "block")
    // 버튼 true -> false
    // let diceCheck = document.getElementsByName("Cnt");
    // for(let i=0;i<diceCheck.length;i++){
    //     if(diceCheck[i].checked){
    //         diceCheck[i].checked = false;
    //     }
    // }
    //버튼을 직접 끌 필요 없이 폼을 리셋시킬 수 있다.
    const form1 = document.getElementById("form1") ;
    form1.reset() ;
}

const dice = () => {
    // 선택 안했을 때 알림
    let diceCheck = document.getElementsByName("Cnt");
    let diceCnt = 0;
    for(let i=0;i<diceCheck.length;i++){
        if(diceCheck[i].checked){
            break;
        } else {
            diceCnt += 1;
        }                
    }
    if (diceCnt > 5){
        alert("번호선택하세요")
        return;
    }

    // section on->off
    dispDom("block", "block", "none", "block", "none")
    const msgId = document.querySelector("#msg");
    const oxImg = document.querySelector("#msgWR");
    // 렌덤 주사위 그림
    let ranCnt = Math.floor(Math.random() * 6) + 1;
    let tag = `<div class="msgDiv"><img src="./images/${ranCnt}.png" id="img${ranCnt}"></div>`;
    msgId.innerHTML = tag;
    
    // radio버튼과 그림 비교
    // const diceCheck = document.querySelector('input[name="Cnt"]').checked; // 체크 여부
    const diceValue = document.querySelector('input[name="Cnt"]:checked').value;  // 체크 값
    if(diceValue == ranCnt) {
        oxImg.innerHTML = '<div><img src="./images/o.png"></div>'
    } else {
        oxImg.innerHTML = '<div><img src="./images/x.png"></div>'
    }

    console.log("주사위 값 : " + ranCnt);
    console.log("선택한 값 : " + diceValue);
}