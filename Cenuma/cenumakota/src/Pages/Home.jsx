import React from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import { actionmovies, comedymovies, documentarymovies, horrormovies, netflixorginals, popularimgURL, romancemovies, tendingmovies, topratedURL, upcomingURL } from '../Constants/Constant'
import Cards from '../Components/Cards'

function Home() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Cards title="TRENDING" URL = {tendingmovies}/>
      <Cards title="POPULAR" URL = {popularimgURL}/>
      <Cards title="UPCOMMING" URL = {upcomingURL}/>
      <Cards title="TOP RATED" URL = {topratedURL}/>
      <Cards title="ORGINALS" URL = {netflixorginals}/>
      <Cards title="ACTION" URL = {actionmovies}/>
      <Cards title="COMEDY" URL = {comedymovies}/>
      <Cards title="HORROR" URL = {horrormovies}/>
      <Cards title="ROMANCE" URL = {romancemovies}/>
      <Cards title="DOCUMENTARY" URL = {documentarymovies}/>

    </div>
  )
}

export default Home