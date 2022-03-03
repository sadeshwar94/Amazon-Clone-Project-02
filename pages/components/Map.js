import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from "mapbox-gl";
import {useEffect} from 'react'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [135.5375, 34.7940],
            zoom: 11.1,
        })
    })
  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`