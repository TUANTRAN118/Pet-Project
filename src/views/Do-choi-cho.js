import React from 'react';

const DogPlay = () => (
  <div className='main ' style={{ marginTop: '165px' }}>
  <div className='container-fluid' style={{ width: '1550px' }} >
  <div className="row">
      {[
        { title: 'Nhà nhựa cho chó mèo hình quả trứng', image: require('../assets/food_play/qua-trung.png'), price: '900.000₫' },
        { title: 'Nhà nhựa cho chó lớn IRIS', image: require('../assets/food_play/nha-nhua.png'), price: '2.750.000₫' },
        { title: 'Nhà cho chó dáng cao XINDING 419', image: require('../assets/food_play/xinding.png'), price: '1.980.000₫' },
      ].map((cardData, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
            <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
                <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
                  {cardData.title === ''} {cardData.title}
                </a>
              </p>
              <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>
                {cardData.originalPrice && <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{cardData.originalPrice}</span>}
                {cardData.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>


    <div className="row">
  {[
    { title: 'Lược chải lông cho chó mèo FURMINATOR', image: require('../assets/food_play/furminator.png'), price: '160.000₫' },
    { title: 'Dây dắt cho chó mèo tự động DELE 003', image: require('../assets/food_play/dele.png'), price: '420.000₫' },
    { title: 'Tã bỉm cho chó mèo đực DONO Small ', image: require('../assets/food_play/dono-small.png'), price: '130.000₫' },
  ].map((cardData, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
            <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
              {cardData.title}
            </a>
          </p>
          <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>{cardData.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="row">
  {[
    { title: 'Vòng cổ cho chó ', image: require('../assets/food_play/vong-cho.png'), price: '255.000₫' },
    { title: 'Túi đựng chó mèo ANIME hình họa tiết White Cats ', image: require('../assets/food_play/anime.png'), price: '300.000₫' },
    { title: 'Xẻng xúc phân chó mèo PAW bằng nhựa cao cấp ', image: require('../assets/food_play/xuc-cớt.png'), price: '40.000₫' },
  ].map((cardData, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
            <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
              {cardData.title}
            </a>
          </p>
          <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>{cardData.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
);

export default DogPlay;

