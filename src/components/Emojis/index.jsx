import { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import EmojiBox from '../EmojiBox'

import styles from './Emojis.module.css'
import { filterEmojis } from '../../utils/filterEmojis'

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setFilteredEmojis] = useState([])

  useEffect(() => {

    setFilteredEmojis(filterEmojis({
      emojisData,
      searchText,
    }))

  }, [emojisData, searchText])

  return (
    <div className={styles.emojisGrid}>
      {filteredEmojis.map((emoji, index) => (
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
  emojisData: propTypes.array,
  searchText: propTypes.string
}

export default Emojis;