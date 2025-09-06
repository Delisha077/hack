document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.getElementById('jobs');

    // Simulated function to fetch jobs (replace with actual API call)
    function fetchJobs() {
        // Simulated job data
        const jobs = [
            { title: "Quantum Software Engineer", company: "IBM", location: "Remote" },
            { title: "Quantum Research Scientist", company: "IBM", location: "New York, NY" },
            { title: "Quantum Algorithm Developer", company: "IBM", location: "San Francisco, CA" }
        ];

        // Clear existing jobs
        jobList.innerHTML = '';

        // Populate job list
        jobs.forEach(job => {
            const li = document.createElement('li');
            li.textContent = `${job.title} at ${job.company} - ${job.location}`;
            jobList.appendChild(li);
        });
    }

    // Fetch jobs on page load
    fetchJobs();
});
