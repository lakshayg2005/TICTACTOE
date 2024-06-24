let btn = []; 
for (let i = 1; i < 10; i++) {
  btn[i] = document.querySelector(`#b${i}`); 
}

let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [3,6,9],
  [1,4,7],
  [2,5,8],
  [1,5,9],
  [3,5,7],
];
let j=0;
// let el1=document.createElement("h2");
// let el2=document.createElement("h2");
// el1.innerText="X's Turn";
// el2.innerText="O's Turn";
let a=document.querySelector(".container");

for (let i = 1; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    if(j%2==0){
        btn[i].innerText="o";
        // a.append(el1);
        // a.remove(el2);
        }
        else{
        btn[i].innerText="x";
        // div.append(el2);
        // div.remove(el1);    
        }
        j++;
        btn[i].disabled=true;
        checkWin();
        checkTie();
  });
}

//winner function
let win=document.createElement("h1");
const checkWin=()=>{
  for(let k=0;k<8;k++){  
    if((btn[arr[k][0]].innerText!="") &&(btn[arr[k][1]].innerText!="") &&(btn[arr[k][2]].innerText!="")){
    if(((btn[arr[k][0]].innerText==btn[arr[k][1]].innerText) && (btn[arr[k][1]].innerText==btn[arr[k][2]].innerText)) ){
    
    win.innerText=`WINNER IS ${btn[arr[k][0]].innerText}`;
    document.body.prepend(win);
    for(let m=1;m<10;m++){
    btn[m].disabled=true;
    }
   }
  }
  }  
}
//tie function
let tie=document.createElement("h1");
const checkTie=()=>{
  for(let k=0;k<8;k++){ 
if((btn[arr[k][0]].innerText!="") &&(btn[arr[k][1]].innerText!="") &&(btn[arr[k][2]].innerText!="")){
continue;
}
else{
  return ;
}}
  for(let k=0;k<8;k++){  
    if(((btn[arr[k][0]].innerText!=btn[arr[k][1]].innerText) && (btn[arr[k][1]].innerText!=btn[arr[k][2]].innerText)&& (btn[arr[k][0]].innerText!=btn[arr[k][2]].innerText)) ){
    tie.innerText="GAME IS TIE";
    document.body.prepend(tie);
    return;
  }
  
}
}

//reset button control
let btnreset=document.querySelector("#reset-btn");
btnreset.onclick=()=>{
   j=0;
   for(let k=1;k<10;k++){
    btn[k].innerText="";
    btn[k].disabled=false;
   }
   win.remove();
   tie.remove();
}
