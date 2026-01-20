function updateDayAndDate() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];

    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2,"0");
    const day = String(now.getDate()).padStart(2,"0");
    document.getElementById("day").textContent = dayName;
    document.getElementById("date").textContent = `${day}/${month}/${year}`;
}
function scheduleNextUpdate() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
    const msUntilMidnight = tomorrow-now;
    setTimeout( ()=>{
        updateDayAndDate();
        scheduleNextUpdate();} ,msUntilMidnight);
}
updateDayAndDate();
scheduleNextUpdate();