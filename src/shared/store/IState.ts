import { Message } from "@shared/controllers/IMessage";
import { IUser } from "@shared/api/IUser";
import { IChatsInfo } from "@shared/api/IChats";

export interface IState {
  user: IUser;
  chats: IChatsInfo[];
  activeChat: IChatsInfo;
  messages: Record<number, Message[]>;
  modal?: boolean;
  usersInChat: any;
}
