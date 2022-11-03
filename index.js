// Add your code here


function submitData(name, email){
    const configUser = {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name : name,
            email : email
        })
    }

   return fetch("http://localhost:3000/users", configUser)
    .then((res) => res.json())
    .then((obj) => {
        let idParagraph = document.createElement('p')
        idParagraph.innerHTML = obj.id
        document.querySelector("body").appendChild(idParagraph)
    })
    .catch(function(error){
        let errParagraph = document.createElement('p');
        errParagraph.textContent = error.message;
        document.querySelector("body").appendChild(errParagraph)
    })
   
}






// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     // body: JSON.stringify({
//     //     dogName: "Byron",
//     //     dogBreed: "Poodle",
//     //   }),
//     //OR you can use this:
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });