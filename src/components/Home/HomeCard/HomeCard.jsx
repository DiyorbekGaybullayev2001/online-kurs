import { useState } from "react";
import "./HomeCard.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PhoneImg from "../../../assets/phone.png";
import BookImg from "../../../assets/book.png";
import Bg from "../../../assets/blur_2-min.png";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const HomeCard = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTarif, setSelectedTarif] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const [selectedCardNumber, setSelectedCardNumber] = useState("tanlash"); // Initialize selectedCardNumber with "tanlash"
  const navigate = useNavigate();

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
    if (!selectedImage) {
      toast.error("Skrenshotni yuklang");
    } else {
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
    navigator.clipboard.writeText("9860246601489635");
    setIsCopySuccess(true);
    setTimeout(() => setIsCopySuccess(false), 2000);
  };

  // Uzcard karta raqamini nusxalash uchun funksiya
  const handleCopyUzcard = () => {
    navigator.clipboard.writeText("8600030426257592");
    setIsCopySuccess(true);
    setTimeout(() => setIsCopySuccess(false), 2000);
  };

  return (
    <div className="homecard-container">
      <div className="homecard">
        <img src={BookImg} className="homecard-book" alt="" />
        <img src={PhoneImg} className="homecard-phone" alt="" />
        <img src={Bg} className="homecard-bg" alt="" />
        <h1 className="homecard-title">Savollaringiz bormi</h1>
        <span className="homecard-text">
          Ma’lumotlaringiz qoldiring, tez orada siz bilan bog’lanamiz
        </span>
        <form action="" className="homecard-form">
          {!openModal ? (
            <>
              <label htmlFor="firstname" className="labels">
                Ism
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Ismingiz"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label htmlFor="phonenumber" className="labels">
                Telefon raqam
              </label>
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
              <label htmlFor="tarif" className="labels">
                Tarifni tanlang
              </label>
              <select
                name="tariflar"
                value={selectedTarif}
                onChange={(e) => setSelectedTarif(e.target.value)}
                className="tarif-select"
                id="tariflar"
                required="true"
              >
                <option value="tanlash">Tarifni tanlang</option>
                <option value="standart" defaultValue="standart">
                  Standart
                </option>
                <option value="premium">Premium</option>
              </select>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (firstName && phone && selectedTarif) {
                    if (selectedTarif === "tanlash") {
                      toast.error("Tarifni tanlang!");
                      return false;
                    } else {
                      setOpenModal(true);
                    }
                  } else {
                    toast.error("Barcha maydonlarni to'ldiring");
                  }
                }}
                className="homecard-btn"
              >
                Yuborish
              </button>
            </>
          ) : (
            <>
              <label htmlFor="cardnumber" className="labels">
                Karta Raqam
              </label>
              <select
                name="cardnumber"
                value={selectedCardNumber}
                onChange={(e) => setSelectedCardNumber(e.target.value)}
                id=""
                className="homecard-form-select"
              >
                <option value="tanlash">Karta raqamni tanlang</option>
                <option value="humo">Humo</option>
                <option value="uzcard">Uzcard</option>
              </select>
              {selectedCardNumber === "humo" && (
                <>
                  <span className="plastik-raqam" onClick={handleCopyHumo}>
                  9860246601489635
                    {isCopySuccess ? (
                      <span className="plastik-nusxa">Nusxalandi</span>
                    ) : (
                      <FaRegCopy className="plastik-icon" />
                    )}
                  </span>
                  <span className="plastik-ism">Izzatbek Latifov</span>
                </>
              )}
              {selectedCardNumber === "uzcard" && (
                <>
                  <span className="plastik-raqam" onClick={handleCopyUzcard}>
                  8600030426257592
                    {isCopySuccess ? (
                      <span className="plastik-nusxa">Nusxalandi</span>
                    ) : (
                      <FaRegCopy className="plastik-icon" />
                    )}
                  </span>
                  <span className="plastik-ism">Izzatbek Latifov</span>
                </>
              )}
              <div className="raqam-label">
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
                className="yuborish homecard-btn"
              >
                Jonatish
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default HomeCard;
