import React from 'react';
import pic from '../assets/profile.jpg';

const name = "Touko Hänninen"


export default function Header() {
    return (<header>
        <h1>{name}</h1>
        <img src={pic} className="profilePicture" />
    </header>)
}