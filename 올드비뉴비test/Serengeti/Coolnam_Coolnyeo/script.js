const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const EI = document.querySelector('#EI');
const SN = document.querySelector('#SN');
const TF = document.querySelector("#TF");
const JS = document.querySelector("#JP");
const pro = document.querySelector('.progress-bar');
const MBTI = document.querySelector('#mbti');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');
const qNum =document.querySelector('#qNum');

//qNum 
const q = {
    1: { "title": "문제 1번",
        "body":"애인이 다른 이성친구랑 맞담을 하러 간다면? ",
        "A": "'나는 비흡연자니까 어쩔 수 없지.' 보내준다.", "B": "'미친건가?' 다시 들어오라고 카톡을 보낸다." },
    2: { "title": "문제 2번",
        "body":"데이트 중 이성 친구가 급한 일이 생겨서 애인에게 와달라고 한다. 애인이 가겠다고 한다면?",
        "A": "'급한 일이면 그럴 수도 있지.' 보내준다.", "B": "'데이트 중에 굳이?' 가지 말라고 한다." },
    3: { "title": "문제 3번", 
        "body":"우연히 보게 된 애인의 인스타 보관함에 전 남자/여자친구 사진이 있다면? ", 
        "A": "'지우는 걸 까먹었나?' 말하지 않고 넘어간다.", "B": "'너 어떻게 그럴 수 가 있어?' 극대노한다." },
    4: { "title": "문제 4번", 
        "body":"애인이 동성 친구들과 헌팅 포차에 간다면? ", 
        "A": "'친구들이랑 간다는 데 뭐..' 그냥 보내준다.", "B": "'많고 많은 술집 중에 굳이 헌팅 포차를?' 갈 테면 가보라고 한다." },
    5: { "title": "문제 5번", 
        "body":"애인이 전여친/전남친이 찍어준 사진을 프로필 사진으로 한다면?", 
        "A": "'잘 나오긴 했네.' 그냥 둔다.", "B": "'잘 나오긴 했지만 싫어' 내리라고 한다." },
    6: { "title": "문제 6번", 
        "body":"여사친/남사친이 길에서 다시 신발을 고쳐 신으려고 할 때, 애인이 잡아준다면?", 
        "A": "'신발 신는다는데 잡아 줄 수 도 있지' 그냥 둔다.", "B": "'넘어지던 말던 뭔 상관이냐?' 차라리 내가 대신 잡아준다." },
    7: { "title": "문제 7번", 
        "body":"애인이 내 친구와 한달간 단 둘이 몰래 만나면서 나를 위한 이벤트를 준비했다면?", 
        "A": "'둘이서 나를 위한 이벤트를 준비했다니!' 감동받는다.", "B": "'한달 동안 단 둘이서 뭐한거야?' 어이가 없어서 화를 낸다." },
    8: { "title": "문제 8번", 
        "body":"애인이 밤 늦게까지 술 마시다가 같은 방향에 사는 이성친구와 단둘이 택시 타고 집에 간다면?", 
        "A": "'요즘 택시비가 얼만데..같이 탈 수도 있지' 별 말 없이 넘어간다.", "B": "'얘는 이성 친구 밖에 없나?' 신경 쓰인다." },
    9: { "title": "문제 9번", 
        "body":"애인이 길에서 이성에게 번호를 따였다면?", 
        "A": "'아 정말?' 뿌듯해 하면서 흐뭇한 미소를 짓는다.", "B": "'어쩌라는거지?' 되물어본다." },
    10: { "title": "문제 10번", 
        "body":"애인이 예전에 5년간 연애한 사실을 알게 된다면?", 
        "A": "'오래 연애하는 스타일이구나' 오히려 좋아한다.", "B": "'5년이나..?' 자려고 누웠을 때 다시 생각하면서 찝찝해한다." },
    11: { "title": "문제 11번", 
        "body":"애인이 이성 직장 동료를 조수석에 태우고 날 만나러 온다면?", 
        "A": "'같은 방향이었구나?' 대수롭지 않게 여기며 인사한다. ", "B": "'왜 같이 타고 와?' 둘만 남았을 때 물어본다." },
    12: { "title": "문제 12번",
        "body":"내 애인의 남사친(여사친)이 알고보니 전남친(전여친) 관계였다면?", 
        "A": "'아 그래? 근데 밥 뭐 먹지?' 관심을 안 가진다.", "B": "'얼마나 사귀었어?' 찌질하게 물어본다." },
    13: { "title": "문제 13번", 
        "body":"남친(여친) 조수석에 못보던 여자(남자) 머리카락이 발견됐다면?", 
        "A": "'너 털갈이 해?'라고 놀린다.", "B": "'이거 뭐야?' 정색하며 물어본다." },
    14: { "title": "문제 14번", 
        "body":"동성 친구와 술마시러 간 애인, 전화 중 동성이 아닌 이성의 목소리가 들린다면?", 
        "A": "'그냥 그런가 보다' 전화 끊고 하던 일 한다.", "B": "'옆에 누구야?' 영상 통화 건다." },
    15: { "title": "문제 15번", 
        "body":"애인이 내 친구의 신발끈을 묶어준다면?", 
        "A": "'역시 내 애인' 속으로 뿌듯해한다.", "B": "둘만 남았을 때 나즈막히 '근데 아까 왜 그랬어?' 정색한다." },

}
const result = {
    100:{"person":"당신은 지구 온난화 해결사", "explain":"100%의 쿨함을 가졌군요! 어라, 당신의 주위를 지나가는 모두가 얼어 붙습니다. 주변을 잘 살펴보세요!"},//13~15
    80:{"person":"당신은 인간 에어컨", "explain":"75%의 쿨함을 가졌군요! 무더위를 조심하세요. 사람들이 모두 당신에게 달라붙을지도 모릅니다."},//9~12
    50:{"person":"당신은 다 녹은 얼음물", "explain":"50%의 쿨함을 가졌군요! 이런, 얼음이 다 녹아서 물이 미적지근해졌어요. 이랬다 저랬다 하는 당신, 원한다면 얼음 리필 꼭 하세요!"},//6~8
    25:{"person":"당신은 고장난 에어컨", "explain":"25%의 쿨함을 가졌군요! 엇, 에어컨이 고장나서 이상한 바람만 나오고 있어요. 당신, 꽤나 쿨하지 못한 것 같군요?"},//3~5
    0:{"person":"당신은 이 시대의 진정한 쿨찐", "explain":"0%의 쿨함을 가졌군요! 어.. 그럴 수 있죠! 당신, 주변인 모두가 인정하는 쿨찐일지도?"}//0~2
}

