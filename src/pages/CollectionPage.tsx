import React, { useState, useEffect } from 'react'
import GuzlikCollection from '../components/GuzlikCollection'
import { CatsAPI } from '../services/CatsService'

const CollectionPage = () => {
  const { data: cats, error, isLoading } = CatsAPI.useFetchAllCatsQuery(10)
  const [deleteCat] = CatsAPI.useDeleteCatMutation()

  return (
    <>
      <p className='text-center text-2xl mb-5 mt-5'>Коллекция котогузликов</p>
      {!isLoading && !error && cats?.length && (
        <p className='text-center block text-xl mt-3'>
          Котят нельзя усыновить по нажатию кнопки из-за настроек API сервера.
        </p>
      )}
      <GuzlikCollection
        guzliks={cats}
        error={error}
        isLoading={isLoading}
        deleteguzlik={deleteCat}
      />
    </>
  )
}

export default CollectionPage
