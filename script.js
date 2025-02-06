// script.js
document.getElementById('terminal').addEventListener('click', function() {
    document.getElementById('userInput').focus();
});

document.getElementById('userInput').addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        var command = document.getElementById('typedCommand').textContent;
        checkCommand(command);
        document.getElementById('typedCommand').textContent = '';
        document.getElementById('userInput').value = '';
    } else {
        setTimeout(() => {
            document.getElementById('typedCommand').textContent = document.getElementById('userInput').value;
        }, 0);
    }
});

function checkCommand(command) {
    var output = document.getElementById('output');

    if (command === 'printf("Education");') {
        output.innerHTML = `
            <strong>Education:</strong><br>
            <ul>
                <li>The George Washington University, School of Engineering & Applied Science, Washington, DC<br>
                MS in Computer Science, May 2025<br>
                GPA - 3.90/4.00<br>
                Coursework - Design and Analysis of Algorithm, Computer System Architecture</li>
                <li>Kalinga Institute of Industrial Technology, Bhubaneshwar, India<br>
                B.Tech in Computer Science and System Engineering, May 2022<br>
                GPA - 3.72/4.00<br>
                Coursework - Object Oriented Programming, Data Structures, Operating Systems, Software Engineering, Cloud Computing</li>
            </ul>`; // Education details as before
    } else if (!command.endsWith(';')) {
        output.innerHTML = `<span style="color: red;">Semicolon ; tera baap lagayega madarchod</span>`;
    } else if (!command.includes('printf')) {
        output.innerHTML = `<span style="color: red;">Behen ki lund, ye galat function hai. </span>`;
    } else if (!command.includes('"') || !command.includes('(') || !command.includes(')')) {
        output.innerHTML = `<span style="color: red;">Chutiye andha hai kya. Bracket band kar"</span>`;
    } else if (!command.includes('Education')) {
        output.innerHTML = `<span style="color: red;">Spelling dhang se likh chutmarike.</span>`;
    } else {
        output.innerHTML = `<span style="color: red;">Tu aage badh. Tere se nahi hoga lode.</span>`;
    }
}

$(document).ready(function(){
    // Smooth scrolling
    $('.nav-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - var(--nav-height),
        }, 500, 'linear');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const roles = ['Full-Stack', 'Front-end', 'Back-end']; // List of roles to cycle through
    let currentRoleIndex = 0; // Start with the first role
    const roleElement = document.getElementById('dynamic-role'); // The span where the role is displayed

    function switchRole() {
        roleElement.textContent = roles[currentRoleIndex]; // Update the text content of the role
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role, looping back to the start if necessary
    }

    // Call switchRole every 2 seconds
    setInterval(switchRole, 2000);
});
