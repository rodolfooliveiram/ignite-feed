/* eslint-disable react/prop-types */
import { X } from 'phosphor-react';
import styles from './DeleteCommentModal.module.css';

export function DeleteCommentModal({ onDeleteComment }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <p>Deseja realmente apagar esse comentário?</p>
        <button
          className={styles.closeModalButton}
          onClick={() => onDeleteComment(false)}
          title='Fechar'
        >
          <X size={20} />
        </button>
        <div>
          <button
            className={styles.yesDeleteButton}
            onClick={() => onDeleteComment(true)}
          >
            Sim, desejo apagar
          </button>
          <button
            className={styles.noDeleteButton}
            onClick={() => onDeleteComment(false)}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
