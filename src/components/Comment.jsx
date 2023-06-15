import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, HandsClapping } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/rodolfooliveiram.png'
        alt=''
      />

      <div className={styles.commentBox}>
        <div className={styles.commentWrapper}>
          <header>
            <div className={styles.commentAuthor}>
              <strong>
                Rodolfo Oliveira <span>(você)</span>
              </strong>
              <time title='14 de junho às 01:15' dateTime='14/06/2023 01:15:19'>
                Há 2h
              </time>
            </div>

            <button title='Apagar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Rodolfo! Parabéns!</p>
        </div>

        <footer>
          <button>
            <HandsClapping size={20} />
            <span>3</span> aplausos
          </button>
        </footer>
      </div>
    </div>
  );
}
