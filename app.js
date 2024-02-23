const stone = document.querySelector('.stone')
const scissor = document.querySelector('.scissor')
const paper = document.querySelector('.paper')
const heading = document.querySelector('.mainheading')
const imgarea = document.querySelector('.images')
const updatemrk = document.querySelector('.marks')
let myflag = true;
let timer = 5
let intervaltime;
let marks = 0

const start = document.querySelector('.start')

const imagesarry = ['paper.jpeg', 'scissor.jpeg', 'stone.jpeg']

start.addEventListener('click',(event)=>{
    heading.innerHTML+='<h2>Please Guess One of the Given Below</h2>'
    start.disabled = true;
    updatemrk.innerHTML=`<h2>Your Score is : ${marks}</h2>`
    defaultpage()
    lisenre()
})


function defaultpage(){
    myflag=true;
    stone.src = 'stone.jpeg';
    paper.src = 'paper.jpeg';
    scissor.src = 'scissor.jpeg';
}

function lisenre(){
        imgarea.addEventListener('click', (event)=>{
            if(myflag){
                intervaltime = setInterval(notifier, 1000)
                let option_clicked = event.target.className;
                let value = Math.round(Math.random()*2)
                myflag=false;
                checkresult(option_clicked,imagesarry[value])
            }
            else{
                return
            }
            
        })
    }

function notifier(){
    document.querySelector('.notify').innerHTML=`<h2>Please Wait ${timer}</h2>`;
    timer-=1;
    if(timer==-1){
        console.log("Hello");
        clearInterval(intervaltime)
        timer=5;
        return
    }
}

function checkresult(option, choosen){
    console.log(option);
    stone.src=`${option}.jpeg`
    scissor.src=''
    paper.src = `${choosen}`
    checkinput(`${option}.jpeg`,choosen)
    setTimeout(defaultpage, 5000)    
}

function checkinput(value1,value2){

    if(value1 == 'stone.jpeg' && value2 == 'scissor.jpeg'){
        marks+=1
    }

    else if(value1 == 'stone.jpeg' && value2 == 'paper.jpeg'){
        marks-=1
    }

    else if(value1 == 'paper.jpeg' && value2 == 'stone.jpeg'){
        marks+=1
    }

    else if(value1 == 'paper.jpeg' && value2 == 'scissor.jpeg'){
        marks-=1
    }

    else if(value1 == 'scissor.jpeg' && value2 == 'paper.jpeg'){
        marks+=1
    }

    else if(value1 == 'scissor.jpeg' && value2 == 'stone.jpeg'){
        marks-=1
    }
    updatemrk.innerHTML=`<h2>Your Score is : ${marks}</h2>`

    
}

