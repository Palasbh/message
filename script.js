x = document.getElementById('touch')
but = document.getElementById('button')
rem = document.getElementById('remove')

but.addEventListener('click', ()=>{
    x.style.display = 'none'
    rem.style.display = 'block'
    play = new Audio('song.mp3')
    play.play(); 
})
