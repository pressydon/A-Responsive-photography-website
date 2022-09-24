const slideImages = document.querySelector('.banner img');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar-right');
const quotationForm = document.querySelector('.quotation-form');
const replyFeedback = document.querySelector('.reply-feedback');
const replyFeedbackPara = document.querySelector('.reply-feedback p');
const nextButton = document.querySelectorAll('.next');
const pictureSlideContainer = document.querySelectorAll('.top-port');
const portfolioClick = document.querySelectorAll('.img-one');
const viewMoreClick = document.querySelectorAll('.view-more');
const backPortfolio = document.querySelectorAll('.back');
const eachPicture = document.querySelectorAll('.top-port img');
const fullimageContainer = document.querySelector('.image-fullscreen');
const fullImgImage = document.querySelector('.full-image');
const closeFullImage = document.querySelector('.port-close');
const faqTop = document.querySelectorAll('.faq-top');
const faqBottom = document.querySelectorAll('.faq-bottom');



const portClickContainer = document.querySelector('.port-home-container');
const eachPortfolio = document.querySelectorAll('.portfolio');




const webImage = document.querySelector('.body-right img');


console.log(document.documentElement.clientWidth <'1000')
//  const navbarContents = Array.from(navbar.children);
// navbarContents.forEach((navs)=>{
// //    console.log(navs)
//     navs.addEventListener('click',(e)=>{
//    console.log(navs)
//         if(e.target === navs && document.documentElement.clientWidth <'1000'){
//             console.log(e.target)
//              navbar.style.display = 'none';
//         }
//     })
// })
const navbarContents = Array.from(navbar.children);
navbarContents.forEach(navs=>{

    navbar.addEventListener('click',(e)=>{
        if( e.target === navs && document.documentElement.clientWidth <'1000'){
           console.log('YESSSSSS')
             navbar.style.display = 'none';
             close.style.display = 'none';
             menu.style.display = 'block';
        }
    })


})






//active
// const navArray = Array.from(navbar.children)
// navbar.addEventListener('click', e=>{
//     for(let k = 0; k < navArray.length; k++){
//         if(e.target =navArray[0]){
//             e.target.classList.add('active');
//             navArray[1].classList.remove('active');
//             navArray[2].classList.remove('active');
//             navArray[3].classList.remove('active');
//             navArray[4].classList.remove('active');
//         } else  if(e.target =navArray[1]){
//             e.target.classList.add('active');
//             navArray[0].classList.remove('active');
//             navArray[2].classList.remove('active');
//             navArray[3].classList.remove('active');
//             navArray[4].classList.remove('active');
//         } else  if(e.target =navArray[2]){
//             e.target.classList.add('active');
//             navArray[0].classList.remove('active');
//             navArray[1].classList.remove('active');
//             navArray[3].classList.remove('active');
//             navArray[4].classList.remove('active');
//         } else  if(e.target =navArray[3]){
//             e.target.classList.add('active');
//             navArray[0].classList.remove('active');
//             navArray[1].classList.remove('active');
//             navArray[2].classList.remove('active');
//             navArray[4].classList.remove('active');
//         } else  if(e.target =navArray[4]){
//             e.target.classList.add('active');
//             navArray[1].classList.remove('active');
//             navArray[2].classList.remove('active');
//             navArray[3].classList.remove('active');
//             navArray[0].classList.remove('active');
//         }
//     }
   
// })


//web developer
var webImagesArray = [
    'web-img/m1.png',
    'web-img/m2.png',
    'web-img/m3.png',
    'web-img/m4.png',
    'web-img/m5.png',
    'web-img/m6.png',
    'web-img/m7.png',
    'web-img/m8.png',
    'web-img/m9.png',
    'web-img/moon2.png'

];

var j = 0;
function webSlider(){
    if(j > webImagesArray.length-1){
        j=0;
    }
    webImage.src = webImagesArray[j];
    j++;
    setTimeout('webSlider()', 4000);
}




//photography

