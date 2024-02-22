import { useState } from 'react'
import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
    const [name, setName] = useState('')

    const createCar = e => {
        e.preventDefault()
        console.log(name)
    }
    

    return <form className={styles.form}>
        <input placeholder="Name" onChange={e => setName(e.target.value)} value={name}/>
        <input placeholder="Price" />
        <input placeholder="Image" />

        <button onClick={e => createCar(e)}>Create</button>
    </form>
}

export default CreateCarForm