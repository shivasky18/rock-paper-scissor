let imgs = document.querySelectorAll("img");
let btn=document.querySelector("button")
let arr=["paper","scissor","rock"]
let mychoice=""
let myScore=document.querySelector(".myScore span")
let ComScore=document.querySelector(".comScore span")
myScore.innerHTML=0
ComScore.innerHTML=0
let mScore=0
let cScore=0
imgs.forEach((img) => {
  img.addEventListener("click",(e)=>{
    mychoice=e.target.id
    imgs.forEach((img)=>{img.classList.remove("selected")})
    e.target.classList.add("selected")
  });
});
btn.addEventListener("click",()=>{
    let ComChoice=getRandomChoice()
    console.log(mychoice,ComChoice)
    if(mychoice==ComChoice){
        alert("IT IS A DRAW")
        btn.innerHTML="IT IS A DRAW"
    }else{
        if((mychoice=="paper" && ComChoice=="rock")||(mychoice=="rock" && ComChoice=="scissor")||(mychoice=="scissor" && ComChoice=="paper")){
            mScore+=1
            myScore.innerHTML=mScore
            btn.innerHTML="YOU WON ,TRY NEXT !"
            alert(`You Won .Computer chosen ${ComChoice}`)
        }else{
            cScore+=1
            ComScore.innerHTML=cScore
            btn.innerHTML="YOU LOST ,BETTER LUCK NEXT TIME !"
            alert(`You Lost .Computer chosen ${ComChoice}`)
        }
    }
    document.querySelector(".selected").classList.remove("selected")

})
function imgClicked() {
  console.log("grhtr");
}
const getRandomChoice= ()=>{
    return arr[Math.floor(Math.random()*3)]
}