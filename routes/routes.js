import { Router } from "express"

import {get_produto, salvar_produto} from '../controller/produtos_controller.js'

import { autenticacao } from "../controller/login_controller.js"
import { salvar_conta } from "../controller/criar_conta_controller.js"
import { salvar_carrinho, buscar_carrinho, excluir_carrinho } from "../controller/adicionar_carrinho_controller.js"
import { exibirPerfil, salvarCartao, salvarEndereco} from "../controller/perfil_controller.js"
import { finalizar_compra, registrar_compra } from "../controller/finalizar_compra_controller.js"

const router = Router()


//Página Principal
router.get('/',(req,res)=>{  
    if(req.session.login){
        if(req.session.login.usuario == 'admin'){
            res.render('index',{title: "Home", usuario:req.session.login.usuario, notificacao: req.session.login.notificacao, admin:true})
        }
        res.render('index',{title: "Home",usuario:req.session.login.usuario, notificacao: req.session.login.notificacao})    
    }else{
        res.render('index',{title: "Home",usuario:undefined})
    }   
    
})

//Página Login
router.get('/login', (req,res)=>{
    res.render('login',{title:'Login'})   
})

//Rota para validar login
router.post('/login-auth', autenticacao)

//Deslogar
router.get('/sair',(req,res)=>{
    req.session.destroy((erro)=>{
        if(erro) erro
        else res.redirect('/')
    })
})


//Cadastro de usuario
router.get('/criar-conta',(req,res)=>{
    res.render('criar_conta',{title: 'Criar Conta',erro:undefined})
})

router.post('/salvar-conta', salvar_conta)


//Página Cadastrar Produtos
router.get("/cadastrar-produtos", (req,res)=>{
res.render('cadastrar_produtos',{ title: 'Cadastrar Produtos'})  
})

router.post('/salvar-produto', salvar_produto)


//Retorna Produtos do Banco
router.get('/produto-salvo/api',get_produto)


//Adicionar produto no carrinho pela modal
router.get('/adicionar-carrinho', salvar_carrinho)

//Página do carrinho
router.get('/carrinho', buscar_carrinho)

//Rota que exclui produtos do carrinho
router.get('/excluir-carrinho', excluir_carrinho)

router.get('/perfil', exibirPerfil)

router.post('/salvar-endereco', salvarEndereco)

router.post('/salvar-cartao', salvarCartao)

router.get('/finalizar-compra',finalizar_compra)

router.get('/compra-finalizada', registrar_compra)


export default router