import { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import EmojiBox from '../EmojiBox'
import Empty from '../Empty'
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

  if (filteredEmojis.length > 0) {
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
  } else {
    return (
      <Empty 
        text="Oops, zero finding. Let's try another keyword!"
      />
    )
  }
}

Emojis.propTypes = {
  emojisData: propTypes.array,
  searchText: propTypes.string
}

export default Emojis;