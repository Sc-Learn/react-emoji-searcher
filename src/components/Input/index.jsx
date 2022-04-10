import propTypes from 'prop-types'

import styles from './Input.module.css'

const Input = ({ onChange, value }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder="Search"
    /> 
  )
}

Input.propTypes = {
  onChange: propTypes.func,
  value: propTypes.string
}

export default Input;