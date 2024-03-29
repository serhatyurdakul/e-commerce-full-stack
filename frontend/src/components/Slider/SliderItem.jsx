const SliderItem = () => {
  return (
    <div className='slider-item fade'>
      <div className='slider-image'>
        <img
          src='img/slider/slider1.jpg'
          className='img-fluid'
          alt=' slider image'
        />
      </div>
      <div className='container'>
        <p className='slider-title'>SUMMER 2024</p>
        <h2 className='slider-heading'>Save up to 70%</h2>
        <a href='#' className='btn btn-lg btn-primary'>
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
