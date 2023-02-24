import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './nav.css'
function MainModule() {
  return (
    <div id="carouselExampleControls" class="carousel slide mt-2" data-bs-ride="carousel">
    <div class="carousel-inner1 bg-dark ms-5 me-5">

    <div class="carousel-item active border border-light " style={{
       width: '100%',
       height: '100%',
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       position: 'relative',
       borderRadius: '25px',
       cursor: 'pointer',
       borderColor: 'black'
      }}>
        <div class="module bg-dark">
        <div class="Box0 text-light bg-dark ps-5">
          <div class="toptitle clear-both">Black Panther: Wakanda Forever </div>
          <div class="content-meta"> 
            <span>
              <span class="meta-data">2 ชั่วโมง 41 นาที</span>
              <span class="meta-data"> 2022</span>
              <span class="meta-data"> Action</span>
              <span class="meta-data"> 13+</span>
            </span> 
            <div class="description pt-2"> ราชินีรามอนด้า, ชูรี, เอ็มบาคู, โอโคเย และหน่วยโดรา มิลาเจต่อสู้เพื่อปกป้องประเทศจากการรุกรานของโลกมหาอำนาจหลังการสวรรคตของกษัตริย์ทีชัลล่า</div>
          </div>
        </div>
      </div>
        <div class="img">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4267/1464267-h-1fab347931d1" class="d-block w-100" alt="..."/>
        </div>
      </div>
      

     
     <div class="carousel-item border border-light"style={{
       width: '100%',
       height: '100%',
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       position: 'relative',
       borderRadius: '25px',
       cursor: 'pointer'
      }}>

      <div class="module bg-light">
        <div class="Box0 text-light bg-dark ps-5">
        <div class="toptitle clear-both">Thor: Love and Thunder </div>
          <div class="content-meta"> 
          <span>
            <span class="meta-data">1 ชั่วโมง 58 นาที</span>
            <span class="meta-data"> 2022</span>
            <span class="meta-data"> Action</span>
            <span class="meta-data"> 13+</span>
          </span>
          <div class="description pt-2"> เทพเจ้าสายฟ้าร่วมมือกับกษัตริย์วัลคีรี่, คอร์กและเจน ฟอสเตอร์ อดีตแฟนสาว เพื่อจัดการกับนักฆ่าระดับจักรวาลที่รู้จักในชื่อกอร์ มือสังหารเทพ</div>
          </div>
        </div>
      </div>

      <div class="img">
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4387/1334387-h-9aea18b104f7" class="d-block w-100" alt="..."/>
        </div>
        </div>
     
      
      <div class="carousel-item border border-light"style={{
       width: '100%',
       height: '100%',
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       position: 'relative',
       borderRadius: '25px',
       cursor: 'pointer'
      }}>

      <div class="module bg-light">
        <div class="Box0 text-light bg-dark ps-5">
        <div class="toptitle clear-both">Lightyear </div>
          <div class="content-meta"> 
          <span>
            <span class="meta-data">1 ชั่วโมง 45 นาที</span>
            <span class="meta-data"> 2022</span>
            <span class="meta-data"> Action</span>
            <span class="meta-data"> ALL</span>
          </span>
          <div class="description"> ชมต้นกำเนิดของบัซ ไลท์เยียร์ ฮีโร่ผู้เป็นแรงบันดาลใจให้กับของเล่น ร่วมติดตามสเปซเรนเจอร์ผู้เป็นตำนานนี้ในการผจญภัยข้ามจักรวาลสุดตื่นเต้น</div>
          </div>
        </div>
      </div>

      <div class="img">
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2745/1312745-h-e77fcb89caad" class="d-block w-100" alt="..."/>
        </div>
        </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default MainModule