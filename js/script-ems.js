// CREATE AN ARRAY OF EMPLOYEES
let employees = JSON.parse(localStorage.getItem('employees')) || [
    { id: 1, name: 'John Doe', extension: 1001, email: 'john.doe@example.com', department: 'Administrative' },
    { id: 2, name: 'Jane Smith', extension: 1002, email: 'jane.smith@example.com', department: 'Executive' },
    { id: 3, name: 'Emily Johnson', extension: 1003, email: 'emily.johnson@example.com', department: 'Marketing' },
    { id: 4, name: 'Michael Brown', extension: 1004, email: 'michael.brown@example.com', department: 'QA' },
    { id: 5, name: 'Sarah Davis', extension: 1005, email: 'sarah.davis@example.com', department: 'Sales' }
];

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = parseInt(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const extension = parseInt(document.getElementById('extension').value);
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, extension, email, department };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const rowIndex = e.target.parentNode.parentNode.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1); // Adjust for header row

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        let row = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td><button class="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}
