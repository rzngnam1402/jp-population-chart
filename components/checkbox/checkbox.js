import styles from './checkbox.module.css'

const Checkbox = () => {
    return (
        <div className='container'>
            <div className="boxes">
                <div className='box'>
                    <input type="checkbox" id="director" />
                    <label htmlFor="director" ><h1>DIRECTOR</h1></label>
                </div>
            </div>
            <button type="text" className="submit" onClick={(event) => handleSubmit(event)}>Submit</button>
        </div >
    )
}

export default Checkbox