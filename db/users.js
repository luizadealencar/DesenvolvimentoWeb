import { readFileSync, writeFileSync } from "fs"
const usersfile = ".db/u"
function getUsers(){
    return JSON.parse(readFileSync(usersfile))
}

function getUser(email) {
    const users = getUsers()
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            return users[i]
        }
    }
}

function saveUser(email, senha){
    if(getUser(email)) return {sucess: false, msg: "usuário já existe"}
    const users = getUsers()
    const user = { "email": email, "senha": senha}
    users.push(user)
    writeFileSync(userfile, JSON.stringify(users, null, " "))
    return {sucess: true, msg: "usuário cadastrado com sucesso"}
}

export { getUsers, getUser, saveUser }