/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
*/

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".menu_items");
const list_links = document.querySelectorAll(".menu_links");

menu.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLinks.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        closeMenu();
    }
});

if (window.matchMedia("(max-width: 900px)").matches) {
    closeMenu();
};

function closeMenu(){
    list_links.forEach((link) => {
        link.addEventListener("click",()=>{
            menu.classList.remove("active");
            menuLinks.classList.remove("active");
        })
    })
}

/* Paragraph update Depending on scroll possition */

// Function to add the active class based on scroll position
function addActiveClassOnScrollHome_container() {
    const home_containerP = document.querySelector('.home_container p'); // Select the paragraph element

    // Define scroll position thresholds for different screen sizes
    const mobilescrollThreshold = 0;      // Set the scroll position threshold (in pixels) for mobile
    const tabletScrollThreshold = 50;      // Set the scroll position threshold (in pixels) for tablets
    const PCscrollThreshold = 0;          // Set the scroll position threshold (in pixels) for desktop

    // Function to check screen width and scroll position
    function checkScrollAndWidth() {
        // Check the window width to determine behavior
        if (window.innerWidth <= 600) {
            // Mobile behavior
            if (window.scrollY >= mobilescrollThreshold) {
                home_containerP.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                home_containerP.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else if (window.innerWidth > 600 && window.innerWidth <= 975) {
            // Tablet behavior
            if (window.scrollY >= tabletScrollThreshold) {
                home_containerP.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                home_containerP.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else {
            // Desktop behavior
            if (window.scrollY >= PCscrollThreshold) {
                home_containerP.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                home_containerP.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', checkScrollAndWidth);

    // Also check the current scroll position on load (in case the user starts scrolled down)
    checkScrollAndWidth();
}

// Call the function to activate the scroll event listener
addActiveClassOnScrollHome_container();

// Function to log the current scroll position
function logScrollPosition() {
    console.log(window.scrollY);
}

// Attach the function to the scroll event
window.addEventListener('scroll', logScrollPosition);

/* Paragraph update Depending on scroll possition END */



// SAME education_h2 SAME //
function addActiveClassOnScrollEducation_h2() {
    const education_h2 = document.querySelector('.education h2'); // Select the paragraph element

    // Define scroll position thresholds for different screen sizes
    const mobilescrollThreshold = 440;      // Set the scroll position threshold (in pixels) for mobile
    const tabletScrollThreshold = 640;      // Set the scroll position threshold (in pixels) for tablets
    const PCscrollThreshold = 220;          // Set the scroll position threshold (in pixels) for desktop

    // Function to check screen width and scroll position
    function checkScrollAndWidth() {
        // Check the window width to determine behavior
        if (window.innerWidth <= 600) {
            // Mobile behavior
            if (window.scrollY >= mobilescrollThreshold) {
                education_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                education_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else if (window.innerWidth > 600 && window.innerWidth <= 975) {
            // Tablet behavior
            if (window.scrollY >= tabletScrollThreshold) {
                education_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                education_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else {
            // Desktop behavior
            if (window.scrollY >= PCscrollThreshold) {
                education_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                education_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', checkScrollAndWidth);

    // Also check the current scroll position on load (in case the user starts scrolled down)
    checkScrollAndWidth();
}

// Call the function to activate the scroll event listener
addActiveClassOnScrollEducation_h2();

//---------------------------------------------------------------------------



// SAME Image_slider_h2 SAME //
function addActiveClassOnScrollImage_slider_h2() {
    const Image_slider_h2 = document.querySelector('.image_slider h2'); // Select the paragraph element

    // Define scroll position thresholds for different screen sizes
    const mobilescrollThreshold = 2440;      // Set the scroll position threshold (in pixels) for mobile
    const tabletScrollThreshold = 2450;      // Set the scroll position threshold (in pixels) for tablets
    const PCscrollThreshold = 1570;          // Set the scroll position threshold (in pixels) for desktop

    // Function to check screen width and scroll position
    function checkScrollAndWidth() {
        // Check the window width to determine behavior
        if (window.innerWidth <= 600) {
            // Mobile behavior
            if (window.scrollY >= mobilescrollThreshold) {
                Image_slider_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                Image_slider_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else if (window.innerWidth > 600 && window.innerWidth <= 975) {
            // Tablet behavior
            if (window.scrollY >= tabletScrollThreshold) {
                Image_slider_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                Image_slider_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else {
            // Desktop behavior
            if (window.scrollY >= PCscrollThreshold) {
                Image_slider_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                Image_slider_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', checkScrollAndWidth);

    // Also check the current scroll position on load (in case the user starts scrolled down)
    checkScrollAndWidth();
}

// Call the function to activate the scroll event listener
addActiveClassOnScrollImage_slider_h2()




// SAME services_h2 SAME //
function addActiveClassOnScrollServices_h2() {
    const services_h2 = document.querySelector('.services h2'); // Select the paragraph element

    // Define scroll position thresholds for different screen sizes
    const mobilescrollThreshold = 3340;      // Set the scroll position threshold (in pixels) for mobile
    const tabletScrollThreshold = 2950;      // Set the scroll position threshold (in pixels) for tablets
    const PCscrollThreshold = 2500;          // Set the scroll position threshold (in pixels) for desktop

    // Function to check screen width and scroll position
    function checkScrollAndWidth() {
        // Check the window width to determine behavior
        if (window.innerWidth <= 600) {
            // Mobile behavior
            if (window.scrollY >= mobilescrollThreshold) {
                services_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                services_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else if (window.innerWidth > 600 && window.innerWidth <= 975) {
            // Tablet behavior
            if (window.scrollY >= tabletScrollThreshold) {
                services_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                services_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else {
            // Desktop behavior
            if (window.scrollY >= PCscrollThreshold) {
                services_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                services_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', checkScrollAndWidth);

    // Also check the current scroll position on load (in case the user starts scrolled down)
    checkScrollAndWidth();
}

// Call the function to activate the scroll event listener
addActiveClassOnScrollServices_h2();


//---------------------------------------------------------------------------

// SAME testimonials_box h2 SAME //
function addActiveClassOnScrolltestimonials_box_h2() {
    const testimonials_box_h2 = document.querySelector('.testimonials_box h2'); // Select the paragraph element

    // Define scroll position thresholds for different screen sizes
    const mobilescrollThreshold = 4620;      // Set the scroll position threshold (in pixels) for mobile
    const tabletScrollThreshold = 4900;      // Set the scroll position threshold (in pixels) for tablets
    const PCscrollThreshold = 4200;          // Set the scroll position threshold (in pixels) for desktop

    // Function to check screen width and scroll position
    function checkScrollAndWidth() {
        // Check the window width to determine behavior
        if (window.innerWidth <= 600) {
            // Mobile behavior
            if (window.scrollY >= mobilescrollThreshold) {
                testimonials_box_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                testimonials_box_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else if (window.innerWidth > 600 && window.innerWidth <= 975) {
            // Tablet behavior
            if (window.scrollY >= tabletScrollThreshold) {
                testimonials_box_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                testimonials_box_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        } else {
            // Desktop behavior
            if (window.scrollY >= PCscrollThreshold) {
                testimonials_box_h2.classList.add('active'); // Add 'active' class when scrolled down
            } else {
                testimonials_box_h2.classList.remove('active'); // Remove 'active' class when scrolled up
            }
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', checkScrollAndWidth);

    // Also check the current scroll position on load (in case the user starts scrolled down)
    checkScrollAndWidth();
}

// Call the function to activate the scroll event listener
addActiveClassOnScrolltestimonials_box_h2();



/* ---------------- IMAGE SLIDER -------------- */
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]); // Moves the first item to the end
});

prev.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]); // Moves the last item to the beginning
});


/*  ROTATING CIRCLE EFFECT  */

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 7.8}deg)">${char}</span>`
).join(""); // .join("") to make it a single string



/*  ADDING THE CURRENT PAGE HOVER EFFECT  */


// Selecting each menu link individually
const MenuLinkChild1 = document.querySelector(".child1");
const MenuLinkChild2 = document.querySelector(".child2");
const MenuLinkChild3 = document.querySelector(".child3");
const MenuLinkChild4 = document.querySelector(".child4");
const MenuLinkChild5 = document.querySelector(".child5");

// Define coordinate thresholds for different screen sizes
const thresholdsLargeScreen = [367, 2882, 4012, 5182]; // For screens 1440px and larger
const thresholdsSmallScreen = [400, 3145, 4534, 6410]; // For screens less than 1000px

// Function to get the correct thresholds based on device width
const getThresholds = () => {
    const width = window.innerWidth;
    if (width < 1228) { // Small screens (less than 1000px)
        return thresholdsSmallScreen;
    } else { // Larger screens (1000px and above)
        return thresholdsLargeScreen;
    }
};

// Function to highlight current menu item based on scroll position
const HighlightCurrentPage = () => {
    const scrollY = window.scrollY; // Get current scroll position
    const [threshold1, threshold2, threshold3, threshold4] = getThresholds();

    // Remove the 'current' class from all links first
    MenuLinkChild1.classList.remove("current");
    MenuLinkChild2.classList.remove("current");
    MenuLinkChild3.classList.remove("current");
    MenuLinkChild4.classList.remove("current");
    MenuLinkChild5.classList.remove("current");

    // Add the 'current' class based on scroll position thresholds
    if (scrollY < threshold1) {
        MenuLinkChild1.classList.add("current");
    } else if (scrollY < threshold2) {
        MenuLinkChild2.classList.add("current");
    } else if (scrollY < threshold3) {
        MenuLinkChild3.classList.add("current");
    } else if (scrollY < threshold4) {
        MenuLinkChild4.classList.add("current");
    } else {
        MenuLinkChild5.classList.add("current");
    }
}

// Attach the scroll event listener to update the current menu link as the page scrolls
window.addEventListener('scroll', HighlightCurrentPage);

// Attach resize event listener to adjust thresholds on viewport size change
window.addEventListener('resize', HighlightCurrentPage);

// Call the function initially to set the active link on page load
HighlightCurrentPage();
