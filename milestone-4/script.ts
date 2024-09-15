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
    <h2>Editable Resume</h2>
    ${pictureURL ? `<img src="${pictureURL}" alt="picture" class="picture">` : ''}
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
    <p><strong>Phone Number:</strong> <span id="edit-phonenumber" class="editable"> ${phonenumber} </span></p>
    <p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span></p>
    
    <h3>Qualification</h3>
    <p id="edit-qualification" class="editable">${qualification}</p>
    
    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>
    
    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>
    `;

    // Print resume output:

    const resOutputElement = document.getElementById('resOutput');
    if(resOutputElement) {
        resOutputElement.innerHTML = resOutput;
        makeEditable();
    }
} else{
        console.error("Resume output elements are missing");
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable')
    editableElements.forEach(element => {
        element.addEventListener('click' , function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })
                
                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()

            }

        })
    })
}