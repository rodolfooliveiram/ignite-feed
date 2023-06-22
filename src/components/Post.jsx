/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/rodolfooliveiram.png' alt='' />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDataRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p>
                <a href='#'>{line.content}</a>
              </p>
            );
          }
        })}

        <p>
          {content.map((line) => {
            if (line.type === 'hashtag') {
              return <a href='#'>{line.content}</a>;
            }
          })}
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
