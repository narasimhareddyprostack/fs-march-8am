let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 }, {
    id: 102, name: "Sonia Gandhi", sal: 55000
}]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        let flag = false;
        setTimeout(() => {
            if (flag == true) {
                resolve("Data Inserted Successfully");
                employees.push(emp)

            }
            else {
                reject("Data Not Inserted")
            }
        }, 3000)
    })
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.map((emp) => {
            rows += `<tr>     
                          <td>${emp.id}</td>
                          <td>${emp.name}</td>
                          <td>${emp.sal}</td>
                  </tr>`
        })
        document.getElementById("abc").innerHTML = rows
    }, 1000)
}
//createEmployee({ id: 103, name: 'Priyanka', salary: 65000 }).then().catch()
createEmployee({ id: 103, name: 'Priyanka', salary: 65000 })
    .then((msg) => {
        console.log(msg)
        getEmployees()
    })
    .catch((err) => {
        console.error(err)
    })