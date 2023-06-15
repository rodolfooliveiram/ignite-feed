/* eslint-disable react/prop-types */
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/rodolfooliveiram.png' alt='' />

          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title='13 de junho às 00:57' dateTime='13/06/2023 00:57:32'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>
        <textarea placeholder='Escreva um comentário...' />
        <button type='submit' className={styles.publish}>
          Publicar
        </button>
      </form>

      <div className={styles.commentFeed}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
