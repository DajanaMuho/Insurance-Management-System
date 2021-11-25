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
    let [predictedClaimValue, setPredictedClaimValue] = useState(false);
    let [predictedClaimAmount, setPredictedClaimAmount] = useState(0);
  
    const [leftIntensity, setleftIntensity] = useState({
        labels: ["Intensity08", "Intensity09", "Intensity10", "Intensity11", "Intensity12"],
        datasets: [{
            label: "Left Turn Intensity",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
        }]
    })
    const [timeOnTheRoadLine, setTimeOnTheRoadLine] = useState({
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Annual Percentage Of Time On The Road",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }]
    });
    const [rightItensity, setRightItensity] = useState({
        labels: ["Intensity08", "Intensity09", "Intensity10", "Intensity11", "Intensity12"],
        datasets: [{
            label: "Right Turn Intensity",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }]
    });
    const [barChartAcc, setBarChartAcc] = useState({
        labels: ['Accel.06miles', 'Accel.08miles', 'Accel.09miles', 'Accel.11miles', 'Accel.12miles', 'Accel.14miles'],
        datasets: [{
            label: 'Sudden Acceleration',
            data: [],
            backgroundColor: [
                'rgba(255, 85, 136, 0.2)',
                'rgba(251, 147, 42, 0.2)',
                'rgba(254, 186, 29, 0.2)',
                'rgba(44, 217, 217, 0.2)',
                'rgba(25, 137, 213, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
        }]
    });
    const [barChartBrake, setBarChartBrake] = useState({
        labels: ["Brake.06miles", "Brake.08miles", "Brake.09miles", "Brake.11miles", "Brake.12miles", "Brake.14miles"],
        datasets: [{
            label: 'Sudden Brakes',
            data: [],
            backgroundColor: [
                'rgba(255, 85, 136, 0.2)',
                'rgba(251, 147, 42, 0.2)',
                'rgba(254, 186, 29, 0.2)',
                'rgba(44, 217, 217, 0.2)',
                'rgba(25, 137, 213, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
        }]
    });
    
    const fetchCustomers = async () => {
        //TODO: ADd fail catch
        const customers = await API.getCustomers(token);
        setCustomers(customers);
    }
    
    const selectCustomer = (evt) => {
        const target = evt.target;
        const customer = {id: target.value, name: target.textContent};
        setSelectedCustomer(customer);
        localStorage.setItem('selectedCustomer', JSON.stringify(customer));
        getMachineGeneratedData();
    }

    const getMachineGeneratedData = async () => {
        const result = await API.getMachineGeneratedData(token, selectedCustomer.id);
        //CHARTS
        let left = [], time = [], right = [], acc = [], brake = [], value = false, amount = 0;
        (result || []).forEach(data => {
            left.push(data['Left_turn_intensity08'], data['Left_turn_intensity09'], data['Left_turn_intensity10'], data['Left_turn_intensity11'], data['Left_turn_intensity12']);
            time.push(data['Pct_drive_mon'], data['Pct_drive_tue'], data['Pct_drive_wed'], data['Pct_drive_thr'], data['Pct_drive_fri'], data['Pct_drive_sat'], data['Pct_drive_sun']);
            right.push(data['Right_turn_intensity08'], data['Right_turn_intensity09'], data['Right_turn_intensity10'], data['Right_turn_intensity11'], data['Right_turn_intensity12']);
            acc.push(data['Accel_06miles'], data['Accel_08miles'], data['Accel_09miles'], data['Accel_11miles'], data['Accel_12miles'], data['Accel_14miles']);
            brake.push(data['Brake_06miles'], data['Brake_08miles'], data['Brake_09miles'], data['Brake_11miles'], data['Brake_12miles'], data['Brake_14miles']);
            value = data.predictedClaimValue;
            amount = data.predictedClaimAmount;
        });
        leftIntensity.datasets[0].data = left;
        timeOnTheRoadLine.datasets[0].data = time;
        rightItensity.datasets[0].data = right;
        barChartAcc.datasets[0].data = acc;
        barChartBrake.datasets[0].data = brake;
        setleftIntensity(leftIntensity);
        setTimeOnTheRoadLine(timeOnTheRoadLine);
        setRightItensity(rightItensity);
        setBarChartAcc(barChartAcc);
        setBarChartBrake(barChartBrake);
        setPredictedClaimValue(value);
        setPredictedClaimAmount(amount);
    }

    const addMachineGeneratedData = async () => {
        setInterval(async() => {
           await API.addMachineGenerateData(token)
        }, 43200000); //Every 12 hours
    }

    useEffect(() => {
        // addMachineGeneratedData(); Import data to db before
        fetchCustomers();
        getMachineGeneratedData();
    }, [customers]) //,leftIntensityChart, timeOnRoadChart, rightIntensityChart, accChart, brakeChart])

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
                        <span className="p-3"> According to ML model there is a
                                    <p className="text-success d-inline "> {predictedClaimValue ? 'higher' : 'lower'} </p> 
                                    chance of customer proclaming a claim. 
                                    Amount:  <p className="font-weight-bold d-inline ">{predictedClaimAmount}</p>
                        </span> 
                    }
            </MDBRow>
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
            <MDBRow>
                <div className="w-100" />
                <MDBCol> 
                    <Bar data={barChartAcc} options={{ responsive: true }} />
                </MDBCol>
                <MDBCol> 
                    <Bar data={barChartBrake} options={{ responsive: true }} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default Dashboard