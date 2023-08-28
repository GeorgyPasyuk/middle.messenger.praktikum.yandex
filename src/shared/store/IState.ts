import { Message } from "@controllers/MessagesController";
import { IUser } from "@shared/api/IUser";
import { IChatsInfo } from "@shared/api/IChats";

export interface IState {
  user: IUser;
  chats: IChatsInfo[];
  activeChat: Record<string, string | number>;
  messages: Record<number, Message[]>;
  modal?: boolean;
  usersInChat: any;
}
