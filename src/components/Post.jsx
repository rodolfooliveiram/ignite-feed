/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState, useRef } from 'react';

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

  const [comments, setComments] = useState([1, 2]);
  const buttonRef = useRef(null);

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, comments.length + 1]);
  }

  function handleCommentContent(event) {
    const commentText = event.target.value;
    const publishButton = buttonRef.current;

    if (commentText !== '') {
      publishButton.removeAttribute('disabled');
      publishButton.classList.add(`${styles.active}`);
    } else {
      publishButton.setAttribute('disabled', '');
      publishButton.classList.remove(`${styles.active}`);
    }

    console.log(commentText);
  }

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>
        <textarea
          id='textarea'
          onChange={handleCommentContent}
          placeholder='Escreva um comentário...'
        />
        <button
          ref={buttonRef}
          type='submit'
          className={styles.publish}
          disabled
        >
          Publicar
        </button>
      </form>

      <div className={styles.commentFeed}>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
