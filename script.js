const monthYearHeader = document.querySelector('.heading h3')
const dateHeader = document.querySelector('.date-header')
const dayHeader = document.querySelector('.day-header')
const days = document.querySelectorAll('.dates')
const  daysContainer = document.querySelector('.dates')
const selectDay = document.getElementById('day')
const selectMonth = document.getElementById('month')
const currentYear = document.getElementById('year')
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let date = today.getDate();
let day = today.getDay()



function renderCalendar(){
    monthYearHeader.textContent = `Tháng ${months[month]} năm ${year}`
    dateHeader.textContent = `${date}`
    dayHeader.textContent = `${daysOfWeek[day]}`

    //Lấy ngày đầu tiên trong tháng và số ngày trong tháng
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    
    
   
    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDayOfMonth; i++) {
        daysContainer.innerHTML += `<li></li>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        let className = "";
        let select = "";
        if(i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
            className ="class='active'"
            select = 'selected'
     }

        daysContainer.innerHTML += `<li ${className} on>${i}</li>`;
        selectDay.innerHTML += `<option ${select}>${i}</option>`
    }


    for (let i = 0; i < months.length; i++){

        selectMonth.innerHTML += `<option ${ i=== month ? 'selected' : ''}>${months[i]}</option>`
    }

    currentYear.value = `${year}`
}

days.forEach(day => {

    day.addEventListener('click', (e)=>{
        days.forEach(d => {
            day.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})
   

//Prev-month
document.getElementById('prev-month').addEventListener('click', () => {
    month--;
    if(month <0){
        month = 11;
        year--;
    }
    renderCalendar();
})

//Next-month
document.getElementById('next-month').addEventListener('click', () =>{
    month++;
    if(month>11) {
        month = 0;
        year++;
    }
    renderCalendar();
})
renderCalendar();