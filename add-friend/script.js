let stats = document.querySelector("h5");
let btn = document.querySelector("button");
let flag = 0;

btn.addEventListener("click", function(){
  if (flag===0){
    stats.innerHTML = "Friends";
    stats.style.color = "Green";
    btn.innerText = "Remove";
    flag=1;
  }else{
    stats.innerHTML = "Strangers";
    stats.style.color = "Red";
    btn.innerText = "Add Friend";
    flag=0;
  }

})