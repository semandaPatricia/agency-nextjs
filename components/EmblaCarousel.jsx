"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  const images = [

    "https://pbs.twimg.com/media/GMjyD7eXwAAKrNx?format=jpg&name=small",
    "https://images.pexels.com/photos/7316632/pexels-photo-7316632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12540814/pexels-photo-12540814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9563749/pexels-photo-9563749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://pbs.twimg.com/media/GMjw-3WWIAAlheX?format=jpg&name=small",
    "https://images.pexels.com/photos/7316632/pexels-photo-7316632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12540814/pexels-photo-12540814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9563749/pexels-photo-9563749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",


    // Add more image URLs as needed
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src,index) => (
            <div className="embla__slide" key={index}>
                <img
                src={src}
                className='embla__slide__img'
                alt ={`Slide ${index + 1} `}
                />
             </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play " onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel