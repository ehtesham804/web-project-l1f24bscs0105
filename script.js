/* ==========================================================================
   Ehtesham Arshad - Portfolio Logic (script.js)
   Interactive Terminal, Project Filtering, Modal & Form Handling
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navbar Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // 2. Interactive Terminal Emulator
    const terminalInput = document.getElementById("terminalInput");
    const terminalOutput = document.getElementById("terminalOutput");
    const terminalBody = document.getElementById("terminalBody");

    const commands = {
        help: "Available commands: <span class='cmd-highlight'>whoami</span>, <span class='cmd-highlight'>skills</span>, <span class='cmd-highlight'>projects</span>, <span class='cmd-highlight'>ucp</span>, <span class='cmd-highlight'>clear</span>",
        whoami: "Ehtesham Arshad | BSCS Student at University of Central Punjab (Roll No: L1F24BSCS0105).",
        skills: "Languages: C++, Python, C (Linux), JS, HTML/CSS, 8086 Assembly, SQL.",
        projects: "1. NextGen Freelance (AI FYP)<br>2. Cybersecurity Simulator (C++)<br>3. 8086 Assembly Utility<br>4. Web Portfolio",
        ucp: "5th Semester Courses: Web Technologies, Operating Systems (Ubuntu/C), AI (Python), Information Security (C++), Cybersecurity."
    };

    if (terminalInput) {
        terminalInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const rawInput = terminalInput.value.trim().toLowerCase();
                if (!rawInput) return;

                // Echo command
                const cmdLine = document.createElement("p");
                cmdLine.innerHTML = `<span class="prompt">ehtesham@ucp-lahore:~$</span> ${rawInput}`;
                terminalOutput.appendChild(cmdLine);

                if (rawInput === "clear") {
                    terminalOutput.innerHTML = "";
                } else if (commands[rawInput]) {
                    const responseLine = document.createElement("p");
                    responseLine.innerHTML = commands[rawInput];
                    terminalOutput.appendChild(responseLine);
                } else {
                    const errorLine = document.createElement("p");
                    errorLine.innerHTML = `Command not found: ${rawInput}. Type <span class='cmd-highlight'>help</span> for commands.`;
                    terminalOutput.appendChild(errorLine);
                }

                terminalInput.value = "";
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });
    }

    // 3. Project Category Filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filterVal = btn.getAttribute("data-filter");
            projectCards.forEach((card) => {
                const category = card.getAttribute("data-category");
                if (filterVal === "all" || filterVal === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 4. Contact Form Submission Simulation
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            formStatus.textContent = `Thanks ${name}! Your message has been logged successfully.`;
            contactForm.reset();
        });
    }
});

// 5. Architecture Modal Functions
function openModal(title, description) {
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = description;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}
