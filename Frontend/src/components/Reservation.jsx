import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from "react";
import { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigat } from "react-router-dom";

const Reservation = () => {
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [date, setDate] = useState(" ");
    const [time, setTime] = useState(" ");
    const [phone, setPhone] = useState(" ");

    return <section className='reservation' id='reservation'></section>
};

export default Reservation;