import {Category} from "./Category";
import {Comment} from "./Comment";
import {Tag} from "./Tag";
/**
 * Created by jamescsh on 7/11/17.
 */
export class Article {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  createdTime: number;
  modifiedTime: number;
  content: string;
  readNumber: number;
  commentNumber: number;
  isTop: boolean;
  categories: Category[];
  comments: Comment[];
  tags: Tag[];
}
