
import React from 'react';

import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain';
import HotelMain from '../../Components/HotelMain/HotelMain';
import HotelFaq from '../../Components/HotelFaq/HotelFaq';

const Hotel = () => {
  return (
    <div className="hotel-page">

      <BreadCrumMain
        title="Our Hotels"
        subtitle="Discover comfortable stays and memorable hospitality across Odisha."
      />

      <HotelMain/>
      <HotelFaq/>

    </div>
  );
};

export default Hotel;
