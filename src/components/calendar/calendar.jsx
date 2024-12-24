import React, { useEffect} from "react";
import './calendar.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CountContext } from "../../context/context";
import { useContext } from "react";


function Calendar() {
    const {state, dispatch} = useContext(CountContext);

useEffect(()=>{
    let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();





const day = document.querySelector(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

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
        currdate.innerText = `${months[month]} ${year}`;
        
        // update the HTML of the dates element 
        // with the generated calendar
        day.innerHTML = lit;
        let allList = document.querySelectorAll(".item");
        allList.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                let theDay = e.currentTarget.innerHTML;
                let selectedDay = theDay + '/' + (month + 1) + '/' + year;
                
                if (state.checkinBox) {
                    dispatch({type: "add-checkin", payload: selectedDay});
                    
                 } else if(state.checkoutBox) {
                  dispatch({type: "add-checkout", payload: selectedDay});
                    
              }
                
                
            });
        })

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
}, [dispatch, state.checkinBox, state.checkoutBox]); 


 const handeCalendarClose = ()=>{
      dispatch({type: 'close-calendar'});
 }
 


    return (<>
    <div class="calendar-container" style={{display: `${state.openCalendar ? `block` : `none`}`}}>
        <header class="calendar-header">
            <div class="calendar-navigation">
                <span id="calendar-prev" class="material-symbols-rounded">
                <ArrowBackIosIcon /> 
                </span>
                <p class="calendar-current-date"></p>
                <span id="calendar-next" class="material-symbols-rounded">
                <ArrowForwardIosIcon />    
                </span>
            </div>
        </header>

        <div class="calendar-body">
            <ul class="calendar-weekdays">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul class="calendar-dates"></ul>
        </div>

        <button type="submit" className="calendar-submit" onClick={handeCalendarClose}>Done</button>
    </div>
    </>)
}

export default Calendar;