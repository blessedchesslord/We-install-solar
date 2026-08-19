const ham = document.getElementById(`ham`);
const close = document.getElementById(`close`);
const menuClose = document.getElementById(`menuClose`);


ham.addEventListener(`click`, function(){
    menuClose.style.display = `block`;
})

close.addEventListener(`click`, function(){
    menuClose.style.display = `none`;
})