"use strict";

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

// Share button in objects and news articles functionality

const shareOptionsClicker = () => {
  const shareOptions = document.querySelector(".share-options");
  const shareButton = document.querySelector(".share-button");

  if (!shareButton) return;

  shareButton.addEventListener("click", (e) => {
    e.preventDefault();

    const isHidden =
      shareOptions.style.opacity === "0" || shareOptions.style.opacity === "";
    shareOptions.style.opacity = isHidden ? "1" : "0";
    shareOptions.style.visibility = isHidden
      ? "visible"
      : setTimeout(() => {
        shareOptions.style.visibility = "hidden";
      }, 300);
  });
};

shareOptionsClicker();

// Function to show the dialog
const popupActivate = () => {
  const dialog = document.querySelector("dialog.popup-subscribe");
  const closeButton = dialog.querySelector(".popup-close-btn");

  let data = sessionStorage.getItem("sessionPopup");

  if (!data) {
    setTimeout(() => {
      dialog.showModal();
    }, 2000);
  }

  function dialogClose() {
    dialog.close();
    sessionStorage.setItem("sessionPopup", true);
  };

  dialog.addEventListener("submit", dialogClose);
  closeButton.addEventListener("click", dialogClose);

};

popupActivate();

// Language selector dropdown functionality

const languageSelectorDropdown = () => {
  document.addEventListener("click", (e) => {
    const languageSelector = e.target.closest(".language-dropdown");
    if (!languageSelector) return;

    // Open the dropdown
    const dropdownContent = languageSelector.querySelector(".dropdown-content");
    dropdownContent.style.display =
      getComputedStyle(dropdownContent).display === "block" ? "none" : "block";

    // Selecting a language

    const selectedLanguage = e.target.closest(".dropdown-content li");
    if (!selectedLanguage) return;

    languageSelector.querySelector(".language-selector").innerHTML =
      selectedLanguage.innerText +
      `<img
                    src="img/icons/menuTriangle.svg"
                    alt="dropdown arrow"
                    width="14"
                    heigbt="8"
                  />`;
  });

  // var languageSelector = document.querySelector(".language-dropdown");
  // if (!languageSelector) return;
  // var dropdownContent = languageSelector.querySelector(".dropdown-content");
  // var languageDisplay = languageSelector.querySelector(".language-selector");

  // dropdownContent.addEventListener("click", function (event) {
  //   if (event.target.tagName === "A") {
  //     languageDisplay.innerText = event.target.innerText;
  //     dropdownContent.style.display = "none"; // Close the dropdown
  //   }
  // });

  // languageSelector.addEventListener("click", function (event) {
  //   if (event.target.classList.contains("language-selector")) {
  //     dropdownContent.style.display =
  //       dropdownContent.style.display === "block" ? "none" : "block";
  //   } else {
  //     dropdownContent.style.display = "none";
  //   }
  // });
};

languageSelectorDropdown();

// Advanced filter functionality
// Fix advanced filter

// const toggleAdvancedSearch = () => {
//   const advancedMenu = document.querySelector(".select-menu-advanced");
//   if (!advancedMenu) return;

//   const isMenuActive = advancedMenu.classList.contains("active");

//   const advancedSearch = document.querySelector(
//     ".select-menu-pricing.advanced-search"
//   );
//   if (!advancedSearch) return;

//   const advancedSearchPricing = document.querySelector(
//     ".select-menu-pricing.advanced-search"
//   );

//   if (!isMenuActive) {
//     // If advanced menu is not active, add the 'active' class
//     advancedMenu.classList.add("active");

//     // Save default values
//     saveDefaultValues(advancedSearch);

//     advancedSearch.style.display = "block";
//     advancedSearchPricing.style.display = "flex";

//     // Triggering reflow to apply the initial styles before adding the 'fade-in' class
//     void advancedSearch.offsetWidth;
//     void advancedSearchPricing.offsetWidth;

//     advancedSearch.classList.add("fade-in");
//     advancedSearchPricing.classList.add("fade-in");
//   } else {
//     // If advanced menu is active, remove the 'active' class
//     advancedMenu.classList.remove("active");

//     // Replace with default values
//     replaceWithDefaultValues(advancedSearch);

//     advancedSearch.classList.remove("fade-in");
//     advancedSearchPricing.classList.remove("fade-in");
//     advancedSearch.classList.add("fade-out");
//     advancedSearchPricing.classList.add("fade-out");

