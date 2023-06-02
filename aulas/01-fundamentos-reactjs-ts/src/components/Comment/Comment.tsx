import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

interface CommentProps {
  content: String
  onDeleteComment: (content: String) => void
}

export function Comment( {content, onDeleteComment }: CommentProps ){
const [likeQuantity, setLikeQuantity] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  };

  function handleLikeComment(){
    setLikeQuantity(currentState => currentState += 1);
  };

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/medeiros-jadson.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Jadson Medeiros </strong>
              <time title='11 de maio às 08:23:55' dateTime='2023-05-14 08:13:23' > Cerca de 1h atrás </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash width={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeQuantity}</span>
          </button>
        </footer>
      </div>
    </div>
  );

};
