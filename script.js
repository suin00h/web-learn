const button = document.getElementById('darkToggle');
const hole = document.getElementById('hole');
const overlay = document.getElementById('overlay');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    hole.style.left = mouseX + 'px';
    hole.style.top = mouseY + 'px';
})

button.addEventListener('click', () => {
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'block';      
        button.innerText = "Light Mode!";  
    } else {
        overlay.style.display = 'none';
        button.innerText = "Dark Mode!";  
    }
});