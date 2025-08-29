
function heart_count_fun(id)
{
  document.getElementById(id)
.addEventListener("click",function(e){
  e.preventDefault();
  const heart_count_value = parseInt(document.getElementById("heart-count").innerText)
  document.getElementById("heart-count").innerText = heart_count_value + 1;
}) 
}
heart_count_fun("heart1")
heart_count_fun("heart2")
heart_count_fun("heart3")
heart_count_fun("heart4")
heart_count_fun("heart5")
heart_count_fun("heart6")
heart_count_fun("heart7")
heart_count_fun("heart8")
heart_count_fun("heart9")
