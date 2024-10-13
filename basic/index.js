const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6;i++){
        color += hex[Math.floor(math.random() * 16)];
    }
    return color;
}

const startChangingColor = function(){
document.body.style.backgroundColor = randomColor();
};
const stopChainingColor = function(){

};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('stop').addEventListener('click', stopChainingColor);