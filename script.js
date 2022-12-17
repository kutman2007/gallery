let panel = document.querySelectorAll('.paner')

panel.forEach((paner)=>{
    paner.addEventListener('click', () =>{
        paner.classList.toggle('active')
    })
})
