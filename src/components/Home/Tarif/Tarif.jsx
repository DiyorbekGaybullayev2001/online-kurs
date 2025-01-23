import "./Tarif.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaMedal, FaRegCopy } from "react-icons/fa";
import Img1 from "../../../assets/toj.png";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Tarif = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTarif, setSelectedTarif] = useState(null);
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [activePrice, setActivePrice] = useState(false);
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);
  const navigate = useNavigate();

  const handleOpenModal = (tarif) => {
    setOpenModal(true);
    setSelectedTarif(tarif);
  };
  // close modal
  const handleCloseModal = () => {
    setSelectedTarif(null);
    setOpenModal(false);
    setFirstName("");
    setPhone("");
    setActivePrice(false);
  };

  // send telegram bot
  const sendTelegramBot = async () => {
    const tg_bot_id = "6419502770:AAFqnnlYZUoPB_uzBfy8rk4-MjUqMgU5dQQ";
    const chat_id = -1002084832944;
    let message = `FirstName: ${firstName} \n Phone number: ${phone} \n Tarif: ${selectedTarif}`;

    if (selectedCardNumber === "humo") {
      message += `\n Karta raqami: 9860246601489635`;
    } else if (selectedCardNumber === "uzcard") {
      message += `\n Karta raqami: 8600030426257592`;
    } else if (selectedCardNumber === "tanlash") {
      toast.error("Karta raqamini tanlang!");
      return false;
    }

    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("text", message);
    if (selectedImage) {
      formData.append("photo", selectedImage);
      formData.append("caption", message);
    }
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${tg_bot_id}/sendPhoto`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // console.log("Ishladi");
        setFirstName("");
        setPhone("");
        setSelectedTarif("");
        setSelectedImage(null);

        setOpenModal(false);
        toast.success("Malumotlaringiz muvaffaqqiyatli yuborildi!");
      } else {
        toast.error("Xatolik yuz berdi! Iltimos qaytadan urinib ko'ring!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!selectedImage){
      toast.error("Skrenshotni yuklang")
    }else{
      if (selectedImage && selectedCardNumber !== "tanlash") {
        sendTelegramBot();
        navigate("/tolov");
      } else {
        toast.error("Karta raqamini tanlang!");
      }
    }
  };
  // Humo karta raqamini nusxalash uchun funksiya
  const handleCopyHumo = () => {
    navigator.clipboard.writeText("9860180108540709");
    setIsCopySuccess(true);
    setTimeout(() => setIsCopySuccess(false), 2000);
  };

  // Uzcard karta raqamini nusxalash uchun funksiya
  const handleCopyUzcard = () => {
    navigator.clipboard.writeText("5614682412177786");
    setIsCopySuccess(true);
    setTimeout(() => setIsCopySuccess(false), 2000);
  };

  return (
    <div className="tarif-container" id="kurstarif">
      <img src={Img1} className="position-img" alt="" />
      <div className="tarifs">
        <h1 className="tarif-title">{`Ta'riflar`}</h1>
        <div className="tarif-cards">
          <div className="tarif-card">
            <span className="tarif-card-title">Standart</span>
            <div className="tarif-items-btnlar">
              <div className="tarif-items">
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Mijozlarni oson topish va jalb qilish sirlari.
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Mijozlar bilan samarali va ishonchli muloqot qilish.
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Muzokaralarni professional olib borish yo‘llari.
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Daromadingizni oshirish uchun samarali reklama strategiyasini ishlab chiqish.
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Garantiya: Natija bo‘lmasa, pulingiz 100% qaytariladi!
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> 24-soat ichida to’lov qilsangiz bonus darsliklarga ega bo’lasiz!
                </span>
                {/* <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Eng yaxshi{" "}
                  <b>1 kishi</b> jamoaga olinadi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> <b>BONUS</b>{" "}
                  SMM instrumentlari va Tildada sayt tayyorlash
                </span> */}
              </div>
              <div className="tarif-btns">
                <del className="del-text">{`1,000,000 so'm`}</del>
                <span className="btns-text1">
                  200,000 <span className="uzs">{`so'm`}</span>
                </span>
                <button
                  onClick={() => handleOpenModal("standart")}
                  className="tarif-btn btn1"
                >
                  Standart tarifini tanlash
                </button>
                <span className="btns-text2">
                  <b>Shoshiling!</b> Taklif cheklangan: faqat <b>30</b> kishiga amal qiladi!
                  
                </span>
              </div>
            </div>
          </div>

          {/* <div className="tarif-card">
            <span className="tarif-card-title">
              <FaMedal /> Premium
            </span>
            <div className="tarif-items-btnlar">
              <div className="tarif-items">
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Target online
                  darsliklar
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" />{" "}
                  <b>Izzatbek Targetolog</b> bilan offlayn dars
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Yopiq guruhda
                  savol-javoblar
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kurator
                  yordami
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kursni
                  muvaffaqqiyatli yakunlagan barchaga loyiha beriladi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Natijaga
                  chiqishga <b>100%</b> kafolat
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kurs yakunida
                  imtihon boladi va eng yaxshi <b>3 kishi</b> jamoaga olinadi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" />{" "}
                  <b>Izzatbek Targetologdan</b> individual yordam
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> <b>BONUS</b>{" "}
                  SMM instrumentlari va Tildada sayt tayyorlash
                </span>
              </div>
              <div className="tarif-btns">
                <del className="del-text">{`3,000,000 so'm`}</del>
                <span className="btns-text1">
                  1,000,000 <span className="uzs">{`so'm`}</span>
                </span>
                <button
                  onClick={() => handleOpenModal("premium")}
                  className="tarif-btn"
                >
                  Premium tarifini tanlash
                </button>
                <span className="btns-text2">
                  Oflayn: <b>20</b> ta joy
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {openModal && (
        <div className="modal-container">
          <span className="modal-close" onClick={handleCloseModal}>
            &times;
          </span>
          <div className="modal">
            <h1 className="modal-title">{selectedTarif} tarifini tanlash</h1>
            <form action="" className="modal-form">
              {activePrice ? (
                <>
                  <label htmlFor="cardnumber" className="tarif-labels">
                    Karta Raqam
                  </label>
                  <select
                    name="cardnumber"
                    value={selectedCardNumber}
                    onChange={(e) => setSelectedCardNumber(e.target.value)}
                    id=""
                    className="tarif-form-select"
                  >
                    <option value="tanlash">Karta raqamni tanlang</option>
                    <option value="humo">Humo</option>
                    <option value="uzcard">Uzcard</option>
                  </select>

                  {selectedCardNumber === "humo" && (
                    <>
                      <span
                        className="tarif-plastik-raqam"
                        onClick={handleCopyHumo}
                      >
                        9860 1801 0854 0709
                        {isCopySuccess ? (
                          <span className="tarif-plastik-nusxa">
                            Nusxalandi
                          </span>
                        ) : (
                          <FaRegCopy className="tarif-plastik-icon" />
                        )}
                      </span>
                      <span className="tarif-plastik-ism">{`Latifov Izzatbek`}</span>
                    </>
                  )}
                  {selectedCardNumber === "uzcard" && (
                    <>
                      <span
                        className="tarif-plastik-raqam"
                        onClick={handleCopyUzcard}
                      >
                        5614 6824 1217 7786
                        {isCopySuccess ? (
                          <span className="tarif-plastik-nusxa">
                            Nusxalandi
                          </span>
                        ) : (
                          <FaRegCopy className="tarif-plastik-icon" />
                        )}
                      </span>
                      <span className="tarif-plastik-ism">{`Latifov Izzatbek`}</span>
                    </>
                  )}
                  <div className="tarif-raqam-label">
                    <label htmlFor="">
                      {`Pul o'tkazilganligi skrenshotini joylang`}
                    </label>
                    <input
                      type="file"
                      className="form-input"
                      onChange={(e) => setSelectedImage(e.target.files[0])}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="yuborish form-btn"
                  >
                    Jonatish
                  </button>
                </>
              ) : (
                <>
                  <span className="form-text">
                    Ma’lumotlaringizni qoldirganingizdan so’ng yopiq telegram
                    kanalga a’zo bo’lasiz
                  </span>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ismingiz"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <PhoneInput
                    defaultCountry="UZ"
                    international
                    value={phone}
                    autoComplete="off"
                    onChange={(phone) => setPhone(phone)}
                    placeholder="99-999-9999"
                    countryCallingCodeEditable={false}
                    required
                  />
                  <button
                    className="form-btn"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      if (firstName && phone && selectedTarif) {
                        setActivePrice(true);
                      } else {
                        toast.error("Ma'lumotlarni to'ldiring!");
                      }
                    }}
                  >
                    Ariza Yuborish
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tarif;
