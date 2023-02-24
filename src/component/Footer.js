import React from "react";
import './Footer.css'
function Footer(){
    return(
        <div>
            <div class="footer" style={{
                paddingBottom: '100px'
            }}>
                <div class="container">
                    <div class="footer-left col-xs-12 col-sm-12 col-sm-7">
                        <ul>
                            <li><a href="/th/about-us" target="_blank" rel="noopener noreferrer" class="Text text-light">เกี่ยวกับ Disney+ Hotstar</a></li>
                            <li><a href="/th/terms-of-use" target="_blank" rel="noopener noreferrer" class="Text text-light ps-2"> ข้อตกลงการใช้งาน</a></li>
                            <li><a href="/th/privacy-policy" target="_blank" rel="noopener noreferrer" class="Text text-light ps-2"> นโยบายความเป็นส่วนตัว (ใหม่)</a></li>
                            <li><a href="https://help.hotstar.com/" target="_blank" rel="noopener noreferrer" class="Text text-light ps-2"> คำถามที่พบบ่อย</a></li>
                            <li><a href="/th/feedback" target="_blank" rel="noopener noreferrer" class="Text text-light ">ข้อเสนอแนะ</a></li>
                            </ul><p class="copyright text-light">© 2564 ดิสนีย์และบริษัทในเครือที่เกี่ยวข้อง © 2564 บริษัทผู้อนุญาตให้ใช้สิทธิของดิสนีย์ สงวนสิทธิ์ทุกประการ</p>
                    </div>
                    <div class="footer-right col-xs-12 col-sm-12 col-sm-5">
                        <div class="app-unit col-xs-8">
                            <div class="store-wrapper">
                                <p class="text-light">แอป Disney+ Hotstar</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google-play text-light" viewBox="0 0 16 16">
                                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi1 bi-apple text-light ps-2" viewBox="0 0 16 16">
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                                    </svg>
                                </div>
                        </div>
                        <div class="social-unit col-xs-4">
                            <div>
                                <p class="Fb text-light">เชื่อมต่อกับเรา</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-facebook text-light" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;