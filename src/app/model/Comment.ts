/**
 * Created by jamescsh on 7/22/17.
 */
export class Comment {
  id: number;
  username: string;
  time: Date;
  content: string;
  status: number;
  email: string;
  pComment: Comment;
}
