import styles from './styles.module.scss'

export function Page_exibir_produto(){
    return(
        
        <div className={styles.container_produto}>

            <div className={styles.texto_produto}>
             <h1>Produto</h1> 
             <hr />
             </div>

         <div className={styles.container_exibir_produto}>
             <div className={styles.input_pesquisa}>
                    <input type="text" placeholder='Digite o nome ou código do produto'/>
                    <img src="/src/image/icons8-pesquisar-32.png" alt="" />
             </div>
                     
             <div className={styles.btn_adicionar}>
                    <button>Adicionar</button>
             </div>
         </div>

         <div className={styles.container_tabela_Produtos}>

             <table>
                 <td>Produtos</td>
             </table>

         </div>

        </div>
    )
}