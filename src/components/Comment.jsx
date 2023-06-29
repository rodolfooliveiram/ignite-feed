/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, HandsClapping } from 'phosphor-react';
import { DeleteCommentModal } from './DeleteCommentModal';

export function Comment({ content, onDeleteComment }) {
  const [applauseCount, setApplauseCount] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleOpenDeleteCommentModal() {
    setShowDeleteModal(true);
    document.body.style.overflow = 'hidden';
  }

  function confirmOrCancelDeleteComment(response) {
    if (response) {
      onDeleteComment(content);
      setShowDeleteModal(false);
      document.body.style.overflow = 'unset';
    } else {
      setShowDeleteModal(false);
      document.body.style.overflow = 'unset';
    }
  }

  function handleApplauseCount() {
    setApplauseCount((applauseState) => {
      return applauseState + 1;
    });
  }

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

            <button
              onClick={() => handleOpenDeleteCommentModal()}
              title='Apagar comentário'
            >
              <Trash size={24} />
            </button>
            {showDeleteModal &&
              createPortal(
                <DeleteCommentModal
                  onDeleteComment={(res) => confirmOrCancelDeleteComment(res)}
                />,
                document.body
              )}
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplauseCount}>
            <HandsClapping size={20} />
            <span>{applauseCount}</span> aplauso(s)
          </button>
        </footer>
      </div>
    </div>
  );
}
