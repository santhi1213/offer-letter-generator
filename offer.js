var submit = document.getElementById('submit');
var letter = document.getElementById('offerLetter');
var downloadBtn = document.getElementById('downloadBtn');


function show(){
    letter.style.display = 'block';
    downloadBtn.style.display = 'block';
    var inputDate = document.getElementById('inputDate').value;
    let date = document.getElementById('date');
    var inputName = document.getElementById('inputName').value;
    let name = document.getElementById('name');
    var inputEmail = document.getElementById('inputEmail').value;
    let email = document.getElementById('email');
    var inputDomain = document.getElementById('inputDomain').value;
    let domain= document.getElementById('domain');
    var inputDuration = document.getElementById('inputPeriod').value;
    let duration = document.getElementById('duration');
    let dearName = document.getElementById('dearName');

    date.innerHTML = inputDate;
    name.innerHTML = inputName;
    email.innerHTML = inputEmail;
    domain.innerHTML = inputDomain;
    duration.innerHTML = inputDuration;
    dearName.innerHTML = inputName;

   


    
}