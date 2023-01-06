import React from 'react'
import { IGuzlik } from '../models/IGuzlik'

interface CollectionItemPtops {
  guzlik: IGuzlik
  handleDelete: (id: number) => void
  handleInstall: (guzlik: IGuzlik) => void
}

const CollectionItem = ({
  guzlik,
  handleDelete,
  handleInstall,
}: CollectionItemPtops) => {
  return (
    <div className='px-3 pt-3 pb-2 inline text-center border rounded m-2 bg-purple-200 bg-gradient-to-l from-pink-200'>
      <img src={guzlik.image} className='h-[256px] w-[256px]' />
      <div className='flex justify-between items-center'>
        <button
          className='rounded border bg-red-500 text-white mt-3 px-3 py-1 hover:bg-red-300 duration-200'
          onClick={() => {
            handleDelete(guzlik.id)
          }}
        >
          Убить гузлика
        </button>
        <button
          className='rounded border bg-green-500 px-3 py-1 mt-3 text-white hover:bg-green-300 duration-200'
          onClick={() => {
            handleInstall(guzlik)
          }}
        >
          Усыновить
        </button>
      </div>
    </div>
  )
}

export default CollectionItem
