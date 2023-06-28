/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

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

  const [comments, setComments] = useState([
    'Show! Parabéns, Rodolfo!',
    'Comentário 2',
    'Comentário 3',
  ]);

  const [newCommentContent, setNewCommentContent] = useState('');

  const isNewCommentEmpty = newCommentContent.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentContent]);
    setNewCommentContent('');
  }

  function handleCommentContent(event) {
    setNewCommentContent(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const newCommentsList = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(newCommentsList);
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href='#'>{line.content}</a>
              </p>
            );
          }
        })}

        <p>
          {content.map((line) => {
            if (line.type === 'hashtag') {
              return (
                <a key={line.content} href='#'>
                  {line.content}
                </a>
              );
            }
          })}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>
        <textarea
          id='textarea'
          onChange={handleCommentContent}
          value={newCommentContent}
          placeholder='Escreva um comentário...'
        />
        <button
          type='submit'
          className={styles.publish}
          disabled={isNewCommentEmpty}
        >
          Publicar
        </button>
      </form>

      <div className={styles.commentFeed}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
