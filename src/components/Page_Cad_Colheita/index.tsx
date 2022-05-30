import styles from './styles.module.scss'

export function Page_Cad_Colheita(){
    return(
        <div className={styles.container_cadastro_colheita}>
        <h1 className={styles.texto1}>Cadastro da Colheita<hr/></h1>
             
          <form className={styles.form_cad_colheita} action="">
        
        <div className={styles.container_dados_veiculo}>

            <form className={styles.form_cad_colheita} action="">

            <div className={styles.select_agricultura}>
                    <label htmlFor="#"> Tipo de Agricultura:</label>

                    <select name="tipo_agricultura" id="agricultura" required>
                         <option value="Grãos">Feijão</option>
                         <option value="Legumes">Milho</option>
                         <option value="Hortaliças">Arroz</option>
                    </select>

                    <input type="text" placeholder='Digite a quantidade da colheita'/>
            </div>

            </form>
    </div>
    
    </form>

    <div className={styles.container_button}>
    <button className={styles.salvar}>Salvar</button>
    <button className={styles.cancelar}>Cancelar</button>
    </div>
    
    </div>

    )
}