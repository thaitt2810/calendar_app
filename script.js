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
    selectDay.innerHTML = "";
    selectMonth.innerHTML = "";

    for (let i = 0; i < firstDayOfMonth; i++) {
        daysContainer.innerHTML += `<li></li>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        let className = "";
        let select = "";
        if(i === Number(date) && month && year){
            className ="class='active'"
     }
        daysContainer.innerHTML += `<li ${className} >${i}</li>`;
        selectDay.innerHTML += `<option value="${i}" ${i === Number(date) ? 'selected' : ''}>${i}</option>`
        
    }

    for (let i = 0; i < months.length; i++){

        selectMonth.innerHTML += `<option value = "${months[i]}" ${ i === month ? 'selected' : ''}>${months[i]}</option>`
    }

    currentYear.value = `${year}`

    const days = daysContainer.querySelectorAll('li');


    days.forEach(day => {

        day.addEventListener('click', (e)=>{
            days.forEach(d => {
                d.classList.remove('active')
            })
            e.target.classList.add('active')
        })
    })

}

document.getElementById('back').addEventListener('click', () => {
    month = today.getMonth();
    year = today.getFullYear();
    date = today.getDate();
    day = today.getDay()
    isActive = true;
    renderCalendar()
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

document.getElementById('prev-year').addEventListener('click', () => {
    year--;
    renderCalendar();
})

document.getElementById('next-year').addEventListener('click', () => {
    year++;  
    renderCalendar();
})

document.querySelector('.submit-btn').addEventListener('click', () =>{
    year = currentYear.value 
    month = selectMonth.value - 1;
    date = selectDay.value
    day = new Date(`'${year}-${month + 1}-${Number(date)}'`).getDay();

    renderCalendar();
})


renderCalendar();