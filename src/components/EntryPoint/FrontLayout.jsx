import React from 'react';
import ImageSlider from '../ImageSlider';
import Cta from '../Cta';
import Stats from '../Stats';

const Layout = ({ images }) => {
  return (
    <div>
      <ImageSlider images={images} />
      <Stats/>
      <Cta />
    </div>
  );
};

export default Layout;