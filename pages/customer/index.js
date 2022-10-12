import { useState } from "react";

function customer() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState('');

    const loadCustomer = () => {
        fetch("/api/users")
            .then(res => res.json())
            .then(data => setCustomers(data));
    }

    const addCustomer = () => {
        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ customer }),
            headers: { 'Content-Type': 'application/json' },
        })
        loadCustomer;
    }

    const handleDeleteBtn = (id) => {
        fetch(`/api/users/${id}`,
            {
                method: "DELETE",
            })
            loadCustomer();
    }
    return (
        <div>
            <h1>All customers:{customers.length}</h1>
            <button onClick={loadCustomer}>Load data</button>
            <input onChange={(e) => setCustomer(e.target.value)} type="text" />
            <button onClick={addCustomer}>Add Customer</button>
            {
                customers.map(customer => {
                    return (
                        <div key={customer.id}>
                            <h1>{customer.id} : Name :{customer.name}</h1>
                            <button onClick={() => handleDeleteBtn(customer.id)}>Delete</button>
                        </div>
                    )
                }
                )
            }
        </div>
    );
}

export default customer;