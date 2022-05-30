import styles from './styles.module.scss'
import { Page_exibir_produto } from '../Page_exibir_produto'


export function MenuBox(){
    return(

        <div >
        <div className={styles.container_menu}>

           <ul>
            <li className={styles.menu_itens}><a type='button' href="#"> 
            <img className={styles.image_menu} src="/src/image/icons8-envio-de-produto-48.png" alt="" />
            Produtos</a> 
            </li>

            <li className={styles.menu_itens}><a type='button' href="#">
            <img className={styles.image_menu} src="/src/image/icons8-colar-64.png" alt="" />
            Estoque</a>
            </li>

            <li className={styles.menu_itens}><a type='button' href="#">
            <img className={styles.image_menu} src="/src/image/icons8-carrinho-de-compras-64.png" alt="" />
            Compras</a> 
            </li>
           </ul>

        </div>

      {/*
        <div className={styles.texto_bem_vindo}>
        <h1>Bem-vindo!</h1>
        </div>
    */}
         
        <Page_exibir_produto/>

        </div>
    )
}