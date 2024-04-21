const user = {
    id: "1",
    name: "",
    lastname: "",
    email: "",
    about: "",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70" ,
    
};

const users = {
    0: {name: "Нина", lastname: "Степанова"},
    1: {name: "Юлия", lastname: "Тарасова"},
    2: {name: "Владимир", lastname: "Иванов"},
    3: {name: "Ксеиня", lastname: "Иванова"},
    4: {name: "Пётр", lastname: "Петров"},
}

export function getUser(){
    return user;
}

export function getUsers(){
    return users;
}
