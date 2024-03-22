import React from 'react'
import Banner from './Banner/Banner'
import Popular from './Popular/Popular'
import Offers from './Offers/Offers'
import NewCollections from "./NewCollections/NewCollections"
import Newsletter from './Newsletter/Newsletter'
function Shop() {
  return (
    <div>
      <Banner />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}

export default Shop