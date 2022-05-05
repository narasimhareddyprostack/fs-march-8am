let users = [{ "id": 1, "name": "Jehu", "email": "jkiledal0@dot.gov", "gender": "Genderfluid" },
{ "id": 2, "name": "Yurik", "email": "ybernhardi1@hostgator.com", "gender": "Male" },
{ "id": 3, "name": "Maurene", "email": "mswales2@state.tx.us", "gender": "Female" },
{ "id": 4, "name": "Noni", "email": "nviccary3@dagondesign.com", "gender": "Female" },
{ "id": 5, "name": "Hillary", "email": "hperett4@howstuffworks.com", "gender": "Female" },
{ "id": 6, "name": "Randy", "email": "rspieck5@businessweek.com", "gender": "Male" },
{ "id": 7, "name": "Inglis", "email": "idoble6@miibeian.gov.cn", "gender": "Male" },
{ "id": 8, "name": "Benedick", "email": "bastbery7@comcast.net", "gender": "Male" },
{ "id": 9, "name": "Cookie", "email": "caddicott8@google.it", "gender": "Female" },
{ "id": 10, "name": "Marcelle", "email": "mdoiley9@theguardian.com", "gender": "Female" }]


function displayData() {
    let rows = ""
    users.forEach((user) => {
        rows = rows + `<tr>
                                <td>${user.id}</td> 
                                <td>${user.name}</td> 
                                <td>${user.email}</td> 
                                <td>${user.gender}</td> 
                      </tr>`
    })
    document.getElementById("kgf2").innerHTML = rows
}