import styles from './styles.module.scss'
import {MdDeleteForever, MdCreate} from 'react-icons/md'

export function Page_exibir_dados_agricultor(){
    return( 
        <div className={styles.container_agricultores}>

             <h1 className={styles.texto1}>Agricultores<hr/>
             <button className={styles.btn_adicionar}>Adicionar</button>
             </h1>
            
             <div className={styles.data_agricultores}>
                   <ul>
                       <li> <b>Nome:</b>  Jorge Lopes</li>
                       <li> <b>Endereço:</b>  Serrinha dos Pintos - RN</li>
                       <li> <b>Telefone:</b>  84 95555-5555</li>
                       <MdDeleteForever className={styles.excluir}/>  
                       <MdCreate className={styles.editar}/>
                   </ul>
             </div>

        </div>
    )
}