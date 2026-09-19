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
    const [phone, setPhone] = useState(0);
    const navigate = useNavigat();

    const handleReservation = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.useOptimistic(
                "http://localhost:4000/api/v1/reservation/send",
                { firstName, lastName, email, phone, data, time },
                {
                    headers:{
                        "content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone(0);
            setEmail("");
            setTime("");
            setDate("");
        }catch(error){}
    };

    return <section className='reservation' id='reservation'></section>
};

export default Reservation;