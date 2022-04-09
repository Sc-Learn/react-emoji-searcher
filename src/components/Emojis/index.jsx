import propTypes from 'prop-types'

import styles from './Emojis.module.css'

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((emoji, index) => (
        <div>
          <p 
            dangerouslySetInnerHTML={{
              __html: `&#${emoji.symbol.codePointAt(0)}`
            }}
          />
        </div>
      ))}
    </div>
  )
}

Emojis.propTypes = {
  emojisData: propTypes.array
}

export default Emojis;