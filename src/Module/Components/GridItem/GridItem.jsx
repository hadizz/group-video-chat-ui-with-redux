import styles from './GridItem.module.css'

export const GridItem = ({ forwardedRef, ...props }) => (
  <div className={styles.root} ref={forwardedRef} {...props} />
)
