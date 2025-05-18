const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const carousel = document.getElementById('carousel');

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    showSlide(currentSlide);
    startAutoSlide();


    // Responsive Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });



    // Form Validation
    document.getElementById("registrationform").addEventListener("submit", function (e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll(".error").forEach(el => el.textContent = "");

      let isValid = true;

      // Name
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
      }

      // Email
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
      }

      // Date of Birth
      const dob = document.getElementById("dob").value;
      if (!dob) {
        document.getElementById("dobError").textContent = "Select your birth date.";
        isValid = false;
      }

      // Gender
      const genderSelected = document.querySelector('input[name="gender"]:checked');
      if (!genderSelected) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
      }

      // Ticket
      const ticket = document.getElementById("ticket").value;
      if (ticket === "") {
        document.getElementById("ticketError").textContent = "Choose a ticket type.";
        isValid = false;
      }

      // No. of Visitors //
      const noOfVisitors = document.getElementById("no-of-visitors").value;
      if(noOfVisitors === ""){
        document.getElementById("visitorsError").textContent = "Select the number of visitors.";
        isValid = false;
      }

      // Date of Visit
      const visitDate = document.getElementById("date-of-visit").value;
      if (!visitDate) {
        document.getElementById("visitDateError").textContent = "Select your visit date.";
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        // You could now send the data to a server using fetch/AJAX here
      }
    });