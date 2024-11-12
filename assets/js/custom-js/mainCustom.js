// animation effect by aos js
AOS.init({
    offset: 150,
    duration: 850,
});

// scroll fn ===============START
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
        $('#image').attr("src", "../assets/images/logo/white-logo.png");
    } else {
        $('.nav').removeClass('affix');
        $('#image').attr("src", "../assets/images/logo/logo.png");
    }
});
// scroll fn ===============END



// navgation fn ================START
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
// navgation fn ================END

// subscribe fn
function subscribe() {
    let emailInputFeid = document.querySelector(".emailInputFeid .form-group input").value;
    // console.log(emailInputFeid);
    (emailInputFeid == "") ? alert("Please Fill The Email Box , Is Empty") : alert("Thankyou for Subscribe your email Id is " + emailInputFeid);
    document.querySelector(".emailInputFeid .form-group input").value = '';
}

// ----------/////////====banner image funtion START====////////====='
    
// access the container
let sliderContainer = document.querySelectorAll(".image-container .container");
let textContainer = document.querySelectorAll(".maintext .text-container");

// Access the next and back buttons
let nextbtn = document.querySelector(".next");
let backBtn = document.querySelector(".prev");

// Access the underline animation container
let underline = document.querySelector(".underline-animation");

var count = 0;
var autoSlideInterval; // Variable to store the setInterval

// Function to move to the next slide (with looping)
function slidenext() {
    console.log("Next button clicked");

    // Remove active class from the current slide
    sliderContainer[count].classList.remove("active");
    textContainer[count].classList.remove("active");

    // Increment count, but loop back to 0 if we reach the end
    count = (count + 1) % sliderContainer.length;

    // Add active class to the new slide
    sliderContainer[count].classList.add("active");
    textContainer[count].classList.add("active");

    // Trigger the underline animation
    triggerUnderline();
}

// Function to move to the previous slide (with looping)
function slideback() {
    console.log("Back button clicked");

    // Remove active class from the current slide
    sliderContainer[count].classList.remove("active");
    textContainer[count].classList.remove("active");

    // Decrement count, but loop back to the last slide if we reach the beginning
    count = (count - 1 + sliderContainer.length) % sliderContainer.length;

    // Add active class to the new slide
    sliderContainer[count].classList.add("active");
    textContainer[count].classList.add("active");

    // Trigger the underline animation
    triggerUnderline();
}

// Function to trigger the underline animation
function triggerUnderline() {
    // Add the active class to animate the underline
    underline.classList.add("active");

    // Remove the active class after the animation ends (to allow re-triggering)
    setTimeout(() => {
        underline.classList.remove("active");
    }, 500); // Match the animation duration (300ms)
}

// Event listener for the next button
nextbtn.addEventListener("click", function () {
    clearInterval(autoSlideInterval); // Stop the auto-slide when the user clicks
    slidenext(); // Trigger the next slide manually
    startAutoSlide(); // Restart auto-slide after the manual click (optional)
});

// Event listener for the back button
backBtn.addEventListener("click", function () {
    clearInterval(autoSlideInterval); // Stop the auto-slide when the user clicks
    slideback(); // Trigger the previous slide manually
    startAutoSlide(); // Restart auto-slide after the manual click (optional)
});

// Function to start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(slidenext, 5000); // Slide every 3 seconds (3000ms)
}

// Start auto-slide when the page loads
startAutoSlide();

// ----------/////////====banner image funtion END====////////====='

// ----------/////////==== Card slider fn START ====////////====='

//

let currentIndex = 0;
        const autoplayInterval = 2000; // Interval in milliseconds
        let interval;
        let visibleCards = 3; // Default visible cards (3 cards on full screen)

        /* Update the number of visible cards based on window size */
        function updateVisibleCards() {
            const windowWidth = window.innerWidth;

            if (windowWidth >= 1024) {
                visibleCards = 3; // For large screens, show 3 cards
            } else if (windowWidth >= 768) {
                visibleCards = 2; // For tablets, show 2 cards
            } else {
                visibleCards = 1; // For mobile, show 1 card
            }
        }

        /* Move slide function */
        function moveSlide(direction) {
            const cards = document.querySelectorAll('.card-item');
            const totalCards = cards.length;

            // Update the index
            currentIndex += direction;

            // Wrap around if needed
            if (currentIndex < 0) {
                currentIndex = totalCards - visibleCards;
            } else if (currentIndex > totalCards - visibleCards) {
                currentIndex = 0;
            }

            updateSliderPosition();
        }

        /* Update slider position based on current index */
        function updateSliderPosition() {
            const slider = document.querySelector('.slider');
            const offset = -currentIndex * (100 / visibleCards); // Adjust based on visible cards
            slider.style.transform = `translateX(${offset}%)`;
        }

        /* Autoplay function */
        function autoplay() {
            moveSlide(1);
        }

        /* Start autoplay */
        function startAutoplay() {
            interval = setInterval(autoplay, autoplayInterval);
        }

        /* Stop autoplay */
        function stopAutoplay() {
            clearInterval(interval);
        }

        /* Manage autoplay on hover */
        const cardSlideContainer = document.querySelector('.card-container');
        cardSlideContainer.addEventListener('mouseover', stopAutoplay);
        cardSlideContainer.addEventListener('mouseout', startAutoplay);

        /* Navigation button listeners */
        const prevButton = document.querySelector('.prev-btn');
        const nextButton = document.querySelector('.next-btn');

        prevButton.addEventListener('click', () => moveSlide(-1));
        nextButton.addEventListener('click', () => moveSlide(1));

        /* Window resize listener to update the number of visible cards */
        window.addEventListener('resize', () => {
            updateVisibleCards();
            updateSliderPosition(); // Update the slider position based on new visible cards
        });

        /* Start autoplay and initialize visible cards on page load */
        updateVisibleCards();
        startAutoplay();


// card slider fn END 