var images = new Array(
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/9.jpg",
    "images/10.jpg"
    
    
);
var len = images.length;
var i = 0;
function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImages.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}
menu.addEventListener('click', ()=>{
    navbar.style.display = 'flex';
    menu.style.display = 'none';
    close.style.display = 'block';
})
close.addEventListener('click', ()=>{
    navbar.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'none';
})


nextButton.forEach(function(next, i){
    const itemNumber = pictureSlideContainer[i].querySelectorAll('img').length;
    let clickCounter = 0;
    next.addEventListener('click',()=>{

        clickCounter++;

        if(itemNumber - (6 + clickCounter) >= 0){
            pictureSlideContainer[i].style.transform = `translateX(${
                pictureSlideContainer[i].computedStyleMap().get('transform')[0].x.value-280
            }px)`;
        } else {
            pictureSlideContainer[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }

        // console.log(pictureSlideContainer[i].computedStyleMap().get('transform'))
      
    });

});
//portfolio click
portfolioClick.forEach(function(port, i){
    
    port.addEventListener('click',()=>{
        portClickContainer.style.display = 'none';
        eachPortfolio[i].style.display = 'block';
    });
});

viewMoreClick.forEach(function(port, i){
    
    port.addEventListener('click',()=>{
        portClickContainer.style.display = 'none';
        eachPortfolio[i].style.display = 'block';
    });
});

//back from portfolio
backPortfolio.forEach(function(back, i){

    back.addEventListener('click', ()=>{
        eachPortfolio[i].style.display = 'none';
        portClickContainer.style.display = 'grid';

    })
})
//display fullimage


function fullPicture(pic){
    // eachPortfolio[i].style.display = 'none';
    fullimageContainer.style.left = '0';
    fullImgImage.src = pic;
}

// eachPicture.forEach(function(picture, i){

//     picture.addEventListener('click',e=>{
//         console.log(e.target)
//         fullimageContainer.style.display = 'block';
//         fullImgImage.src = e.target;
      
//     })
// })

//faq

faqTop.forEach(function(top,i){
    const upImage = document.querySelectorAll('.up-icon');
    const downImage = document.querySelectorAll('.down-icon');
        top.addEventListener('click', (e)=>{

           if(window.getComputedStyle(faqBottom[i]).display == 'block'){
            faqBottom[i].style.display = 'none';
            downImage[i].style.display = 'block';
            upImage[i].style.display = 'none';
           } else{

            downImage[i].style.display = 'none';
            upImage[i].style.display = 'block';
            faqBottom[i].style.display = 'block';
           }

          
    
        });
    });


    //qoutation
// quotationForm.addEventListener('submit',e=>{
//     e.preventDefault();
//     const fullName = quotationForm.fullname.value.trim(); 
//     const natureOfEvent = quotationForm.nature.value.trim(); 
//     const date = quotationForm.date.value.trim(); 
//     const sendQuote = quotationForm.quotation.value.trim(); 
//     const moreDetails = quotationForm.moreDetails.value.trim(); 
//     const duration = quotationForm.duration.value.trim(); 
//     const location = quotationForm.location.value.trim(); 
//     const checkbox1 = document.querySelector('input[name="checkPortrait"]:checked');
//     const checkbox2 = document.querySelector('input[name="checkPortrait2"]:checked');
//     const checkbox3 = document.querySelector('input[name="checkEvent"]:checked');
   

//     if(fullName && natureOfEvent && date && sendQuote && duration && moreDetails && checkbox1 && checkbox2 && checkbox3 && location){

//         quotationForm.style.display = 'none';

//         replyFeedback.style.display = 'flex';
//         replyFeedbackPara.innerHTML = `
//         <p>your quotation will be sent to <span>${sendQuote}</span> </p>
//         `;

//         console.log(fullName, natureOfEvent,date, sendQuote,moreDetails,duration,location,checkbox1,checkbox2,checkbox3)
//     }

//     quotationForm.reset()
// });


//close full image

// closeFullImage.addEventListener('click',function(){
  
//     fullimageContainer.style.left = '-1500px';
// });







