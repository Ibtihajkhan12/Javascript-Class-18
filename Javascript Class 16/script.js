function generateResume() {
    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const careerObjective = document.getElementById('careerObjective').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const grade = document.getElementById('grade').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const jobDesc = document.getElementById('jobDesc').value;
    const skills = document.getElementById('skills').value.split(',');
    const hobbies = document.getElementById('hobbies').value;
    const languages = document.getElementById('languages').value;

    // Build the resume HTML
    let resumeHTML = `<h2>${fullName}</h2>`;
    resumeHTML += `<p><strong>Email:</strong> ${email}</p>`;
    resumeHTML += `<p><strong>Phone:</strong> ${phone}</p>`;
    resumeHTML += `<p><strong>Address:</strong> ${address}</p>`;
    
    if (careerObjective) {
        resumeHTML += `<h3>Career Objective</h3><p>${careerObjective}</p>`;
    }

    if (degree && institution && year) {
        resumeHTML += `<h3>Education</h3>
                       <p><strong>Degree:</strong> ${degree}</p>
                       <p><strong>Institution:</strong> ${institution}</p>
                       <p><strong>Year of Completion:</strong> ${year}</p>
                       <p><strong>Grade/Percentage:</strong> ${grade}</p>`;
    }

    if (jobTitle && company) {
        resumeHTML += `<h3>Work Experience</h3>
                       <p><strong>Job Title:</strong> ${jobTitle}</p>
                       <p><strong>Company:</strong> ${company}</p>
                       <p><strong>Duration:</strong> ${duration}</p>
                       <p><strong>Job Description:</strong> ${jobDesc}</p>`;
    }

    if (skills.length > 0) {
        resumeHTML += `<h3>Skills</h3><ul>`;
        skills.forEach(skill => {
            resumeHTML += `<li>${skill.trim()}</li>`;
        });
        resumeHTML += `</ul>`;
    }

    if (hobbies) {
        resumeHTML += `<h3>Hobbies</h3><p>${hobbies}</p>`;
    }

    if (languages) {
        resumeHTML += `<h3>Languages</h3><p>${languages}</p>`;
    }

    // Display the resume
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}

function clearForm() {
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.style.display = 'none';
}





















window.onload = function() {
    // Hide loader and show content once the page is loaded
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.querySelector('.content');
    
    // Simulate delay to show loader for 2 seconds (for demo purposes)
    setTimeout(() => {
      loaderContainer.style.display = 'none';  // Hide loader
      content.style.display = 'block';         // Show content
    }, 2000); // 2-second delay
  };
  
