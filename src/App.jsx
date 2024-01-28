import './globals.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rodolfooliveiram.png',
      name: 'Rodolfo Oliveira',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'rodolfooliveira.dev/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto ' },
      { type: 'hashtag', content: '#nlw ' },
      { type: 'hashtag', content: '#rocketseat' },
    ],
    publishedAt: new Date('2023-06-21 02:26:17'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rodolfooliveiram.png',
      name: 'Rodolfo Oliveira',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'rodolfooliveira.dev/doctorcare' },
    ],
    publishedAt: new Date('2022-06-21 02:26:17'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
