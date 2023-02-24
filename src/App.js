import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import MainModule from './component/MainModule';
import Module1 from './component/Module1';
import Module2 from './component/Module2';
import Module3 from './component/Module3';
import Module4 from './component/Module4';
import Module5 from './component/Module5';
import Footer from './component/Footer';
function App() {
  return (
          <div className="page-container bg-dark  ">
              <Navbar/>
              <MainModule/>
              <div className='card bg-dark border-dark pb-5 mt-2' style={{
               display: 'grid',
              }}>

              <a href='https://www.hotstar.com/th/channels/pixar?utm_source=google&utm_medium=search&utm_campaign=MK-TH_CN-AOPerformance_LG-EN_PB-Google_DT-CROSS_FM-SEA_SZ-NONE_ST-PRO_PD-NA_AO-Disney_Plus_Exact_FF-na'>
                <div class="box1">
                <h2>Pixar</h2>
                        
              </div></a>

              <a href='#'>
                <div class="box2">
                <h2>Marvel</h2>

              </div></a>

              <a href='https://www.hotstar.com/th/channels/disney?utm_source=google&utm_medium=search&utm_campaign=MK-TH_CN-AOPerformance_LG-EN_PB-Google_DT-CROSS_FM-SEA_SZ-NONE_ST-PRO_PD-NA_AO-Disney_Plus_Exact_FF-na'>
                <div class="box3">
                <h2>Disney</h2>
              </div></a>

              <a href='#'>
                <div class="box4">
                <h2>StarWars</h2>
              </div></a>

              <a href='#'>
                <div class="box5"><h2>National <br></br> Geographic</h2></div>
              </a>

            </div>
            <div className='link'>
            <a href="#">
                  <p className=' text-light pt-3 ps-5' style={{
                    fontSize: 25
                    }}>ติดเทรนด์ในประเทศไทย</p>
                </a>
                  <Module1/>
                <a href="#">
                  <p className=' text-light pt-3 ps-5' style={{
                    fontSize: 25
                    }}>สั้น กระชับ ประทับใจ</p>
                  </a>
                    <Module2/>
                <a href="#">
                  <p className=' text-light pt-3 ps-5' style={{
                    fontSize: 25
                    }}>ดิสนีย์พลัส ออริจินัลส์</p>
                  </a>
                  <Module3/>
                <a href="#">
                  <p className=' text-light pt-3 ps-5' style={{
                    fontSize: 25
                    }}>ภาพยนตร์และซีรีส์เกาหลี</p>
                  </a>
                  <Module4/>
                <a href="#">
                  <p className=' text-light pt-3 ps-5' style={{
                    fontSize: 25
                    }}>เมดอินไทยแลนด์</p>
                </a>
                  <Module5/>
            </div>
            
                  <Footer/>


          </div>
  );
}
export default App;