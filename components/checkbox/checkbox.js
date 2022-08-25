import { useState } from 'react';
import useSWR from 'swr'
import Chart from '../chart/chart';
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
        let nextState = [...checked];
        if (e.target.checked === true) {
            nextState.push({ id: e.target.id, name: e.target.name });
            checked = nextState;
        }
        else {
            checked = checked.filter(item => item.id !== e.target.id)
        }
        setChecked(checked)
        // console.log(checked);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.boxes}>
                    {data.map(item => (
                        <div key={item.prefName} className={styles.box}>
                            <input className={styles.input} name={item.prefName} type="checkbox" id={item.prefCode} onChange={e => handleChange(e)} />
                            <label htmlFor={item.prefCode} ><h2>{item.prefName}</h2></label>
                        </div>
                    ))}
                </div>
            </div >
            <Chart data={data} checked={checked} />
        </>

    )
}

export default Checkbox