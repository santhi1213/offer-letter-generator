window.onload = function(){
   const downloadBtn= document.getElementById("downloadBtn");
   const offerLetter = document.getElementById('offerLetter');
   const window = document.getElementById('body');
   downloadBtn.addEventListener("click", ()=>{
        downloadBtn.style.display='none';
        fields.style.display = 'none';
        offerLetter.style.marginLeft = '15%';
        console.log(window);
        html2pdf().from(window).save();
    })
}