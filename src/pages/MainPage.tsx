import React from 'react'
import { CatsAPI } from '../services/CatsService'
import { fetchCat } from '../store/reducers/ActionCreators'
import GuzlikGenerator from '../components/GuzlikGenerator'
import { useAppSelector } from '../hooks/redux'

const MainPage = () => {
  const { currentCat, catIsLoading, catError } = useAppSelector(
    (state) => state.catsSpawnReducer
  )
  const [addCat] = CatsAPI.useAddCatMutation()
  return (
    <>
      <p className='text-center text-2xl mt-5'>Листалка котиков</p>
      <div className='flex justify-center items-center pt-10'>
        <GuzlikGenerator
          currentGuzlik={currentCat}
          guzlikIsLoading={catIsLoading}
          guzlikError={catError}
          fetchGuzlik={fetchCat}
          addGuzlik={addCat}
        />
      </div>
    </>
  )
}

export default MainPage
