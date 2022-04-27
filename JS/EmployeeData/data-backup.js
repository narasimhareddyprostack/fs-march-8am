let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonia Gandhi", sal: 55000 },
{ id: 103, name: "Priyanka Gandhi", sal: 65000 }
]

function displayData() {
    /* console.log("Test case 123") */
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                        </tr>`
    }
    document.getElementById("tbody_Data").innerHTML = rows

}