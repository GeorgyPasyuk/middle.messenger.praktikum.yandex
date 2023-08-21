export interface IUpdateData {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
}

export interface IUpdatePassword {
    oldPassword: string,
    newPassword: string
}
