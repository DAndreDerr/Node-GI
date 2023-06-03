const express = require('express');
const app = express()
const employees = require('./employees.json')
const port = 7000;

app.get('/employees', (req, res)=>{
    res.json(employees);
});

app.get('/employees/:employeeID', (req, res)=>{
    const employeeID = parseInt(req.params.employeeID);
    let employee;
    
    for(let i = 0; i < employees.employees.length; i++){
        if (employees.employees[i].employeeID === employeeID){
            employee = employees.employees[i];
        }
    }

    if(employee){
        res.json(employee)
    } else {
        res.status(404).json({ error: 'Employee Not Found'})
    }
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});