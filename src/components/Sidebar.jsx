import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1625838144804-300f3907c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
        alt=''
      />

      <div className={styles.profile}>
        <Avatar
          className={styles.sidebarAvatar}
          src='https://github.com/rodolfooliveiram.png'
          alt=''
        />
        <strong>Rodolfo Oliveira</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
