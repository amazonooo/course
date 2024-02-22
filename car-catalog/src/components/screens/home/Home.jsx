import styles from './Home.module.css'
import car1 from './1.webp'

function App() {
  return (
      <div>
        <h1>Cars catalog </h1>
        <div>
          <div className={styles.item}>
            <img src={car1} alt='car1' />
            <h2>Car 1</h2>
            <p>$100 000</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
  )
}

export default App
