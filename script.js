// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-event-form');
    const eventList = document.getElementById('event-list');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const dateInput = document.getElementById('event-date');
        const descriptionInput = document.getElementById('event-description');
        
        const date = dateInput.value;
        const description = descriptionInput.value;
        
        if (date && description) {
            const listItem = document.createElement('li');
            listItem.textContent = `${date}: ${description}`;
            eventList.appendChild(listItem);
            
            // Clear the form
            dateInput.value = '';
            descriptionInput.value = '';
        }
    });
    
    // Simple calendar rendering (for demo purposes)
    const calendar = document.getElementById('calendar');
    const today = new Date();
    calendar.textContent = `Today is ${today.toDateString()}`;
});