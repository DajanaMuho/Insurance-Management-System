import { useEffect, useState } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Bar, Line } from "react-chartjs-2";
import Navigatior from "./Navigatior";
import '../../index.css';
const API = require("../../api/main").default;

function Dashboard(props) {
    const token = localStorage.getItem('token');
    const [customers, setCustomers] = useState([]);
    const storageSelectedCustomer = localStorage.getItem('selectedCustomer');
    const [selectedCustomer, setSelectedCustomer] = useState(storageSelectedCustomer ? JSON.parse(storageSelectedCustomer) : {id: null, name: "Choose Customer"});
    const [predictedClaimValue, setPredictedClaimValue] = useState(localStorage.getItem('predictedValue') ? JSON.parse(localStorage.getItem('predictedValue')) :false)
  
    const [leftIntensity, setleftIntensity] = useState({
        labels: ["Intensity08", "Intensity09", "Intensity10", "Intensity11", "Intensity12"],
        datasets: [{
            label: "Left Turn Intensity",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(175, 175, 65, .3)",
            borderColor: "rgb(175, 175, 65)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(86, 96, 64)",
            pointBackgroundColor: "rgb(78, 55, 3)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: localStorage.getItem('left') ? JSON.parse(localStorage.getItem('left')) : []
        }]
    })
    const [timeOnTheRoadLine, setTimeOnTheRoadLine] = useState({
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Annual Percentage Of Time On The Road",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(213, 248, 255, .3)",
            borderColor: "rgb(133, 179, 209, 1.00)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(0, 27, 67)",
            pointBackgroundColor: "rgb(0, 27, 67, .5)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: localStorage.getItem('time') ? JSON.parse(localStorage.getItem('time')) : []
        }]
    });
    const [rightItensity, setRightItensity] = useState({
        labels: ["Intensity08", "Intensity09", "Intensity10", "Intensity11", "Intensity12"],
        datasets: [{
            label: "Right Turn Intensity",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(251, 221, 118, .5)",
            borderColor: "rgb(249, 212, 85)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(111, 88, 0)",
            pointBackgroundColor: "rgb(41, 32, 2)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:  localStorage.getItem('right') ? JSON.parse(localStorage.getItem('right')) : []
        }]
    });
    const [barChartAcc, setBarChartAcc] = useState({
        labels: ['Accel.06miles', 'Accel.08miles', 'Accel.09miles', 'Accel.11miles', 'Accel.12miles', 'Accel.14miles'],
        datasets: [{
            label: 'Sudden Acceleration',
            data:  localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc')) : [],
            backgroundColor: [
                'rgba(72, 123, 177, .5)',
                'rgba(175, 175, 65, .5)',
                'rgba(175, 96, 65, .5)',
                'rgba(172, 232, 120, .5)',
                'rgba(90, 81, 2, .5)',
                'rgba(251, 221, 118, .5)'
            ],
        }]
    });
    const [barChartBrake, setBarChartBrake] = useState({
        labels: ["Brake.06miles", "Brake.08miles", "Brake.09miles", "Brake.11miles", "Brake.12miles", "Brake.14miles"],
        datasets: [{
            label: 'Sudden Brakes',
            data:  localStorage.getItem('brake') ? JSON.parse(localStorage.getItem('brake')) : [],
            backgroundColor: [
                'rgba(72, 123, 177, .5)',
                'rgba(175, 175, 65, .5)',
                'rgba(175, 96, 65, .5)',
                'rgba(172, 232, 120, .5)',
                'rgba(90, 81, 2, .5)',
                'rgba(251, 221, 118, .5)'
            ],
        }]
    });
    
    const fetchCustomers = async () => {
        try {
        const customers = await API.getCustomers(token);
        setCustomers(customers);
        } catch (err){
            alert(err);
        }
    }
    
    const selectCustomer = async (evt) => {
        const target = evt.target;
        const customer = {id: target.value, name: target.textContent};
        await getMachineGeneratedData(customer.id);
        localStorage.setItem('selectedCustomer', JSON.stringify(customer));
        setSelectedCustomer(customer);
        window.location.reload(true)
    }

    const getMachineGeneratedData = async (customerId) => {
        const result = await API.getMachineGeneratedData(token, customerId);
        let left = [], time = [], right = [], acc = [], brake = [], value = false;
        (result || []).forEach(data => {
            left.push(data['Left_turn_intensity08'], data['Left_turn_intensity09'], data['Left_turn_intensity10'], data['Left_turn_intensity11'], data['Left_turn_intensity12']);
            time.push(data['Pct_drive_mon'], data['Pct_drive_tue'], data['Pct_drive_wed'], data['Pct_drive_thr'], data['Pct_drive_fri'], data['Pct_drive_sat'], data['Pct_drive_sun']);
            right.push(data['Right_turn_intensity08'], data['Right_turn_intensity09'], data['Right_turn_intensity10'], data['Right_turn_intensity11'], data['Right_turn_intensity12']);
            acc.push(data['Accel_06miles'], data['Accel_08miles'], data['Accel_09miles'], data['Accel_11miles'], data['Accel_12miles'], data['Accel_14miles']);
            brake.push(data['Brake_06miles'], data['Brake_08miles'], data['Brake_09miles'], data['Brake_11miles'], data['Brake_12miles'], data['Brake_14miles']);
            value = data.predictedClaimValue;
        });
        leftIntensity.datasets[0].data = left;
        localStorage.setItem('left', JSON.stringify(left));
        timeOnTheRoadLine.datasets[0].data = time;
        localStorage.setItem('time', JSON.stringify(time));
        rightItensity.datasets[0].data = right;
        localStorage.setItem('right', JSON.stringify(right));
        barChartAcc.datasets[0].data = acc;
        localStorage.setItem('acc',JSON.stringify(acc));
        barChartBrake.datasets[0].data = brake;
        localStorage.setItem('brake',JSON.stringify(brake));
        setleftIntensity(leftIntensity);
        setTimeOnTheRoadLine(timeOnTheRoadLine);
        setRightItensity(rightItensity);
        setBarChartAcc(barChartAcc);
        setBarChartBrake(barChartBrake);
        localStorage.setItem('predictedValue', JSON.stringify(value));
        setPredictedClaimValue(value);
    }

    const addMachineGeneratedData = async () => {
        setInterval(async() => {
           await API.addMachineGenerateData(token)
        }, 43200000); //Every 12 hours
    }

    useEffect(() => {
        fetchCustomers();
    }, [customers, leftIntensity, timeOnTheRoadLine, rightItensity, barChartAcc, barChartBrake])


    return(
        <MDBContainer className="dashboardGrid">
            <Navigatior dashboardActive="active" />
            <MDBRow className="notification">
                <MDBDropdown dropleft>
                    <MDBDropdownToggle caret>
                        {selectedCustomer.name}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        {customers.map((customer)=> {
                            return (<MDBDropdownItem value={customer._id} active={selectedCustomer.id === customer._id ? true : false} 
                                onClick={(evt) => selectCustomer(evt)}> {customer.firstName + "  " + customer.lastName} </MDBDropdownItem>)
                        })}
                    </MDBDropdownMenu>
                    </MDBDropdown>
                    {selectedCustomer.id &&
                        <span className="p-3"> According to Machine Learning model there is a 
                                <p className={predictedClaimValue ? "text-danger d-inline" : "text-success d-inline"}> {predictedClaimValue ? 'higher' : 'lower'} </p> 
                                 chance of customer making an insurance claim.
                        </span> 
                    }
            </MDBRow>
            { selectedCustomer.id &&
                 <MDBRow>
                 <MDBCol>
                    <Line data={leftIntensity} options={{ responsive: true }} />
                </MDBCol>
                <MDBCol>
                    <Line data={timeOnTheRoadLine} options={{ responsive: true }} />
                </MDBCol>
                <MDBCol>
                    <Line data={rightItensity} options={{ responsive: true }} />
                </MDBCol>
            </MDBRow>
            }
            { selectedCustomer.id &&
            <MDBRow>
                <div className="w-100" />
                <MDBCol> 
                    <Bar data={barChartAcc} options={{ responsive: true }} />
                </MDBCol>
                <MDBCol> 
                    <Bar data={barChartBrake} options={{ responsive: true }} />
                </MDBCol>
                </MDBRow>
            }
        </MDBContainer>
    )
}
export default Dashboard