import "./About.css"
import Img1 from "../../../assets/1-min.png"
import Img2 from "../../../assets/2-min.png"
import Img3 from "../../../assets/3-min.png"
import Img4 from "../../../assets/4-min.png"
import Img5 from "../../../assets/5-min.png"
import Img6 from "../../../assets/6-min_1.png"
import Img7 from "../../../assets/qop.png"
import Img8 from "../../../assets/blur_2-min.png"
const About = () => {

    const cardData = [
        {
            id:1,
            img:Img1,
            title:"Maqsadli auditoriyani segmentatsiyalash",
            desc:"Istalgan biznes uchun maqsadli auditoriyani yaratish, mijoz portretini tuzish va segmentlarga ajratish",
        },
        {
            id:2,
            img:Img2,
            title:"Noyob savdo taklifini yaratish",
            desc:"Biznes uchun noyob savdo taklifini yaratish",
        },
        {
            id:3,
            img:Img3,
            title:"Shaxsiy tajribaga asoslangan",
            desc:"Bitta kursda 2 yillik tajribani qo'lga kiritasiz va shaxsiy keyslarga ega bo'lasiz"
        },
        {
            id:4,
            img:Img4,
            title:"Facebookda professional target",
            desc:"Business manager va Facebook Ads Manager orqali target reklamani professional ishga tushirish",
        },
        {
            id:5,
            img:Img5,
            title:"Sayt tayyorlash va SMM darsliklari",
            desc:"Target uchun zarur bo’lgan fundamental bilimlar va natijani yaxshilash uchun instrumentlar",
        },
        {
            id:6,
            img:Img6,
            title:"Xizmatlarni sotish",
            desc:"Targeting xizmatlaringizni mijozlarga sotish orqali daromad topish"
        }
    ]

  return (
    <div className="about-container">
        <div className="abouts">
            <h1 className="about-title">{`Kursda nimalarni o'rganasiz`}</h1>
            <div className="about-cards">
                {
                    cardData.map((item,index) => (
                        <div className="about-card" key={index}>
                    <div className="about-card-img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="about-texts">
                        <h3 className="about-card-title">{item.title}</h3>
                        <p className="about-card-desc">{item.desc}</p>
                    </div>
                </div>
                    ))
                }
            </div>
            <div className="about-btns">
                <a href="#kurstarif" className="about-btn">Kursga Yozilish</a>
            </div>
        </div>
            <img src={Img7} alt="" className="about-img1" />
            <img src={Img8} alt="" className="about-img2" />
    </div>
  )
}

export default About