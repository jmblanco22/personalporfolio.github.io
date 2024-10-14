 
document.getElementById('show-all-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const additionalProjects = document.querySelector('.additional-projects');
    
    if (additionalProjects.style.display === 'none' || additionalProjects.style.display === '') {
      additionalProjects.style.display = 'flex'; // Show the additional projects
      this.innerHTML = 'Show Less<i class="fas fa-chevron-up"></i>'; // Change button text
    } else {
      additionalProjects.style.display = 'none'; // Hide the additional projects
      this.innerHTML = 'Show All<i class="fas fa-chevron-right"></i>'; // Reset button text
    }
  });