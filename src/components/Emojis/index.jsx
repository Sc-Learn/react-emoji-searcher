import propTypes, { symbol } from 'prop-types'

import EmojiBox from '../EmojiBox'

import styles from './Emojis.module.css'

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((emoji, index) => (
        <EmojiBox
        key={index}
        title={emoji.title}
        symbol={emoji.symbol}
        />
      ))}
    </div>
  )
}

Emojis.propTypes = {
  emojisData: propTypes.array
}

export default Emojis;