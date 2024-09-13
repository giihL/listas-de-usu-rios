// Função para buscar usuários da API

function fetchUsers(){
    return new Promise ((resolve, reject) =>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            if (!response.ok) {
                reject ('Erro ao obter os dados da API'); // Rejeitar a promisse se houver error
            }
            return response.json(); // Converter a resposta para JSON
        })
        .then((data) => {
            resolve(data); //Resolver a promisse com os dados
        })
        .catch((error) => {
            reject(error); // Rejeitar a promisse em caso de erro
        })
    })
}


    
// Consumindo a promise com then e cath

fetchUsers()
    .then((users) =>{
        console.log('Usuários:', users); 
      popularUsuarios(users)
    })
    .catch((error) =>{
        console.error('Erro:', error); // Exibe o erro, se houver
        });

        function popularUsuarios(users) { 
            let userHTML = ''; 
         
            users.forEach(usuario => { 
                userHTML +=  
                `<div> 
                    <p><strong>Nome:</strong> ${usuario.name}</p> 
                    <p><strong>Email:</strong> ${usuario.email}</p> 
                    <p><strong>Telefone:</strong> ${usuario.phone}</p> 
                    <p><strong>Website:</strong> ${usuario.website}</p> 
                    <p><strong>Empresa:</strong> ${usuario.company.name}</p> 
                    <p>-------------------------------------</p> 
                </div>` 
            ; 
            }); 
         
            userList.innerHTML = userHTML; 
         
        }
        
        loadUsers.onclick = (() =>{            
            fetchUsers()
             .then((users) =>{
               console.log('Usuários:', users); 
                      popularUsuarios(users)
               })
               .catch((error) =>{
                    console.error('Erro:', error); // Exibe o erro, se houver
               });
                 
           })
         