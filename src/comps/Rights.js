import React from 'react'
import styles from '../Header.module.css'
import Buttons from './Buttons'

const Rights = () => {
  return (
    <div className={styles.text}>
        <div className={styles.subTitle}>
            <div>
              <div className={styles.miniTitle}>Зарядите свою душу силой псалмов</div>
              Давид, великий царь и пророк, оставил нам дар – мудрые слова и молитвы, известные как псалмы. Эти стихи несут в себе духовную мощь и вдохновение. Они могут стать вашими спутниками в борьбе с злом и поддержать ваши добрые дела.
            </div>
        </div>
        <div className={styles.buttonDiv2}>
          <Buttons/>
        </div>
    </div>
  )
}

export default Rights