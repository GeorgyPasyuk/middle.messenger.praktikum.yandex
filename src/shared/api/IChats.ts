import {IUser} from "@shared/api/IUser";

export interface IChatsInfo {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: {
        user: IUser,
        time: string,
        content: string
    }
    usersInChat: any
}
