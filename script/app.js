
// navigation script
const navOpenBtn = document.querySelector("#hambugerBtn");
const navCloseBtn = document.querySelector("#btnClose");
const navElem = document.querySelector("nav");
let closeNavBar = document.querySelectorAll(".navbarTwo-link");

for(i = 0; i < closeNavBar.length; i++ ){
    closeNavBar[i].addEventListener('click', function (){
        navElem.classList.add("hide")
        document.getElementById("hambugerBtn").style.visibility = "visible";
       
    });
}

navOpenBtn.addEventListener('click', function(){
    navElem.classList.remove("hide")
 document.getElementById("hambugerBtn").style.visibility = "hidden";

})

navCloseBtn.addEventListener("click", function(){
    navElem.classList.add("hide")
    document.getElementById("hambugerBtn").style.visibility = "visible";

})

// feature speaker section
const featureSpeaker = () =>{
    const cardDetails = featureCardDetails;
    cardDetails .forEach((data) => {
        const featureSpeakerCardWrapper = document.querySelector(".speaker-Card-Wrapper")
        
        const speakerCardSec = document.querySelector('.speakerCard-sec')
        const speakerCard = document.createElement('div');
        const cardTextCont = document.createElement('div');
        const featureSpeakerSec = document.querySelector(".featureSpeaker-section");
        const featureSpeakerwrap = document.querySelector(".featureSpeaker-sec-wrapper");
        const featurespeakHead = document.querySelector(".featureSpeaker_heading");
        const featureSpeakertext = document.createElement('h1');
        const SpeakerImg = document.createElement('img');
        const speakerName = document.createElement('h2');
        const speakerJob = document.createElement('h4');
        const speakerJobDesc = document.createElement('p');
        const speakerLine = document.createElement('hr');
      

        featureSpeakerCardWrapper.classList.add('speaker-Card-Wrapper');
        speakerCardSec.classList.add('speakerCard-sec');
        speakerCard.classList.add('speakerCard');
        cardTextCont.classList.add('card-text-cont');
        featureSpeakertext.classList.add('featureSpeaker_text');
        SpeakerImg.classList.add('card_sec_img');
        speakerName.classList.add('card-speaker_name');
        speakerJob.classList.add('card_speaker-job');
        speakerJobDesc.classList.add('speaker-job-desc');
        SpeakerImg.setAttribute('src', data.speakerImage);
        speakerName.innerHTML = data.speakerName;
        speakerJob.innerHTML = data.speakerJob;
        speakerJobDesc.innerText = data.speakerJobDesc;
        cardTextCont.append(speakerName, speakerJob, speakerLine, speakerJobDesc);
        speakerCard.append(SpeakerImg, cardTextCont);
        speakerCardSec.append(speakerCard)
        featureSpeakerCardWrapper.append(speakerCardSec);
        featureSpeakerwrap.append(featurespeakHead, featureSpeakerCardWrapper);
        featureSpeakerSec.append(featureSpeakerwrap);

    });

}

window.onload = () => {
    featureSpeaker ();
  };
  

//   extra feature

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


const giveaway = document.querySelector(".course_time");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022,4,31,11,13,40);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();



let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = weekdays[day];

const futureTime = futureDate.getTime();

function getRemainingTime (){
  const today = new Date().getTime();
  const t = futureDate - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000; 
  const oneminute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days); 

  let hours = Math.floor((t % oneDay) / onehour);

  let minutes = Math.floor((t % onehour) / oneminute);
  let seconds = Math.floor((t % oneminute) / 1000);

  const values = [days,hours,minutes,seconds];

function format (item){
  if(item < 10 ){
    return item = `0${item}`
  }
  return item;
}

item.forEach(function(item, index){
item.innerHTML = format(values[index]); 

});
  if(t < 0){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry, This promotion has expired!!!</h4>`
  }

}

let countDown = setInterval(getRemainingTime, 1000)

getRemainingTime()