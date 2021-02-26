import React from 'react'
import styles from './IconButton.module.css'
import generateClassName from '../../../Utils/dom'
import { NoVideoIcon, NoVoiceIcon, CallIcon } from './Icons'

const IconButton = ({ iconName, size, color, iconColor, onClick }) => {

  const generateSize = () => {
    switch (size) {
      case 'small': return 20;
      case 'large': return 30;
      default:
      case 'medium': return 25;
    }
  }

  const generateIcon = (iconColor = 'white') => {
    const iconSize = generateSize();
    const color = iconColor === 'red' ? "#EA4141" : iconColor;
    switch (iconName) {
      case 'no-video':
        return <NoVideoIcon fill={color} size={iconSize} />
      case 'no-voice':
        return <NoVoiceIcon fill={color} size={iconSize} />
      default:
      case 'call':
        return <CallIcon fill={color} size={iconSize} />
    }
  }

  const handleOnClick = (ev) => {
    if (onClick) {
      onClick(ev)
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className={generateClassName([
        styles.root,
        styles[`size-${size ?? 'medium'}`],
        styles[`bgColor-${color ?? 'default'}`],
      ])}
    >
      {generateIcon(iconColor)}
    </button>
  )
}

export default IconButton
