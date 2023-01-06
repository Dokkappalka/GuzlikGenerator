import React from 'react'
import { DogsAPI } from '../services/DogsService'
import { fetchDog } from '../store/reducers/ActionCreators'
import GuzlikGenerator from '../components/GuzlikGenerator'
import { useAppSelector } from '../hooks/redux'

const MainPage = () => {
  const { currentDog, dogIsLoading, dogError } = useAppSelector(
    (state) => state.catsSpawnReducer
  )
  const [addDog] = DogsAPI.useAddDogMutation()
  return (
    <>
      <p className='text-center text-2xl mt-5'>Листалка пёсиков</p>
      <div className='flex justify-center items-center pt-10'>
        <GuzlikGenerator
          currentGuzlik={currentDog}
          guzlikIsLoading={dogIsLoading}
          guzlikError={dogError}
          fetchGuzlik={fetchDog}
          addGuzlik={addDog}
        />
      </div>
    </>
  )
}

export default MainPage
