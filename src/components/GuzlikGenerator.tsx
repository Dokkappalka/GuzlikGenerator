import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'

interface GeneratorTypes {
  currentGuzlik: string
  guzlikIsLoading: boolean
  guzlikError: string
  addGuzlik: ({ image }: { image: string }) => void
  fetchGuzlik: () => any //Потом переделать
}

const GuzlikGenerator = ({
  currentGuzlik,
  guzlikIsLoading,
  guzlikError,
  addGuzlik,
  fetchGuzlik,
}: GeneratorTypes) => {
  const dispatch = useAppDispatch()
  const [save, setSave] = useState(false)
  const addButtonHandler = async () => {
    try {
      await addGuzlik({ image: currentGuzlik })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    dispatch(fetchGuzlik())
  }, [])
  useEffect(() => {
    setSave(false)
  }, [currentGuzlik])
  return (
    <div className='text-center'>
      {guzlikError && (
        <p className='h-[500px] flex items-center justify-center] text-red-500 text-2xl'>
          {guzlikError}
        </p>
      )}
      {guzlikIsLoading && (
        <p className='h-[500px] flex items-center justify-center text-2xl'>
          Loading...
        </p>
      )}
      {!guzlikError && !guzlikIsLoading && (
        <>
          <img
            src={currentGuzlik}
            className='h-[500px] rounded border shadow-md'
          />
          <div className='flex justify-between items-center w-full min-w-[256px]'>
            <button
              className={
                (guzlikIsLoading ? ' bg-pink-200 ' : ' bg-pink-400 ') +
                'border py-1 px-2 rounded mt-3 hover:bg-pink-200 duration-200'
              }
              onClick={() => {
                dispatch(fetchGuzlik())
              }}
              disabled={guzlikIsLoading}
            >
              {guzlikIsLoading ? 'Гузлик загружаетсся' : 'Поменять гузлика'}
            </button>
            <button
              className='border py-1 px-2 rounded mt-3 bg-pink-400 hover:bg-pink-200 duration-200'
              onClick={() => {
                setSave(true)
                addButtonHandler()
              }}
              disabled={save}
            >
              {save ? 'Гузлик сохранен!' : 'Сохранить'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default GuzlikGenerator
