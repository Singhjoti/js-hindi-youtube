const clock = document.getElementById('clock');
// const clock = ducument.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); in this method time was show in the console box and jitna bar refresh krege time utni bar chnage hga 
  //but bar bar run ho or date chnge bar bar ho to hum usme set interval ka use karte hai  
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);