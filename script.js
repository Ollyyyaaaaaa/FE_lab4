const Text1 = document.getElementById('Text1');

Text1.addEventListener('click', function onClick(event) {
    const Text1 = document.getElementById('Text1');
    Text1.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
    Text1.style.color = '#' + (Math.random().toString(16) + "000000").substring(2,8);
});

document.querySelectorAll('Text2')
Text2.addEventListener('click', () => Text2.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8));
Text2.addEventListener('click', () => Text2.style.color = '#' + (Math.random().toString(16) + "000000").substring(2,8));

function imageAdd() {
    var img = new Image();
    img.src = 'images/viden.jpeg';
    img.style.width='1000px';
    var holder = document.getElementById('img2');
    holder.appendChild(img);
}

function bigger(){
    var holder = document.getElementById('img1');
    holder.style.width='1100px';
}

function smaller(){
    var holder = document.getElementById('img1');
    holder.style.width='800px';
}

function imageDelete() {
    var holder = document.getElementById('img2');
    document.body.removeChild(holder);
}