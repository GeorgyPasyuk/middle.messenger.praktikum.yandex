import { Message } from "@controllers/MessagesController";
import { IUser } from "@shared/api/IUser";
import { IChatsInfo } from "@shared/api/IChats";

export interface IState {
  user: IUser;
  chats: IChatsInfo[];
  messages: Record<number, Message[]>;
  activeChat: Record<string, string | number>;
  selectedChat?: number;
  modal?: boolean;
  usersInChat: any;
}
