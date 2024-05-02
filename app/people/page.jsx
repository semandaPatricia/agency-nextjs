import React from 'react'
import EmblaCarousel from '../../components/EmblaCarousel'
import '../../css/base.css'
import ScrollWords from '@/components/ScrollWords'

import '../../css/embla.css'
const OPTIONS = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const People = () => {
  return (
    <div className='bg-black text-white '>
      <ScrollWords/>
      <h1 className='flex justify-center text-2xl mb-6' style={{ color: '#ece77b' }}>Meet our team</h1>

   
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    <div className='m-10'>
<p>“We are a small team , specializing in developing modern products that push the boundaries of design. We help small businesses, startups, and other brands to grow and win by turning ideas into functional solutions.</p>
<br/>
<p>We closely collaborate with our clients to understand the needs and goals of the product, as communication is the key to the success of any project.“ </p>
    </div>
   
    </div>
  )
}

export default People