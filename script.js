function updateTracker(total, interview, rejected) {
    document.createElement("total-count").textContent = total;
    document.createElement("interview-count").textContent = interview;
    document.createElement("rejected-count"). textContent = rejected;

}

const allData = {
    applications: 8,
    interview: 0,
    rejected: 0,
}

const buttons = document.querySelectorAll("header-btn");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.forEach(btn => btn.classList.remove('active'));
        const value = button.getAttribute('data-btn');
        console.log('Filtering by: ${value}')
        });
    });