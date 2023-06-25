import React, { FC } from 'react'
import Navbarmenu from '@organisms/Navbarmenu'
import Wrapper from '@atoms/Wrapper'
import Footer from '@organisms/Footer'
import AboutUs from '@organisms/AboutUs'

interface Props {}

const About: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <AboutUs />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default About