var _a;
// Elements
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // form elements using their ids
    var pictureInput = document.getElementById("picture");
    // type Assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phonenumberElement = document.getElementById("phone number");
    var addressElement = document.getElementById("address");
    var qualificationElement = document.getElementById("qualification");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (pictureInput && nameElement && emailElement && phonenumberElement && addressElement && qualificationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phonenumber = phonenumberElement.value;
        var address = addressElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile picture elements:
        var pictureFile = (_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var pictureURL = pictureFile ? URL.createObjectURL(pictureFile) : '';
        // Creating resume output
        var resOutput = "\n    <h2>Dynamic Resume</h2>\n    ".concat(pictureURL ? "<img src=\"".concat(pictureURL, "\" alt=\"picture\" class=\"picture\">") : '', "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone Number:</strong> ").concat(phonenumber, " </p>\n    <p><strong>Address:</strong> ").concat(address, " </p>\n    \n    <h3>Qualification</h3>\n    <p>").concat(qualification, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        // resume output:
        var resOutputElement = document.getElementById('resOutput');
        if (resOutputElement) {
            resOutputElement.innerHTML = resOutput;
            resOutputElement.style.display = 'block';
        }
    }
    else {
        console.error("Resume output elements are missing");
    }
});
