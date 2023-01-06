import React, { useState, useEffect } from 'react'
import GuzlikCollection from '../components/GuzlikCollection'
import { DogsAPI } from '../services/DogsService'

const DogsCollectionPage = () => {
  const { data: dogs, error, isLoading } = DogsAPI.useFetchAllDogsQuery(10)
  const [deleteDog] = DogsAPI.useDeleteDogMutation()
  return (
    <>
      <p className='text-center text-2xl mb-5 mt-5'>Коллекция собакогузликов</p>
      <GuzlikCollection
        guzliks={dogs}
        error={error}
        isLoading={isLoading}
        deleteguzlik={deleteDog}
      />
    </>
  )
}

export default DogsCollectionPage
