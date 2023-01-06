import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import React from 'react'
import { saveAs } from 'file-saver'
import { IGuzlik } from '../models/IGuzlik'
import CollectionItem from './CollectionItem'

interface CollectionProps {
  guzliks: IGuzlik[] | undefined
  error: FetchBaseQueryError | SerializedError | undefined
  isLoading: boolean
  deleteguzlik: (id: number) => any //Потом переделать
}

const GuzlikCollection = ({
  guzliks,
  error,
  isLoading,
  deleteguzlik,
}: CollectionProps) => {
  const handleDelete = async (id: number) => {
    await deleteguzlik(id).unwrap()
  }
  const handleInstall = async (guzlik: IGuzlik) => {
    try {
      let imageFormat = guzlik.image.split('.')
      await saveAs(
        guzlik.image,
        `guzlik${guzlik.id}.${imageFormat[imageFormat.length - 1]}`
      )
    } catch (e) {
      console.log('e: ', e, 'error: ', error)
    }
  }

  return (
    <div className='pt-10 text-center flex flex-wrap justify-center'>
      {isLoading && <p className='text-center text-2xl'>Идёт загрузка...</p>}
      {error && (
        <p className='text-center text-2xl text-red-500'>
          Непредвиденная ошибка
        </p>
      )}
      {!isLoading &&
        !error &&
        (guzliks?.length ? (
          guzliks.map((guzlik) => {
            return (
              <CollectionItem
                guzlik={guzlik}
                handleDelete={handleDelete}
                handleInstall={handleInstall}
              />
            )
          })
        ) : (
          <p className='text-center text-2xl'>
            Гузликов пока нету... Добавьте их чичас!
          </p>
        ))}
    </div>
  )
}

export default GuzlikCollection
