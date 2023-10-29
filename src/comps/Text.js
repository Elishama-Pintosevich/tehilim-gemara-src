import React from 'react'
import styles from '../Header.module.css'
import Buttons from './Buttons'

const Text = () => {
  return (
    <div className={styles.text}>
        <div className={styles.subTitle}>
            <div>
              <div className={styles.miniTitle}>Как это работает?</div>
              Ежедневное чтение нескольких псалмов привнесет гармонию в вашу жизнь. Представьте себе это как духовную зарядку – каждый день вы получаете дозу вдохновения, которая поможет вам преодолеть жизненные трудности и помочь другим.
            </div>
        </div>
        <div className={styles.subTitle}>
            <div>
              <div className={styles.miniTitle}>Будьте светлой надеждой в мире</div>
              Чтение псалмов не только укрепит вас, но и позволит вам стать светлой надеждой для окружающих. Дарите свою духовную силу добрым, хорошим людям, помогайте им в борьбе со злом – и вы сами станете частью перемены в этом мире.
            </div>
        </div>
        <div className={styles.subTitle}>
            <div>
              <div className={styles.miniTitle}>Начните сегодня</div>
              Не откладывайте на завтра то, что может принести вам вдохновение и силу уже сегодня. Начните свой духовный путь с нашего сайта, где вы найдете псалмы Давида для чтения каждый день. Верьте, что ваша вера и добрые дела могут изменить этот мир.
            </div>
        </div>
        <div className={styles.subTitle}>
            <div>
              {/* <div className={styles.miniTitle}>Зарядите свою душу силой псалмов</div> */}
              Присоединяйтесь к нам и начните читать псалмы Давида, чтобы дарить духовную силу добрым людям, борющимся со злом. Ваша вера и действия могут сделать этот мир лучше            </div>
        </div>
        <div className={styles.buttons}>
          <Buttons/>
        </div>
    </div>
  )
}

export default Text