import CreateCarForm from './car-item-form/CreateCarForm.jsx'
import CarItem from './car-item/CarItem.jsx'
import {cars} from './cars.data.js'
import { useMemo } from 'react'

function Home() {
  const filteredCars = useMemo(() => cars.filter(car => car.price > 20000), [])

  return (
      <div>
        <h1>Cars catalog </h1>
        <CreateCarForm />
        <div>
          {filteredCars.length ? (
            filteredCars.map(car => <CarItem key={car.id} car=
              {car} />)
          ) : (
            <p>There are no cars</p>
          )}
        </div>
      </div>
  )
}

export default Home
