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