//let qNum; 현재 문제번호

let num = 1;

titleBtn.addEventListener('click', () => {
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
});

let score =0;
aBtn.addEventListener('click', () => {
    score++;
    updateQuestion();
});

bBtn.addEventListener('click', () => {
    updateQuestion();
});

function updateQuestion() {
    if (num == 16) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
            if (score>12){
                person.innerHTML = result[100].person;
                explain.innerHTML = result[100].explain;
                // image.setAttribute('src', result[100].img);
            }
                
            else if (score>9){
                person.innerHTML = result[80].person;
                explain.innerHTML = result[80].explain;
                // image.setAttribute('src', result[80].img);
            }
            else if (score>6)
                {person.innerHTML = result[50].person;
                explain.innerHTML = result[50].explain;
                // image.setAttribute('src', result[50].img);
                }
            else if (score>3){
                person.innerHTML = result[25].person;
                explain.innerHTML = result[25].explain;
                // image.setAttribute('src', result[25].img);
                }
            else{ 
                person.innerHTML = result[0].person;
                explain.innerHTML = result[0].explain;
                // image.setAttribute('src', result[0].img);
                }
        }
    else { // 수정 필요
        pro.setAttribute('style', `width : calc(100/15*${num}%);`);
        question.innerHTML = q[num].title;
        body.innerHTML = q[num].body;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        qNum.innerHTML = `${num}/15`;
        num++;
    }
}
