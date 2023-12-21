import React from 'react'
import Syles from './cardList.module.css'
import Pagination from '../pagination/Pagination'

function CardList() {
  return (
    <div className={Syles.container}>CardList
    <Pagination/></div>
  )
}

export default CardList