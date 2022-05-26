
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
  
