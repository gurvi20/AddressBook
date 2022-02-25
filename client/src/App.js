import React, { useEffect, useState } from 'react';
import "./App.css";


function App() {

const [contactList, setContactList] = useState([]);

const formSubmitHandler=(event)=>{
 event.preventDefault();

 let dataContacts=[
  {"firstName":event.target.firstName.value,
 "lastName":event.target.lastName.value,
 "email":event.target.email.value,
 "phone":event.target.phone.value}
];
 console.log(event.target.firstName.value);
 const serverUrl="http://localhost:3002/addToContacts"
 const options={
   method:'POST',
   headers:{
     'Content-Type':'application/json'
   },
   body:JSON.stringify(dataContacts)
 }
 fetch(serverUrl,options)
};

useEffect(()=>{
  const serverUrl="http://localhost:3002/readAllContacts"
  fetch(serverUrl,{method:'GET'})
  .then(response=>response.json())
  .then(json=>console.log(json.results))
  console.log("hi");
});

  return (
    <div className="App">
      <form className="add-form" onSubmit={formSubmitHandler}>
        <div className="form-field">
          <label>Image: </label>
          <input
            type="file"
            name="image"
          />
        </div>
        <div className="form-field">
          <label>First Name: </label>
          <input type="text" name="firstName" placeholder="Enter your firstname"/>
        </div>
        <div className="form-field">
          <label>Last Name: </label>
          <input type="text" name="lastName" placeholder="Enter your lastname"/>
        </div>
        <div className="form-field">
          <label>Email: </label>
          <input type="email" name="email" placeholder="Enter your email"/>
        </div>
        <div className="form-field">
          <label>Phone Number: </label>
          <input type="number" name="phone" placeholder="Enter your number"/>
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
      {contactList.length > 0 && (
          <div>
            {contactList.map((contact) => (
              <div>{contact.firstName}</div>
            ))}
      </div>
      )}
    </div>
    </div>
  );
}

export default App;
