import React from 'react';

const SanPham = () => (
  <div className='main ' style={{ marginTop: '165px', marginLeft:"470px" }}>
  <div className='container-fluid' style={{ width: '1550px' }} >
  <div className="row row-cols-md-4 g-4">
      {[
        { title: 'Phi hành gia cho chó mèo LOFFE', image: require('../assets/food_play/balo.png'), price: '435.000₫', originalPrice: '725.000₫' },
        { title: 'Bóng đồ chơi cho chó mèo BOBO', image: require('../assets/food_play/bobo.png'), price: '45.000₫' },
        { title: 'Đồ chơi chó mèo bằng bông chút chít', image: require('../assets/food_play/chut-chit.png'), price: '190.000₫' },
      ].map((cardData, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
            {cardData.title === 'Phi hành gia cho chó mèo LOFFE' && (
              <div className="corner-overlay" style={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: '20%',
                height: '20%',
                backgroundColor: 'red',
                transform: 'rotate(0deg)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
              }}>
                <div>-40%</div>
              </div>
            )}
            <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
                <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
                  {cardData.title === 'Phi hành gia cho chó mèo LOFFE' && 'Balo '} {cardData.title}
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
    { title: 'Đồ chơi cho mèo BOBO BO4804 ', image: require('../assets/food_play/meo-bobo.png'), price: '110.000₫' },
    { title: 'Đồ chơi cần câu cho mèo PAW vui nhộn ', image: require('../assets/food_play/can-cau-meo.png'), price: '75.000₫' },
    { title: 'Nhà nhựa cho chó mèo hình quả trứng ', image: require('../assets/food_play/nha-trung.png'), price: '900.000₫' },
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
    { title: 'Nhà nhựa cho chó lớn IRIS ', image: require('../assets/food_play/nha-nhua.png'), price: '2.750.000₫' },
    { title: 'Nhà cho chó dáng cao XINDING 419 ', image: require('../assets/food_play/xinding.png'), price: '1.980.000₫' },
    { title: 'Lược chải lông cho chó mèo FURMINATOR ', image: require('../assets/food_play/furminato.png'), price: '779.000₫' },
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
    { title: 'Dây dắt cho chó mèo tự động DELE 003 ', image: require('../assets/food_play/dele.png'), price: '435.000₫' },
    { title: 'Tã bỉm cho chó mèo đực DONO Small ', image: require('../assets/food_play/dono.png'), price: '105.000₫' },
    { title: 'Vòng cổ cho chó ', image: require('../assets/food_play/xich-cho.png'), price: '120.000₫' },
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
  <div className='main ' style={{ marginTop: '165px' }}>
  <div className='container-fluid' style={{ width: '1550px' }} >

</div>
      </div>
  </div>
</div>
);

export default SanPham;

