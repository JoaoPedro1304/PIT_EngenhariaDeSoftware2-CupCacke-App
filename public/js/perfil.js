const janela_modal_endereco = document.querySelector('#janela-modal-endereco')
const janela_modal_cartao = document.querySelector('#janela-modal-cartao')
const area_perfil = document.querySelector("#area-perfil")
const endereco = [...document.querySelectorAll('#endereco p')]

//Janela Modal Endereço
area_perfil.querySelector('#adicionar-editar-endereco').addEventListener('click',()=>{

    if(janela_modal_endereco.style.display == ""){
        janela_modal_endereco.style.display = "flex"
    }    

})

janela_modal_endereco.querySelector('#cancelar-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    janela_modal_endereco.style.display = ""
})


//Janela Modal Cartão
area_perfil.querySelector('#adicionar-editar-cartao').addEventListener('click',()=>{

    if(janela_modal_cartao.style.display == ""){
        janela_modal_cartao.style.display = "flex"
    }    

})
janela_modal_cartao.querySelector('#cancelar-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    janela_modal_cartao.style.display = ""
})

