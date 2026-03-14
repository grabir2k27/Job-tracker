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


document.querySelector('.delete-btn').addEventListener('click', function(){
    if(confirm('Are you sure you want to remove this job?')){
        this.closest('.job-card').remove();
    }
});

const interviewBtn = document.querySelector('.action-btn.interview');
const statusBadge = document.querySelector('.status-badge');

interviewBtn.addEventListener('click' , () => {
    ststusBadge.textContent = 'INTERVIEW';
    ststusBadge.style.backround = '#e6fffa'; 
    statusBadge.style.color = '#2ecc71';
});
document.querySelector('.delete-btn').addEventListener('click', function(){
    if(confirm('Are you sure you want to remove this job?')){
        this.closest('.job-card').remove();
    }
});

const interviewBtn = document.querySelector('.action-btn.interview');
const statusBadge = document.querySelector('.status-badge');

interviewBtn.addEventListener('click' , () => {
    ststusBadge.textContent = 'INTERVIEW';
    ststusBadge.style.backround = '#e6fffa'; 
    statusBadge.style.color = '#2ecc71';
});
document.querySelector('.delete-btn').addEventListener('click', function(){
    if(confirm('Are you sure you want to remove this job?')){
        this.closest('.job-card').remove();
    }
});

const interviewBtn = document.querySelector('.action-btn.interview');
const statusBadge = document.querySelector('.status-badge');

interviewBtn.addEventListener('click' , () => {
    ststusBadge.textContent = 'INTERVIEW';
    ststusBadge.style.backround = '#e6fffa'; 
    statusBadge.style.color = '#2ecc71';
});
document.querySelector('.delete-btn').addEventListener('click', function(){
    if(confirm('Are you sure you want to remove this job?')){
        this.closest('.job-card').remove();
    }
});

const interviewBtn = document.querySelector('.action-btn.interview');
const statusBadge = document.querySelector('.status-badge');

interviewBtn.addEventListener('click' , () => {
    ststusBadge.textContent = 'INTERVIEW';
    ststusBadge.style.backround = '#e6fffa'; 
    statusBadge.style.color = '#2ecc71';
});
