const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> ,{


}500);
}

document.addEventLister('keydown', jump);