//     setTimeout(() => {
//       advancedSearch.style.display = "none";
//       advancedSearchPricing.style.display = "none";
//       advancedSearch.classList.remove("fade-out");
//       advancedSearchPricing.classList.remove("fade-out");

//       // Remove selected options in elements with the 'advanced-search' class
//       const advancedSearchElements = document.querySelectorAll(
//         '.advanced-search .options input[type="radio"]'
//       );
//       advancedSearchElements.forEach((radio) => {
//         radio.checked = false;
//       });
//     }, 200);
//   }
// };

// const initializeAdvancedSearch = () => {
//   const selectBtn = document.querySelector(".select-menu-advanced .select-btn");
//   if (!selectBtn) return;

//   selectBtn.addEventListener("click", toggleAdvancedSearch);
// };

// initializeAdvancedSearch();

// const saveDefaultValues = (advancedSearch) => {
//   if (!advancedSearch) return;

//   const priceFromBtnText = advancedSearch.querySelector(
//     ".select-btn.price-from .sBtn-text"
//   );
//   const priceToBtnText = advancedSearch.querySelector(
//     ".select-btn.price-to .sBtn-text"
//   );
//   const homeBtnText = advancedSearch.querySelector(
//     ".select-btn.advanced-search .sBtn-text"
//   );

//   if (priceFromBtnText) {
//     priceFromBtnText.dataset.defaultValue = priceFromBtnText.innerText;
//   }

//   if (priceToBtnText) {
//     priceToBtnText.dataset.defaultValue = priceToBtnText.innerText;
//   }

//   if (homeBtnText) {
//     homeBtnText.dataset.defaultValue = homeBtnText.innerText;
//   }
// };

// const replaceWithDefaultValues = (advancedSearch) => {
//   if (!advancedSearch) return;

//   const priceFromBtnText = advancedSearch.querySelector(
//     ".select-btn.price-from .sBtn-text"
//   );
//   const priceToBtnText = advancedSearch.querySelector(
//     ".select-btn.price-to .sBtn-text"
//   );
//   const homeBtnText = advancedSearch.querySelector(
//     ".select-btn.advanced-search .sBtn-text"
//   );

//   if (priceFromBtnText && priceFromBtnText.dataset.defaultValue) {
//     priceFromBtnText.innerText = priceFromBtnText.dataset.defaultValue;
//   }

//   if (priceToBtnText && priceToBtnText.dataset.defaultValue) {
//     priceToBtnText.innerText = priceToBtnText.dataset.defaultValue;
//   }

//   if (homeBtnText && homeBtnText.dataset.defaultValue) {
//     homeBtnText.innerText = homeBtnText.dataset.defaultValue;
//   }
// };





// Advanced filter functionality

const toggleAdvancedSearch = () => {
  document.addEventListener("click", (e) => {
    const advancedMenu = e.target.closest(".select-menu-advanced");

    if (!advancedMenu) return;

    advancedMenu.classList.toggle("active");

    const menusContainer = document.querySelector(".advanced-search-container");

    getComputedStyle(menusContainer).overflow === "hidden"
      ? setTimeout(() => {
        menusContainer.style.overflow = "visible";
      }, 300)
      : closeAdvancedSearch(menusContainer);
  });
};

const closeAdvancedSearch = (menusContainer) => {
  menusContainer.style.overflow = "hidden";

  // Get the default texts and options back
  const advancedSearchFields = document.querySelectorAll(
    ".advanced-search .sBtn-text"
  );
  advancedSearchFields.forEach((field) => {
    field.innerText = field.dataset.defaultValue;
  });

  // Remove selected options
  const advancedSearchOptions = document.querySelectorAll(
    '.advanced-search .options input[type="radio"]'
  );
  advancedSearchOptions.forEach((option) => {
    option.checked = false;
  });
};

toggleAdvancedSearch();

// Options dropdown menus functionality

