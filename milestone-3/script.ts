// Elements
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // form elements using their ids

    const pictureInput = document.getElementById("picture") as HTMLInputElement;

    // type Assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phonenumberElement = document.getElementById("phone number") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const qualificationElement = document.getElementById("qualification") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if(pictureInput && nameElement && emailElement && phonenumberElement && addressElement && qualificationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phonenumber = phonenumberElement.value;
        const address = addressElement.value;
        const qualification = qualificationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

    // Profile picture elements:
    
    const pictureFile = pictureInput.files?.[0]
    const pictureURL = pictureFile ? URL.createObjectURL(pictureFile) : '';

    // Creating resume output
    const resOutput = `
    <h2>Dynamic Resume</h2>
    ${pictureURL ? `<img src="${pictureURL}" alt="picture" class="picture">` : ''}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phonenumber} </p>
    <p><strong>Address:</strong> ${address} </p>
    
    <h3>Qualification</h3>
    <p>${qualification}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // resume output:

    const resOutputElement = document.getElementById('resOutput');
    if(resOutputElement) {
        resOutputElement.innerHTML = resOutput;
        resOutputElement.style.display = 'block';
    }
} else{
        console.error("Resume output elements are missing");
    }
});

