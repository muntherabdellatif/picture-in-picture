const videoElement =document.getElementById('video');
const Btn = document.getElementById("button");

// select and play the video 

async function selectMediaScreen () {
    try {
        // using screen capture API
        // 1 catch the vedio
        const mediaScreen = await navigator.mediaDevices.getDisplayMedia();
        // 2 putting the video on the screen 
        videoElement.srcObject = mediaScreen ;
        // 3 play the video when loaded
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

Btn.addEventListener("click",async (b)=>{
    Btn.disabled=true ;
    await videoElement.requestPictureInPicture();
    Btn.disabled=false ;
})

// onload 
selectMediaScreen();