const dropdownMenus = () => {
  document.addEventListener("click", (e) => {
    const selectMenu = e.target.closest(".select-menu");
    const selectOption = e.target.closest(".option");

    if (!selectMenu) return;

    // Close all other menus and lower them to be overlapped by the active menu

    const otherMenus = document.querySelectorAll(".select-menu");
    otherMenus.forEach((otherMenu) => {
      if (otherMenu === selectMenu) return;
      otherMenu.classList.remove("active");
      otherMenu.style.zIndex = "10";
    });

    // Open/close the menu depending on its state and raise it to overlap other menus

    selectMenu.classList.toggle("active");
    selectMenu.style.zIndex = "12";

    // Select the option and close the menu

    if (!selectOption) return;
    const otherOptions = selectMenu.querySelectorAll(".option");

    otherOptions.forEach((otherOption) => {
      const radioButton = otherOption.querySelector('input[type="radio"]');
      if (otherOption === selectOption) return;
      radioButton.checked = false;
    });

    const selectBtn = selectMenu.querySelector(".select-btn");
    const sBtnText = selectBtn.querySelector(".sBtn-text");
    const radioButton = selectOption.querySelector('input[type="radio"]');

    if (!radioButton && !sBtnText) return;

    radioButton.checked = true;
    sBtnText.innerText = selectOption.querySelector(".option-text").innerText;
  });
  /*
  const selectMenus = document.querySelectorAll(".select-menu");
  if (!selectMenus) return;
 
  document.addEventListener("click", (e) => {
    selectMenus.forEach((menu) => {
      const selectButton = menu.querySelector(".select-btn");
      const optionsContainer = menu.querySelector(".options");
 
      if (e.target !== selectButton && !optionsContainer.contains(e.target)) {
        menu.classList.remove("active");
        selectButton.style.zIndex = "10";
        optionsContainer.style.zIndex = "9";
      }
    });
  });
 
  selectMenus.forEach((menu) => {
    const selectButton = menu.querySelector(".select-btn");
    const optionsContainer = menu.querySelector(".options");
    const optionsItems = menu.querySelectorAll(".option");
    const sBtn_text = menu.querySelector(".sBtn-text");
 
    selectButton.addEventListener("click", () => {
      selectMenus.forEach((otherMenu) => {
        if (otherMenu === menu) return;
        otherMenu.classList.remove("active");
        otherMenu.querySelector(".select-btn").style.zIndex = "10";
        otherMenu.querySelector(".options").style.zIndex = "9";
      });
      menu.classList.toggle("active");
      selectButton.style.zIndex = "12";
      optionsContainer.style.zIndex = "11";
    });
 
    optionsItems.forEach((option) => {
      option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
 
        let radioButton = option.querySelector('input[type="radio"]');
        if (radioButton) {
          radioButton.checked = true;
        }
 
        menu.classList.remove("active");
      });
    });
  });*/
};

dropdownMenus();



// File attachemnt indicator functionality

const fileAttachment = () => {
  const fileInput = document.getElementById("attachment");
  const fileNameDisplay = document.getElementById("file-name-display");

  if (!fileInput) return;

  fileInput.addEventListener("change", function () {
    const fileName = fileInput.files[0]?.name || "Nepasirinktas failas";
    fileNameDisplay.textContent = fileName;
  });

  fileNameDisplay.addEventListener("click", function () {
    fileInput.click();
  });
};

fileAttachment();

// Carousel slider functionality

const carouselSlider = () => {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;
  const prevBtn = carousel.querySelector(".arrow-left");
  const nextBtn = carousel.querySelector(".arrow-right");
  const images = carousel.querySelectorAll(".landing-bg-image");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  showImage(currentIndex);
};

carouselSlider();

// Testimonial slider functionality

const testimonialSlider = () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const testimonialNumber = document.querySelector(".testimonial-number");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;
  let isAnimating = false;

  if (!nextButton) return;

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (isAnimating) return;
    isAnimating = true;

    fadeOut(testimonials[currentIndex], () => {
      testimonials[currentIndex].classList.remove("active");

      currentIndex = (currentIndex + 1) % testimonials.length;

      testimonialNumber.textContent = (currentIndex + 1)
        .toString()
        .padStart(2, "0")
        .padEnd(3, "/");

      testimonials[currentIndex].classList.add("active");

      fadeIn(testimonials[currentIndex], () => {
        isAnimating = false;
      });
    });
  });
};

