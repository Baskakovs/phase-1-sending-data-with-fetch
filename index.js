// Add your code here
const body = document.querySelector('body')
const errorMessage = 'An error happened'
function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail
    }
    const configObject = {
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body: JSON.stringify(formData),
    }
    return fetch("http://localhost:3000/users", configObject)
    .then(function(response){
        return response.json()
    })
    .then(function (object){
        body.append(object.id)
    })
    .catch(function (error){
        alert('Hello')
        body.append(error.message)
    })
}