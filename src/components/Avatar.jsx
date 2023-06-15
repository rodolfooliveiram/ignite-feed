/* eslint-disable react/prop-types */
import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src, className }) {
  return (
    <img
      className={
        hasBorder
          ? `${styles.avatarWithBorder} ${className}`
          : `${styles.avatar} ${className}`
      }
      src={src}
      alt=''
    />
  );
}