const fadeOut = (element, callback) => {
  let opacity = 1;

  const animate = () => {
    opacity -= 0.025;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      element.style.visibility = "hidden";
      callback();
    } else {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

const fadeIn = (element, callback) => {
  element.style.visibility = "visible";
  element.style.opacity = 0;

  let opacity = 0;

  const animate = () => {
    opacity += 0.025;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      callback();
    } else {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

testimonialSlider();

// Other news slider functionality

const otherNewsSlider = () => {
  const otherNews = document.querySelectorAll(".other-news-card-container");
  const otherNewNumber = document.querySelector(".carousel-number");
  const ctrs = document.querySelector(".carousel-navigation-content p");

  if (!ctrs) return;
  ctrs.textContent = (otherNews.length / 2).toString().padStart(2, "0");
  let currentIndex = 0;
  let currentIndexPlus = 0;
  let isAnimating = false;

  if (!otherNews) return;

  const fadeOut = (element1, element2, callback) => {
    let opacity1 = 1;
    let opacity2 = 1;

    const animate = () => {
      opacity1 -= 0.05;
      opacity2 -= 0.05;

      element1.style.opacity = opacity1;
      element2.style.opacity = opacity2;

      if (opacity1 <= 0 && opacity2 <= 0) {
        element1.style.visibility = "hidden";
        element2.style.visibility = "hidden";
        callback();
      } else {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const fadeIn = (element1, element2, callback) => {
    element1.style.visibility = "visible";
    element2.style.visibility = "visible";
    element1.style.opacity = 0;
    element2.style.opacity = 0;

    let opacity1 = 0;
    let opacity2 = 0;

    const animate = () => {
      opacity1 += 0.05;
      opacity2 += 0.05;

      element1.style.opacity = opacity1;
      element2.style.opacity = opacity2;

      if (opacity1 >= 1 && opacity2 >= 1) {
        callback();
      } else {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  document
    .querySelector(".circle-button-right")
    .addEventListener("click", (e) => {
      e.preventDefault();

      if (isAnimating) return;
      isAnimating = true;

      fadeOut(
        otherNews[currentIndexPlus],
        otherNews[currentIndexPlus + 1],
        () => {
          otherNews[currentIndexPlus].classList.remove("active");
          otherNews[currentIndexPlus + 1].classList.remove("active");

          currentIndex = (currentIndex + 1) % (otherNews.length / 2);
          currentIndexPlus = (currentIndexPlus + 2) % otherNews.length;

          otherNewNumber.textContent = (currentIndex + 1)
            .toString()
            .padStart(2, "0")
            .padEnd(3, "/");

          otherNews[currentIndexPlus].classList.add("active");
          otherNews[currentIndexPlus + 1].classList.add("active");

          fadeIn(
            otherNews[currentIndexPlus],
            otherNews[currentIndexPlus + 1],
            () => {
              isAnimating = false;
            }
          );
        }
      );
    });

  document
    .querySelector(".circle-button-left")
    .addEventListener("click", (e) => {
      e.preventDefault();

      if (isAnimating) return;
      isAnimating = true;

      fadeOut(
        otherNews[currentIndexPlus],
        otherNews[currentIndexPlus + 1],
        () => {
          otherNews[currentIndexPlus].classList.remove("active");
          otherNews[currentIndexPlus + 1].classList.remove("active");

          currentIndex =
            (currentIndex - 1 + otherNews.length / 2) % (otherNews.length / 2);
          currentIndexPlus =
            (currentIndexPlus - 2 + otherNews.length) % otherNews.length;

          otherNewNumber.textContent = (currentIndex + 1)
            .toString()
            .padStart(2, "0")
            .padEnd(3, "/");

          otherNews[currentIndexPlus].classList.add("active");
          otherNews[currentIndexPlus + 1].classList.add("active");

          fadeIn(
            otherNews[currentIndexPlus],
            otherNews[currentIndexPlus + 1],
            () => {
              isAnimating = false;
            }
          );
        }
      );
    });
};

otherNewsSlider();

// Copy link popup functionality

const socialButtonLink = () => {
  document.addEventListener("click", (e) => {
    const socialButton = e.target.closest(".social-button");
    const popup = document.getElementById("popup");

    if (!socialButton) return;

    e.preventDefault();

    navigator.clipboard.writeText(
      `https://www.ntamberti.lt/${socialButton.getAttribute("href")}`
    );

    popup.classList.add("visible");
    setTimeout(() => {
      popup.classList.remove("visible");
    }, 3000);
  });
};

// const socialButtonLink = () => {
//   const socialButtons = document.querySelectorAll(".social-button");
//   const popup = document.getElementById("popup");
//   let popupVisible = false;

//   if (!socialButtons) return;

//   socialButtons.forEach((socialButton) => {
//     socialButton.addEventListener("click", function (event) {
//       event.preventDefault();

//       const newsArticle = socialButton.closest(".news-article");
//       const cardLink = newsArticle.querySelector(".card-link");
//       const hrefValue = cardLink.getAttribute("href");

//       navigator.clipboard.writeText("https://www.amberti.lt/" + hrefValue);

//       if (!popupVisible) {
//         popup.classList.add("visible");
//         popupVisible = true;

//         setTimeout(function () {
//           popup.classList.remove("visible");
//           popupVisible = false;
//         }, 3000);
//       }
//     });
//   });
// };

socialButtonLink();

// Hidden content elements functionality

const hiddenContents = () => {
  document.addEventListener("mouseover", (e) => {
    const serviceButton = e.target.closest(".service-card");
    if (!serviceButton) return;

    e.preventDefault();

    // Hide all arrows and make the clicked button active

    [...serviceButton.parentElement.children].forEach((child) => {
      child.classList.remove("active");
    });
    serviceButton.classList.add("active");

    // Find the index of the clicked button
    const indexOfButton =
      [...serviceButton.parentElement.children].indexOf(serviceButton) - 1;

    // Index of the clicked button corresponds to the index of the hidden content
    const serviceContent = document.querySelectorAll(".service-content");
    serviceContent.forEach((content) => {
      content.style.display = "none";
    });
    serviceContent[indexOfButton].style.display = "flex";
  });
};

// const hiddenContents = () => {
//   const serviceCards = document.querySelectorAll(".service-card");
//   const serviceContents = document.querySelectorAll(".service-content");

//   if (!serviceCards) return;

//   for (const card of serviceCards) {
//     card.addEventListener("click", function (event) {
//       event.preventDefault();

//       // Hide all service contents
//       for (const content of serviceContents) {
//         content.style.display = "none";
//       }

//       // Show the selected service content
//       const index = Array.from(serviceCards).indexOf(card);
//       const selectedContent = document.querySelector(
//         `.service-content[data-service-index="${index + 1}"]`
//       );
//       if (selectedContent) {
//         selectedContent.style.display = "flex";
//       }

//       // Remove active class and reset link-arrow styles
//       for (const otherCard of serviceCards) {
//         if (otherCard !== card) {
//           otherCard.classList.remove("active");
//           const otherLinkArrow = otherCard.querySelector(".link-arrow");
//           if (otherLinkArrow) {
//             otherLinkArrow.style.opacity = 0;
//             otherLinkArrow.style.transform = "translateX(-10px)";
//           }
//         }
//       }

//       card.classList.add("active");
//       const linkArrow = card.querySelector(".link-arrow");
//       if (linkArrow) {
//         linkArrow.style.opacity = 1;
//         linkArrow.style.transform = "translateX(0px)";
//       }
//     });

//     // Add hover styles on mouseover
//     card.addEventListener("mouseover", function () {
//       if (!card.classList.contains("active")) {
//         const linkArrow = card.querySelector(".link-arrow");
//         if (linkArrow) {
//           linkArrow.style.opacity = 1;
//           linkArrow.style.transform = "translateX(0px)";
//         }
//       }
//     });

//     // Remove hover styles on mouseout
//     card.addEventListener("mouseout", function () {
//       if (!card.classList.contains("active")) {
//         const linkArrow = card.querySelector(".link-arrow");
//         if (linkArrow) {
//           linkArrow.style.opacity = 0;
//           linkArrow.style.transform = "translateX(-10px)";
//         }
//       }
//     });
//   }
// };

hiddenContents();

// Favorite button functionality

const objectSaving = () => {
  const favoriteButtons = document.querySelectorAll(".favorite-button");
  if (!favoriteButtons) return;

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the article id
      const articleId = button.dataset.articleId;

      // Save to local storage
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const index = favorites.indexOf(articleId);
      if (index === -1) {
        favorites.push(articleId);
      } else {
        favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));

      // Save to cookies so that PHP can access the ids on server side and only render the articles that are in the favorites list
      document.cookie = `favorites=${favorites.join(",")};path=/`;

      // Change the button color
      button.classList.toggle("isFavorite");
    });
  });
};

objectSaving();

// Sell type change functionality

const sellTypeChange = () => {
  document.addEventListener("click", (e) => {
    const sellType = e.target.closest(".sell-type");
    if (!sellType) return;

    const sellTypeButtons = document.querySelectorAll(".sell-type");
    sellTypeButtons.forEach((button) => {
      button.classList.remove("estate-active");
    });
    sellType.classList.add("estate-active");
  });
};

sellTypeChange();

const statisticItemIntersection = () => {
  const statisticsContainer = document.querySelector(".statistics-container");

  if (!statisticsContainer) return;

  // Options for the IntersectionObserver
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  // when the screen reaches the end of the statistics container, start the animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statisticItems = document.querySelectorAll(".statistic-item");
        statisticItems.forEach((item) => {
          item.classList.add("active");
        });
      }
    });
  }, options);

  observer.observe(statisticsContainer);
};

statisticItemIntersection();
