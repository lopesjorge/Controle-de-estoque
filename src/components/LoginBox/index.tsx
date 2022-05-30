import { useState } from 'react'
import styles from './styles.module.scss'

export function  LoginBox(){
    const [email, setEmail] = useState ("")
    const [password,setPassword] = useState ("")

    return(
          <div className={styles.container}>
                <div className={styles.container_login}>
                     <div className={styles.wrap_login}>
                           <form className={styles.login_form}>

                               <div className={styles.logo_login}>
                               <span className={styles.title_login_img}>
                                   <img src="/src/image/icons8-colar-64.png" alt="image-logo" />
                               </span>
                               <span className={styles.title_estoque}>Estoque</span>

                               </div>
                
                               <span className={styles.title_login}>
                                   Login
                               </span>

                               <div className={styles.wrap_input}>
                                   <input className={styles.input} type="email"/>
                                   <span className={styles.focus_input} data-placeholder= 'Email'></span>
                               </div>

                               <div className={styles.wrap_input}>
                                   <input className={styles.input} type="password"/>
                                   <span className={styles.focus_input} data-placeholder= 'Password'></span>
                               </div>

                               <div className={styles.container_login_form_btn}>
                                    <button className={styles.login_form_btn}>Entrar</button>
                               </div>

                               <div className={styles.esqueceu_senha_cadastro}>
                                     <a href='#' className={styles.texto_1}>Esqueceu senha?</a>
                               </div>

                           </form>
                     </div>
                </div>
          </div>
    )
}