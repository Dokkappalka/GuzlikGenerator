import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [guzlikList, setGuzlikList] = useState(false)
  const [collectionList, setCollectionList] = useState(false)
  const linkClasses =
    'h-full flex items-center justify-center px-2 hover:bg-pink-200 duration-200 '
  return (
    <div className='bg-pink-400 flex justify-between items-center pl-3 h-[50px] shadow-md'>
      <p className='font-bold text-xl'>GuzlikGenerator</p>
      <span className='flex items-center h-full font-semibold mr-1'>
        <div
          className='h-full w-full'
          onMouseOver={() => {
            setGuzlikList(true)
          }}
          onMouseOut={() => {
            setGuzlikList(false)
          }}
        >
          <button className={linkClasses + 'w-[150px]'}>Guzliks ˅</button>
          <div
            className={
              (guzlikList ? 'absolute ' : 'hidden ') +
              'bg-pink-300 rounded w-[150px] shadow-md'
            }
          >
            <Link
              to='/'
              className={linkClasses + 'h-10 mb-4'}
              onClick={() => {
                setGuzlikList(false)
              }}
            >
              Random Cats
            </Link>
            <Link
              to='/dogsPage'
              className={linkClasses + 'h-10'}
              onClick={() => {
                setGuzlikList(false)
              }}
            >
              Random Dogs
            </Link>
          </div>
        </div>
        <div
          className='h-full w-full'
          onMouseOver={() => {
            setCollectionList(true)
          }}
          onMouseOut={() => {
            setCollectionList(false)
          }}
        >
          <button className={linkClasses + 'w-[150px]'}>Collections ˅</button>
          <div
            className={
              (collectionList ? 'absolute ' : 'hidden ') +
              'bg-pink-300 rounded w-[150px] shadow-md'
            }
          >
            <Link
              to='/collection'
              className={linkClasses + 'h-10 mb-4'}
              onClick={() => {
                setCollectionList(false)
              }}
            >
              Cats collection
            </Link>
            <Link
              to='/dogsCollection'
              className={linkClasses + 'h-10'}
              onClick={() => {
                setCollectionList(false)
              }}
            >
              Dogs collection
            </Link>
          </div>
        </div>
      </span>
    </div>
  )
}

export default Header
