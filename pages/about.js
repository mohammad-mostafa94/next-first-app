import React from 'react'
import Header from '../components/Header'

export default function about() {
  return (
    <div><h1>This is about page</h1></div>
  )
}

about.getLayout = function getLayout(page) {
  return (
    <>
    <Header/>
      {page}
    </>
  )
}