
const menu = document.querySelector('#menu-button')
const usuraio_button = document.querySelector('#usuario-button')

//Menu-Burger
if(menu){
    menu.addEventListener("click",()=>{
        console.log("clicado!")
        if(document.querySelector("#menu-content").style.display==""){
            document.querySelector("#menu-content").style.display="block"
        }else{
            document.querySelector("#menu-content").style.display=""
        }
        
    })
}
//Icone Usuario
usuraio_button.addEventListener("click",()=>{

    
    if(document.querySelector("#usuario-area").style.display == ""){

        document.querySelector("#usuario-area").style.display = "flex"
    }else{
        document.querySelector("#usuario-area").style.display = ""
    }   

})

document.querySelector('#notificacao-button').addEventListener('click', ()=>{
    if(document.querySelector('#notificacao-area').style.display == ""){

        document.querySelector('#notificacao-area').style.display = 'block'
    }else{

        document.querySelector('#notificacao-area').style.display = ''
    }
})