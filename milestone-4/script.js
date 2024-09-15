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
        var resOutput = "\n    <h2>Editable Resume</h2>\n    ".concat(pictureURL ? "<img src=\"".concat(pictureURL, "\" alt=\"picture\" class=\"picture\">") : '', "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n    <p><strong>Phone Number:</strong> <span id=\"edit-phonenumber\" class=\"editable\"> ").concat(phonenumber, " </span></p>\n    <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span></p>\n    \n    <h3>Qualification</h3>\n    <p id=\"edit-qualification\" class=\"editable\">").concat(qualification, "</p>\n    \n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        // Print resume output:
        var resOutputElement = document.getElementById('resOutput');
        if (resOutputElement) {
            resOutputElement.innerHTML = resOutput;
            makeEditable();
        }
    }
    else {
        console.error("Resume output elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
