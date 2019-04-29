//Scrolly.Js
window.onload = function(){
    scrolly();
}
//GreenSock Animation
pulseShake = new TimelineMax({delay:1, repeat:1, repeatDelay:1});
pulseShake
  .to(".pulseShake", 0.4, {css:{scale:1}})
  .to(".pulseShake", 0.08, {css:{scale:1.2}})
  .to(".pulseShake", 0.02, {css:{scale:1}})
  .to(".pulseShake", 0.08, {css:{scale:1.2}})
  .to(".pulseShake", 0.02, {css:{scale:1}});


// Charts.js
  var ctx = document.getElementById('myChart').getContext('2d');

//doughnut chart
var myDoughnutChart = new Chart(ctx, 
    {"type":"doughnut",
    "data":{
    "labels":["Savings","Research Time","Community Likes"],
    "datasets":[{
    "label":"My First Dataset",
    "data":[300,50,100],
    "backgroundColor":["rgba(68, 94, 147, 1)","rgba(126, 178, 221, 1)","rgba(115, 98, 138, 1",
      ]}
    ]},
    options:{
        title:{display:true, text:"Average REVO User Feenback" },
       animation: {
            animateScale: true
         }
    }
  }
);