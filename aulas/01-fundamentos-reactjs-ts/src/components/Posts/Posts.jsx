import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Posts.module.css";

export function Posts({author, publishedAt}) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    'Muito bom, parabéns 👏👏',
    'Pô muito bacana, hein?!'
  ]);

  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR},);
  const dateRelativeNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

  function handleAddComment(){
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  function handleWriteComment(){
    setComment(event.target.value);
  };

  function deleteComment(commentToDelete) {
    const commentsWithoutCommentToDelete = comments.filter(
      comment => comment != commentToDelete
    );

    setComments(commentsWithoutCommentToDelete);
  };

  const textAreaIsEmpty = comment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dateFormatted} dateTime={dateFormatted}> Publicado {dateRelativeNow}</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que eu
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>👉 <a href="#">diego.dev/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a>{'  '}
          <a href="">#nlw</a>{'  '}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={comment}
          onChange={handleWriteComment}
          required
        />
        <footer>
          <button type="submit" disabled={textAreaIsEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />)
          })
        }
      </div>
    </article>
  );
};
