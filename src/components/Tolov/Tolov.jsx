import "./Tolov.css"
const Tolov = () => {
  return (
    <div className="tolov-container">
      <div className="tolov-cards">
        <div className="tolov-kartalar-card">
          <div className="kartalar">
            <span className="karta-raqam">9860 2466 0148 9635</span>
            <span className="kartaraqam-ism">Latifov Izzatbek</span>
          </div>
          <div className="kartalar">
            <span className="karta-raqam">8600 0304 2625 7592</span>
            <span className="kartaraqam-ism">Latifov Izzatbek</span>
          </div>
        </div>
        <div className="admin-kartalar">
          <div className="admin-texts">
            <span className="admin-text">{`Shu kartalardan biriga to'lov qilib bo'lgan bo'lsangiz Adminga yozishingiz mumkin`}</span>
          </div>
          <div className="amdin-btns">
            <a href="https://t.me/izzatbek_Digital" className="admin-btn">Adminga Yozish</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tolov