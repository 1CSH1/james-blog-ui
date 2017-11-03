/**
 * Created by jamescsh on 7/22/17.
 */
export class Comment {
  id: number;
  username: string;
  nickname: string;
  name: string;
  time: Date;
  content: string;
  status: number;
  email: string;
  cComments: Comment[];
  pid: number;
  createdTime: number;
  modifiedTime: number;
}
