const panels = document.querySelectorAll('.Panel')

panels.forEach((Panel) =>{
Panel.addEventListener('click', ()=>{
    removeActiveClass()
      Panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(Panel=>{
        Panel.classList.remove('active')
    })
}