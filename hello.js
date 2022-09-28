const canvas = document.querySelector('#canvas');
function draw() {
    

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();

}
draw();
document.addEventListener('keydown', function(event) {
    if(event == event.code.keyV) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});
