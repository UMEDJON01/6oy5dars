import YouTubeImg from "../../../public/assets/youtube-embed.svg";
import cardImg1 from "../../../public/assets/website-illustration.svg";
import cardImg2 from "../../../public/assets/bot-illustration.svg";
import cardImg3 from "../../../public/assets/smm-illustration.svg";
import cardImg4 from "../../../public/assets/design-illustration.svg";
import cardImg5 from "../../../public/assets/crm-illustration.svg";
import infoImg1 from "../../../public/assets/step-illlustration.svg";
import infoImg2 from "../../../public/assets/step-illlustration2.svg";

import styles from "../Main/index.module.css";

function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainText}>
          <h2>
            Biznesingizni keyingi bosqichga <br />
            olib chiqing
          </h2>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
            <br /> Nam facilisis lacinia ex, eget sollicitudin massa
            pellentesque <br /> in. Vivamus mattis eros at sem pulvinar
          </p>

          <button className={styles.btn2}>Xizmatlar bilan tanishish</button>
        </div>
        <div className={styles.mainImg}>
          <img src={YouTubeImg} alt="" />
        </div>
        <div className={styles.hero}>
          <h3>Xizmatlar</h3>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque
            in. Vivamus mattis eros at sem pulvinar
          </p>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.card1}>
            <img src={cardImg1} alt="" />
            <h3>Vebsayt tuzish</h3>
            <p>lorem ipsum</p>
          </div>
          <div className={styles.card2}>
            <img src={cardImg2} alt="" />
            <h3>Telegram bot</h3>
            <p>lorem ipsum</p>
          </div>
          <div className={styles.card3}>
            <img src={cardImg3} alt="" />
            <h3>SMM</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
        <br />
        <div className={styles.mainCard}>
          <div className={styles.card4}>
            <img src={cardImg4} alt="" />
            <h3>Grafik dizayn</h3>
            <p>lorem ipsum</p>
          </div>
          <div className={styles.card5}>
            <img src={cardImg5} alt="" />
            <h3>CRM tizimlar</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
        <button className={styles.btn3}>
          <b>Buyurtma berish</b>
        </button>
        <a className={styles.sahifa} href="#">
          Xizmatlar sahifasiga o’tish
        </a>
        <div className={styles.info}>
          <h3>Biz qanday ishlaymiz?</h3>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque
            in. Vivamus mattis eros at sem pulvinar
          </p>
          <div className={styles.info1}>
            <img src={infoImg1} alt="" />
            <h3>Talablarni aniqlab chiqamiz</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.{" "}
              <br /> Nam facilisis
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
