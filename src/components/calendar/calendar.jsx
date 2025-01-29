import React, { useEffect, useState} from "react";
import './calendar.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CountContext } from "../../context/context";
import { useContext } from "react";


function Calendar() {
    const {state, dispatch} = useContext(CountContext);
    let [checkdate, setCheckdate] = useState({checkIn: '', checkOut: ''});
    let [selectDates, setSelectDates] = useState({selectCheckin: '', selectCheckout: ''});
    let [count, setCount] = useState(0);

useEffect(()=>{
    let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();




const day = document.querySelector(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

const curryear = document
    .querySelector(".calendar-current-year");    

const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    const manipulate = () => {

        // Get the first day of the month
        let dayone = new Date(year, month, 1).getDay();
    
        // Get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();
        
    
        // Get the day of the last date of the month
        let dayend = new Date(year, month, lastdate).getDay();
    
        // Get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();
    
        // Variable to store the generated calendar HTML
        let lit = "";
    
        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            lit +=
                `<li class="inactive">${monthlastdate - i + 1}</li>`;
        }

      
    
        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
    
            // Check if the current date is today
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "active item"
                : "item";
            lit += `<li class="${isToday}">${i}</li>`;
        }
    
        // Loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            lit += `<li class="inactive">${i - dayend + 1}</li>`
        }
    
        // Update the text of the current date element 
        // with the formatted current month and year
        currdate.innerText = `${months[month]}`;
        curryear.innerText = `${year}`;
        
        // update the HTML of the dates element 
        // with the generated calendar
        day.innerHTML = lit;
        

    }
    
    manipulate();

    prenexIcons.forEach(icon => {

        // When an icon is clicked
       icon.addEventListener("click", () => {
             
            // Check if the icon is "calendar-prev"
            // or "calendar-next"
            month = icon.id === "calendar-prev" ? month - 1 : month + 1;
    
            // Check if the month is out of range
            if (month < 0 || month > 11) {
    
                // Set the date to the first day of the 
                // month with the new year
                date = new Date(year, month, new Date().getDate());
    
                // Set the year to the new year
                year = date.getFullYear();
    
                // Set the month to the new month
                month = date.getMonth();
            }
    
            else {
    
                // Set the date to the current date
                date = new Date();
            }
    
            // Call the manipulate function to 
            // update the calendar display
            manipulate();

        });

        
    });
}, []); 

useEffect(()=>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let allList = document.querySelectorAll(".item");
    allList.forEach((item)=>{
        
        let month = document.querySelector(".calendar-current-date").innerHTML;
        let year = document.querySelector(".calendar-current-year").innerHTML;
        let monthNum = '';
        for (let i = 0; i < months.length; i++) {
          if(months[i] === month){
            monthNum = i + 1;
          }
               
        }

        let previousDates = monthNum + '/' + item.innerHTML + '/' + year;
        let nowDate = new Date();
        
        
        if (new Date(previousDates).setHours(0,0,0,0) < nowDate.setHours(0,0,0,0) ){

        item.style.color = "#aaaaaa";

        item.addEventListener("click", ()=>{
            return null;
        });
            
        } else {

            item.addEventListener('click', (e)=>{
                item.style.backgroundColor = '#ddd598';
            
                let selectedDay = e.currentTarget.innerHTML + '/' + monthNum + '/' + year;
                let selectCheck = monthNum + '/' + e.currentTarget.innerHTML + '/' + year;

                if (state.checkinBox) {
                    setCheckdate({...checkdate, checkIn: selectedDay});
                    setSelectDates({...selectDates, selectCheckin: selectCheck});
                    dispatch({type: "checkout-clicked"})

                }else if(state.checkoutBox){
                    setCheckdate({...checkdate, checkOut: selectedDay});
                    setSelectDates({...selectDates, selectCheckout : selectCheck});

                }
                
            })
        }  
        
        
        });

        if (selectDates.selectCheckin !== '' && selectDates.selectCheckout !== '') {
          let allDates = document.querySelectorAll(".item");
          allDates.forEach((item)=>{
            let month = document.querySelector(".calendar-current-date").innerHTML;
            let year = document.querySelector(".calendar-current-year").innerHTML;
            let monthNum = '';
            for (let i = 0; i < months.length; i++) {
              if(months[i] === month){
              monthNum = i + 1;
            }
               
        }

        let checkedDates = monthNum + '/' + item.innerHTML + '/' + year;

        if (new Date(checkedDates).setHours(0,0,0,0) >= new Date(selectDates.selectCheckin).setHours(0,0,0,0) &&  new Date(checkedDates).setHours(0,0,0,0) <= new Date(selectDates.selectCheckout).setHours(0,0,0,0)) {
            
            item.style.backgroundColor = '#ddd598';
        }else{
            item.style.backgroundColor = 'white';


        }

          })
         
    
        }
        


}, [count, dispatch, state.checkinBox, state.checkoutBox, checkdate]);

useEffect(()=>{

    dispatch({type: "add-checkin", payload: checkdate.checkIn});
    dispatch({type: "add-checkout", payload: checkdate.checkOut});
   

}, [dispatch, checkdate.checkIn, checkdate.checkOut])



 const handleNext = ()=>{
    setCount(count+=1);
 }
 const handlePrevious = ()=>{
    setCount(count-=1);
 }


    return (<>
    <div id="calendar-container" >
        <header className="calendar-header">
            <div className="calendar-navigation">
                <span id="calendar-prev" className="material-symbols-rounded" onClick={handlePrevious}>
                <ArrowBackIosIcon /> 
                </span>
                <p className="calendar-current-date"></p>
                <p className="calendar-current-year"></p>
                <span id="calendar-next" className="material-symbols-rounded" onClick={handleNext}>
                <ArrowForwardIosIcon />    
                </span>
            </div>
        </header>

        <div className="calendar-body">
            <ul className="calendar-weekdays">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul className="calendar-dates"></ul>
        </div>

    </div>

    </>)
}

export default Calendar;