import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./UpdateOrder.css"
const OrderUpdate = () => {
    const [user, setUser] = useState({})
    const { id } = useParams();


    // show information update using id 


    useEffect(() => {
        const url = `https://wish-collection.vercel.app/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);


    // input name function take 


    const hanNameChange = e => {
        const updateName = e.target.value;
        const updateUser = { username: updateName, address: user.address }
        // console.log(e.target.value); 
        setUser(updateUser);
    }


    // handle change email input 
    const hanAddressChange = e => {
        const updateAddress = e.target.value;
        // const updateUser = { ...user }; 
        const updateUser = { username: user.username, address: updateAddress }
        setUser(updateUser);
    }


    // update user function handle 
    const handleUpdataUser = e => {
        const url = `https://wish-collection.vercel.app/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className='up-bg'>
            <div className="orderUpdate container p-5">
                <center>
                    <h1 id="h1provided"> User Name: {user.username}</h1>
                    <h2 id="h1provided">User Id: {id}</h2>
                    <div className="form-update">
                        <form onSubmit={handleUpdataUser}>
                            <span>name</span> <br /> <input className="p-2 m-3" type="text" onChange={hanNameChange} value={user.username} /><br />

                            <span>Product name</span><br /> <input className="p-2 m-3" type="text" defaultValue={user.productName} /><br />

                            <span>Address</span><br /><input className="p-2 m-3" type="text" onChange={hanAddressChange} value={user.address} /><br />

                            <span>Phone</span><br /> <input className="p-2 m-3" type="text" defaultValue={user.phone} /><br />



                            <input className="btn btn-success" type="submit" value="submit" />
                        </form>
                    </div>
                </center>
            </div>
        </div>
    );
};
export default OrderUpdate;