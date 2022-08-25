import { useState } from 'react';
import useSWR from 'swr'
import styles from './checkbox.module.css'

const Checkbox = () => {
    const [checked, setChecked] = useState([]);
    const { data, error } = useSWR('api/prefcode', (url) => fetch(url).then(res => res.json()));
    if (error) return <div>An error occured.</div>
    if (!data) return
    (
        <div>
            <h1>Loading ...</h1>
        </div>
    )

    const handleChange = (e) => {
        if (e.target.checked === true) {
            checked.push(e.target.id);
        }
        else {
            checked = checked.filter(item => item !== e.target.id)
        }
        setChecked(checked)
        console.log(checked);
    }

    return (
        <div className={styles.container}>
            <div className={styles.boxes}>
                {data.map(item => (
                    <div key={item.prefName} className={styles.box}>
                        <input className={styles.input} type="checkbox" id={item.prefCode} onChange={e => handleChange(e)} />
                        <label htmlFor={item.prefCode} ><h2>{item.prefName}</h2></label>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Checkbox