import { carregarUsuarios } from '../usuario.js';

loadUsers.onclick = (() =>{
    userList.innerText = carregarUsuarios()

})