let col1=document.querySelector('#col1')

let col2=document.querySelector('#col2')

let btn=document.querySelector('#btn')

let cursos=[...document.querySelectorAll('#curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        let cursoSeleccionado=evt.target
        cursoSeleccionado.classList.toggle('seleccionado')
    })
})

btn.addEventListener('click',()=>{
    let seleccionado=[...document.querySelectorAll('.seleccionado')]
    seleccionado.map((el)=>{
        col2.appendChild(el)
    })

    let n_seleccionado=[...document.querySelectorAll('#curso:not(.seleccionado)')]
    n_seleccionado.map((el)=>{
        col1.appendChild(el)
    })
    
})


// Obrigado por assistir o vídeo e até o próximo vídeo!!!

