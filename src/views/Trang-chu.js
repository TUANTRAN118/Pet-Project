// Home.js
import React from 'react';


const Home = () => (
  <div className='main ' style={{ marginTop: '165px' }}>
    <div className='container-fluid' style={{ width: '1550px' }} >


      <div className='row' >
        <div className='col-3' style={{ width: '305px' }}>
          <div className='item_1 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/dog_food.png')} alt="Pet Family" style={{ height: '40px', width: '40px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Thức ăn cho chó</p>
            </div>
          </div>

          <div className='item_2 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/cat_foot.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Thức ăn cho mèo</p>
            </div>
          </div>

          <div className='item_3 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/cat_toy.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Đồ chơi cho mèo</p>
            </div>
          </div>

          <div className='item_4 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/dog_toy.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Đồ chơi cho cho chó</p>
            </div>
          </div>

          <div className='item_5 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/rabbit_food.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Thức ăn cho thỏ </p>
            </div>
          </div>

          <div className='item_6 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/acess.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Phụ kiện</p>
            </div>
          </div>

          <div className='item_7 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/food_enhan.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Tăng cường thực phẩm</p>
            </div>
          </div>

          <div className='item_8 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('/pet-project/src/assets/Product_Categories_ic/herbs.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Thảo dược</p>
            </div>
          </div>

          <div className='item_9 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/tortoise.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>../

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Thức ăn cho rùa</p>
            </div>
          </div>

          <div className='item_10 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/treats.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Món ăn & nhai</p>
            </div>
          </div>

          <div className='item_11 row' style={{ height: '35px' }}>
            <div className='col-2 m-0 p-0'>
              <img src={require('../assets/Product_Categories_ic/canned.png')} alt="Pet Family" style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='col d-flex  align-items-center' style={{ fontSize: '20px', fontFamily: 'Robonto', fontWeight: '300' }}>
              <p className='m-0'> Thức ăn đóng hộp</p>
            </div>
          </div>
        </div>


        <div className='col bg-success' style={{ height: '450px' }}>
          <div className='row'>
            <div className='col-9 bg-danger p-0' >
              <div id="carouselExample" class="carousel slide" >
                <div class="carousel-inner" >
                  <div class="carousel-item active" >
                    <img src={require('../assets/slide/slider_1.webp')} class="d-block " alt="..." style={{ height: '450px', width: '100%', objectPosition: 'cover' }} />
                  </div>
                  <div class="carousel-item">
                    <img src={require('../assets/slide/slider_2.webp')} class="d-block " alt="..." style={{ height: '450px', width: '100%', objectPosition: 'cover' }} />
                  </div>
                  <div class="carousel-item">
                    <img src={require('../assets/slide/slider_3.webp')} class="d-block " alt="..." style={{ height: '450px', width: '100%', objectPosition: 'cover' }} />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

            </div>


            <div className='col bg-black' style={{ height: '450px' }} >
              <div className='row bg-danger p-0' >
                <img src={require('../assets/slide/quang_cao_1.webp')} class="d-block p-0 " alt="..." style={{ height: '225px', width: '100%' }} />
              </div>

              <div className='row bg-success p-0' >
                <img src={require('../assets/slide/quang_cao_2.webp')} class="d-block p-0 " alt="..." style={{ height: '225px', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5 d-flex justify-content-between ' >

        <div className='col-4 p-0   bg-black' style={{ width: '480px' }}>
          <img src={require('../assets/slide/home_banner1.webp')} alt="Pet Family" className='img-fluid ' style={{ objectFit: 'cover' }} />
        </div>../

        <div className='col-4 p-0   bg-black' style={{ width: '480px' }}>
          <img src={require('../assets/slide/home_banner2.webp')} alt="Pet Family" className='img-fluid ' style={{ objectFit: 'cover' }} />
        </div>

        <div className='col-4 p-0   bg-black' style={{ width: '480px' }}>
          <img src={require('../assets/slide/home_banner3.webp')} alt="Pet Family" className='img-fluid ' style={{ objectFit: 'cover', }} />
        </div>
      </div>

      <div className='row mt-5 text-center' style={{backgroundColor:'#EEEEEE'}} >
      <h2 className='m-0' style={{font:'600 18px/20px "Roboto', padding:'14PX 0'}}>SẢN PHẨM GIẢM GIÁ</h2>
      </div>





















      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaaaaaa</p>
      <p> aaaaaaaaaaaffffaaaaa</p>



    </div>
  </div>
);

export default Home;


/* <div className='center'>
  <ul class="nav nav-pills " id="pills-tab" role="tablist">
    <li class="nav-item " role="presentation" >
      <button class="nav-link active triangle"  id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{width:'300px', height:'100px'}} >Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{width:'300px', height:'100px'}}>Profile</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" style={{width:'300px', height:'100px'}}>Contact</button>
    </li>
    <li class='nav-item ' role='presentation' > <button class='nav-link active triangle' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true'><span>Home</span></button> </li>
    
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">this is home</div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">this is profile</div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">this fsdfsdf</div>

  </div>
</div> */