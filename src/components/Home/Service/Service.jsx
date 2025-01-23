import "./Service.css";
import Img1 from "../../../assets/service8.jpg";
import Img2 from "../../../assets/service11.jpg";
import Img3 from "../../../assets/service6.jpg";
import Img4 from "../../../assets/service9.jpg";
import Img5 from "../../../assets/service1.jpg";
import Img6 from "../../../assets/service12.jpg";
import Img7 from "../../../assets/service16.jpg";
// import Img5 from "../../../assets/service1.jpg";
import Imgcard from "../../../assets/izzatbek.png";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service">
        <div className="service-cards">
          <div className="service-card muallif-section">
            <div className="muallif">
              <h2 className="service-title">Latifov</h2>
              <span className="ser-muallif">Muallif haqida</span>
            </div>
            <h2 className="service-title">Izzatbek</h2>
            <span className="service-kasb">Professional Targetolog</span>
            <div className="ser-hr">
              <span className="ser-loyiha">Loyihalar</span>
              <hr className="hrs" />
            </div>
            <div className="ustozlar">
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img1} alt="" />
                </div>
                <span className="ustoz-text">Uy Market</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img2} alt="" />
                </div>
                <span className="ustoz-text">{`Star House buildings`}</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img3} alt="" />
                </div>
                <span className="ustoz-text">O'ZDVKM</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img4} alt="" />
                </div>
                <span className="ustoz-text">Shake & Pear</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img5} alt="" />
                </div>
                <span className="ustoz-text">Glamour Coffee</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img6} alt="" />
                </div>
                <span className="ustoz-text">One case</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img7} alt="" />
                </div>
                <span className="ustoz-text">Nihol Talim</span>
              </div>
              <div className="ustoz">
                <span className="loyihatext">50+ loyihalar</span>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-items">
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  3 yildan ortiq tajriba
                </span>
              </div>
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  Applenasiya uzb ga 1 oyda 150,000$ savdo
                </span>
              </div>
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  $300K reklamaga sarflangan byudjet
                </span>
              </div>
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  50 dan ortiq proyektlar
                </span>
              </div>
            </div>
            <img src={Imgcard} alt="" className="imgcard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
