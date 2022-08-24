import styles from './checkbox.module.css'

const Checkbox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <input className={styles.input} type="checkbox" id="director" />
                    <label htmlFor="director" ><h1>DIRECTOR</h1></label>
                </div>
            </div>
        </div >
    )
}

export default Checkbox