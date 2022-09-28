document.getElementById('header-container').style = 'background-color: rgb(80, 173, 111);';
document.getElementsByTagName('footer')[0].style = 'background-color: rgb(20, 52, 51);';
document.getElementsByClassName('emergency-tasks')[0].style = 'background-color: rgb(243, 163, 138);';
document.querySelector('.emergency-tasks h3').style = 'background-color: rgb(151, 29, 234);';
document.querySelectorAll('.emergency-tasks h3')[1].style = 'background-color: rgb(151, 29, 234);';
document.getElementsByClassName('no-emergency-tasks')[0].style = 'background-color: rgb(245, 220, 114);';
let size = document.querySelectorAll('.no-emergency-tasks h3').length;
for (let index = 0; index < size; index++) {
    document.querySelectorAll('.no-emergency-tasks h3')[index].style = 'background-color: rgb(35, 37, 37);';
}

