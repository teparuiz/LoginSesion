import React from "react";

function User({user}) {





return (

  <div>
    <h1 className="text-center"> Bienvenido </h1>
    <p></p>
    

    <p>{`ID: ${user.user._id}`}</p>
    <p> {`Nombre: ${user.user.firstName}`}</p>
    <p> {`Apellido: ${user.user.lastName}`}</p>

        </div> );
}

export default User;
