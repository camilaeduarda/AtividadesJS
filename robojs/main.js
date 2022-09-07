document.querySelector('body').addEventListener('keydown', function(event) {
    const movi = document.getElementById('movimento')
    if(event.key == 'ArrowUp'){
        movi.innerHTML = 'Andou para cima'
    }else if(event.key == 'ArrowDown'){
        movi.innerHTML = 'Andou para baixo'
    }else if(event.key == 'ArrowLeft'){
        movi.innerHTML = 'Andou para esquerda'
    }else if(event.key == 'ArrowRight'){
        movi.innerHTML = 'Andou para direita'
    }
});