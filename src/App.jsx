import './globals.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main>
          <Post
            author='Rodolfo Oliveira'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta quos sequi nihil iste iusto odit, saepe laborum expedita nostrum corporis perferendis labore distinctio harum debitis et molestias itaque velit?'
          />
        </main>
      </div>
    </>
  );
}
