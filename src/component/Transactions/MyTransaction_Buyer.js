import {useState, useEffect} from 'react'
import React from 'react';
import './MyTransactionStyles.css';
import template from './transactionTemplate.json'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft)


export default function TransBuyer() {
    /*const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(template, {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json' 
            }
        });
        const tempData = await response.json();
        console.log(tempData);
        setData(tempData);
    };*/

    const [statustemp, setStatus] = useState()
    const [statustemp2, setStatus2] = useState()
    const [statustemp3, setStatus3] = useState()
    const [statustemp4, setStatus4] = useState()
    const [statustemp5, setStatus5] = useState()
    const [statustemp6, setStatus6] = useState()
    const statusChecker = () => {
        let num
        if(document.getElementById("status1").textContent === "Pending") {
            num = "1"
        }
        if(document.getElementById("status1").textContent === "Done" || document.getElementById("status1").textContent === "Accepted") {
            num = "2"
        }
        if (num==="1") {
            setStatus("orange")
        }
        if (num==="2") {
            setStatus("green")
        } 
    }

    const statusChecker2 = () => {
        let num
        if(document.getElementById("status2").textContent === "Pending") {
            num = "1"
        }
        if(document.getElementById("status2").textContent === "Done" || document.getElementById("status2").textContent === "Accepted") {
            num = "2"
        }
        if (num==="1") {
            setStatus2("orange")
        }
        if (num==="2") {
            setStatus2("green")
        } 
    }

    const statusChecker3 = () => {
        let num
        if(document.getElementById("status3").textContent === "Pending") {
            num = "1"
        }
        if(document.getElementById("status3").textContent === "Done" || document.getElementById("status3").textContent === "Accepted") {
            num = "2"
        }
        if (num==="1") {
            setStatus3("orange")
        }
        if (num==="2") {
            setStatus3("green")
        } 
    }

    const statusChecker4 = () => {
        let num
        if(document.getElementById("status4").textContent === "Pending") {
            num = "1"
        }
        if(document.getElementById("status4").textContent === "Done" || document.getElementById("status4").textContent === "Accepted") {
            num = "2"
        }
        if (num==="1") {
            setStatus4("orange")
        }
        if (num==="2") {
            setStatus4("green")
        } 
    }

    const statusChecker5 = () => {
        let num
        if(document.getElementById("status5").textContent === "Pending") {
            num = "1"
        }
        if(document.getElementById("status5").textContent === "Done" || document.getElementById("status5").textContent === "Accepted") {
            num = "2"
        }
        if (num==="1") {
            setStatus5("orange")
        }
        if (num==="2") {
            setStatus5("green")
        } 
    }

    const statusChecker6 = () => {
        let num
        if(document.getElementById("status6").textContent === "Pending") {
            num = "1"
        }
        if(document.getElementById("status6").textContent === "Done" || document.getElementById("status6").textContent === "Accepted") {
            num = "2"
        }
        if (num==="1") {
            setStatus6("orange")
        }
        if (num==="2") {
            setStatus6("green")
        } 
    }

    /*const statusChecker = () => {
        if (payload === "Pending") {
            payload.classList.add("orange")
        }
    }*/

    useEffect(() => {
        //fetchData();
        statusChecker()
        statusChecker2()
        statusChecker3()
        statusChecker4()
        statusChecker5()
        statusChecker6()
    }, []);

    return (
        <div className="trans-main">
            <h2>My Transactions</h2>
            <button className="chevron"><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></button>
            <button className="chevron"><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
            {template.map((item, i) => {
                return (
                    <div className="key-div" key={i}>
                        <p className="marker">TRANSACTION TITLE: <span>{item.title}</span> </p>
                        <p>TRANSACTION ID: <span>{item.id}</span> </p>
                        <p>ROLE IN TRANSACTION: <span>{item.role}</span></p>
                        <p>STATUS: <span id="status1" className={statustemp}>{item.status}</span> </p>

                        <h3>Transaction Progress</h3>
                        <p>Agreement of terms & conditions:<span id="status2" className={statustemp2}>{item.progress.agreement}</span></p>
                        <p>Payment to Exqure by buyer:<span id="status3" className={statustemp3}>{item.progress.payToExqure}</span></p>
                        <p>Shipment of item:<span id="status4" className={statustemp4}>{item.progress.shipment}</span></p>
                        <p>Inspection of item:<span id="status5" className={statustemp5}>{item.progress.inspection}</span></p>
                        <p>Disbursing of cash:<span id="status6" className={statustemp6}>{item.progress.disbursement}</span></p>

                        <h3>Pending Actions</h3>
                        <p>Accept Item</p>
                    </div>
                )
            })}
            <div className="pending-buttons">
                <button className="accept">Accept</button>
                <button className="decline">Decline</button>
            </div>
        </div>
    )
}