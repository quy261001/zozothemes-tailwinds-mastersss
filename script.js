
window.addEventListener("DOMContentLoaded", () => {
// Global
// functiton Slider Global
function slider(wrapper, container, items, sliderNext, sliderPrev, amountSlider) {
    var widthItem = wrapper.offsetWidth / amountSlider;
    var widthAllItem = widthItem * items.length;
    container.style.width = `${widthAllItem}px`;
    items.forEach(item=> {
      item.style.width = `${widthItem}px`;
    });
    let i = 0;
    let widthSlide = widthAllItem - widthItem * amountSlider;
    // Next, Prev Btn
    sliderNext.addEventListener("click", () => {
      i += widthItem;
      if (i > widthSlide) {
        i = 0;
      }
      container.style.transform = `translateX(${-i}px)`;
    });
    sliderPrev.addEventListener("click", () => {
      i -= widthItem;
      if (i < 0) {
        i = widthSlide;
      }
      container.style.transform = `translateX(${-i}px)`;
    }); 
    // DOTS
  [...bannerDots].forEach((item) => {
    item.addEventListener("click", (e) => {
      [...bannerDots].forEach(element => {
        element.classList.remove("active");
      })
      e.target.classList.add("active"); 
      const slideIndex = parseInt(e.target.dataset.index);
  
      index = slideIndex;
      i = 1 * index * widthItem; 
      container.style.transform = `translateX(${-1 * index * widthItem}px)`;
    });
  });
  };

// function SliderAuto Global
function sliderAuto(wrapperAuto, containerAuto, itemsAuto, amountSlider, time) {
    var widthItem = wrapperAuto.offsetWidth / amountSlider;
    var widthAllItem = widthItem * itemsAuto.length;
    containerAuto.style.width = `${widthAllItem}px`;
    itemsAuto.forEach(item=> {
      item.style.width = `${widthItem}px`;
    });
    let i = 0;
    let widthSlide = widthAllItem - widthItem * amountSlider;
    // Auto
    setInterval(() => {
      i += (widthItem);
      if (i > widthSlide) {
        i = 0;
      }
      containerAuto.style.transform = `translateX(${-i}px)`;
    }, time);
  };

//  Draggable Global
function draggable(draggableWrapper, draggableContainer,) {
    let isPressedDown = false;
    let cursorXspace;
  
    draggableWrapper.addEventListener("mousedown", (e) => {
      draggableContainer.style.transition = "none";
      isPressedDown = true;
      cursorXspace = e.offsetX - draggableContainer.offsetLeft;
      draggableWrapper.style.cursor = "grab";
    });
    
    window.addEventListener("mouseup", () => {
      draggableContainer.style.transition = "all 0.5s linear";
      isPressedDown = false;
    });
    
    draggableWrapper.addEventListener("mousemove", (e) => {
      if (!isPressedDown) return;
      e.preventDefault();
      draggableContainer.style.left = `${e.offsetX - cursorXspace}px`;
      boundCards();
    });
    
    function boundCards() {
      const wrapper_rect = draggableWrapper.getBoundingClientRect();
      const container_rect = draggableContainer.getBoundingClientRect();
    
      if (parseInt(draggableContainer.style.left) > 0) {
        draggableContainer.style.left = 0;
      } else if (container_rect.right < wrapper_rect.right) {
        draggableContainer.style.left = `-${
          container_rect.width - wrapper_rect.width
        }px`;
      }
    }
  }   

//  handlde class
function toggleClass (eles = [], classes) {
    eles.forEach(ele => {
      ele.classList.toggle(classes);
    })
}
function removeClass (elements = [], classer) {
    elements.forEach(element => {
      element.classList.remove(classer);
    })
}
function colorClass (items = [], colors) {
    items.forEach(item => {
      item.style.color = (colors);
    })
}

// Scroll
// Header Scroll
(function() {
  const header = document.querySelector(".header");
  const headerImg = document.querySelector(".header-img");
  const headerLink = document.querySelectorAll(".title-header");
  const headerIcon = document.querySelectorAll(".iconHeader");
  const headerIconBars = document.querySelector(".header-icon-bars");
  const headerIconBarsMobile = document.querySelector(".header-bars-mobile");
  const formIconClose = document.querySelector(".header-form-icons");
  const headerTbImg = document.querySelector(".header-bars-table");
  const headerMbImg = document.querySelector(".header-bars-mobile");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 100) {
      headerLink.forEach((item) => (item.style.color = "#333"));
      headerIcon.forEach((item) => (item.style.color = "#333"));
      header.style.background = "#fff";
      header.style.boxShadow = "0 0 2px rgb(0 0 0 / 10)";
      headerIconBars.style.borderColor = "#e1e1e1";
      headerImg.setAttribute("src","http://zozothemes.com/html/epoint/demo/images/logo.png");
      colorClass([formIconClose, headerTbImg, headerMbImg], "#000")
    } else {
      headerLink.forEach((item) => (item.style.color = "#fff"));
      headerIcon.forEach((item) => (item.style.color = "#fff"));
      header.style.background = "transparent";
      headerIconBars.style.borderColor = "inherit";
      header.style.boxShadow = "none";
      headerImg.setAttribute( "src", "http://zozothemes.com/html/epoint/demo/images/logo-light.png");
      colorClass([formIconClose, headerTbImg, headerMbImg, headerIconBarsMobile], "#fff")
    }
  });

})();
// handle scroll services
(function() {
  const servicesItem = document.querySelectorAll(".services-item");
  window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 800) {
    servicesItem.forEach((item) => {
      item.classList.add("services-item-animation");
    });
  }
});
})(); 
 // theme show
(function(){
  const themeTitle = document.querySelector(".theme-title");
  const themeBtn = document.querySelector(".theme-btn");
  console.log();
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 2150) {
      themeTitle.classList.add('themeTitle')
      themeBtn.classList.add('themeButton')
    }
  });
})();
// handle scroll services
const servicesItem = document.querySelectorAll(".services-item");
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 850) {
      servicesItem.forEach((item) => {
        item.classList.add("services-item-animation");
      });
    }
});

// Click
// handle click Form 
(function() {
  const headerIconSearch = document.querySelector(".header-icon-search");
  const headerContainer = document.querySelector(".header-container");
  const headerForm = document.querySelector(".header-form");
  const headerFormClose = document.querySelector(".header-form-icons");
  const headerbarsMb = document.querySelector(".header-bars-mobile");
  const headerbarsTb = document.querySelector(".header-bars-table");
  headerIconSearch.addEventListener("click", () => {
    toggleClass([headerContainer,  headerbarsMb, headerbarsTb], "is-noneForm")
    headerForm.classList.toggle("is-showForm");
  })
  headerFormClose.addEventListener("click",() => {
    toggleClass([headerbarsMb,headerContainer, headerbarsTb ], "is-noneForm")
    headerForm.classList.toggle("is-showForm");
  })
  
  })();
// handle Click Dropdown Shopping
(function dropShopping () {
    const headerIconShopping = document.querySelector(".header-icon-shopping");
    const shoppingDropdown = document.querySelector(".shopping-dropdown");
    headerIconShopping.addEventListener("click", () => {
    shoppingDropdown.classList.toggle("is-show");
    });
    document.addEventListener("click", (e) => {
    if (!e.target.matches(".header-icon-shopping")) {
      shoppingDropdown.classList.remove("is-show");
    }});
    // handle Click Option
    const optionIcon = document.querySelector(".option-icon");
    const option = document.querySelector(".option");
    optionIcon.addEventListener("click", () => {
    toggleClass([option], "option-show");
        });
})();
// handle Click Menu 
(function menu() {
    // Handle Click Menu
    const menu = document.querySelector(".menu");
    const wrapper = document.querySelector(".wrapper");
    const menuClose = document.querySelector(".menu-close");
    const headerIconBars = document.querySelector(".header-icon-bars");
    const header = document.querySelector(".header")
    const body = document.body;
    headerIconBars.addEventListener("click", (e) => {
      toggleClass([header, wrapper], "menu-left");
      menu.classList.toggle("menu-show");
      body.style.overflow = "hidden"
    });
    menuClose.addEventListener("click", () => {
      toggleClass([header, wrapper], "menu-left")
      menu.classList.remove("menu-show");
      body.style.overflow = "scroll"
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !e.target.matches(".header-icon-bars")) {
        menu.classList.remove("menu-show");
        removeClass([header, wrapper], "menu-left")
        body.style.overflow = "scroll"
      }
    });
})();
// handle Click MenuTable
(function() {
  const menuTableIcon = document.querySelector(".header-bars-table");
  const menuTable = document.querySelector(".menu-tb");
  const wrapperTable = document.querySelector(".wrapper ");
  const headerTable = document.querySelector(".header ");
  const optionTable = document.querySelector(".option");
  const optionIconTable = document.querySelector(".option-icon");
  menuTableIcon.addEventListener("click", () => {
    toggleClass([wrapperTable, headerTable], "is-showLeftTB")
    menuTable.classList.toggle("is-showTb");
    optionTable.classList.toggle("is-showOptionTB");
  });
  optionIconTable.addEventListener("click", () => {
    toggleClass([wrapperTable, headerTable], "is-showLeftTB")
    menuTable.classList.toggle("is-showTb");
    optionTable.classList.toggle("is-showOptionTB");
    optionTable.classList.toggle("option-show");
  });
  })();
// handle click Mobile 
(function () {
  const menuMobileIcon = document.querySelector(".header-bars-mobile");
  const menuMobile = document.querySelector(".menu-mb");
  const wrapperMobile = document.querySelector(".wrapper ");
  const headerMobile = document.querySelector(".header ");
  menuMobileIcon.addEventListener("click", () => {
    menuMobile.classList.toggle("is-showMenuMb");
    toggleClass([headerMobile,wrapperMobile], "is-showMb");
  })
  document.addEventListener("click", (e) => {
    if (!menuMobile.contains(e.target) && !e.target.matches(".header-bars-mobile")) {
      menuMobile.classList.remove("is-showMenuMb");
      removeClass([headerMobile, wrapperMobile], "is-showMb");
    }
  });
})();



// SLIDER
// slide banner
  const bannerWrapper = document.querySelector(".banner-wrapper");
  const bannerContainer = document.querySelector(".banner-container");
  const bannerItem = document.querySelectorAll(".banner-item");
  const bannerNext = document.querySelector(".banner-next");
  const bannerPrev = document.querySelector(".banner-prev");
  const bannerDots = document.querySelectorAll(".banner-dot-item");
   banner_slide(1);
  function banner_slide(amountSlider) {
    slider(bannerWrapper, bannerContainer, bannerItem, bannerNext, bannerPrev, amountSlider);
    draggable(bannerWrapper, bannerContainer);
  };

  // handle Click & AutoSlider Projects 
  const projectsWrapper = document.querySelector(".projects-wrapper");
  const projectsContainer = document.querySelector(".projects-container");
  const projectsItem = document.querySelectorAll(".projects-item");
  const projectsNext = document.querySelector(".projects-next");
  const projectsPrev = document.querySelector(".projects-prev");
    if (window.innerWidth >= 1023) {
      make_slide(4);
    } else if (window.innerWidth >= 481) {
      make_slide(2);
    } else {
      make_slide(1);
    }
  function make_slide(amountSlider) {
    slider(projectsWrapper, projectsContainer, projectsItem, projectsNext, projectsPrev, amountSlider);
    sliderAuto(projectsWrapper, projectsContainer, projectsItem, amountSlider, 5000);
  }

// slide auto testimonials
(function () {
  const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
  const testimonialsContainer = document.querySelector(".testimonials-container");
  const testimonialsItem = document.querySelectorAll(".testimonials-item");
  const testimonialsLogoWrapper = document.querySelector(".testimontals-logo-wrapper");
  const testimonialsLogoContainer = document.querySelector(".testimontals-logo-container");
 
    if (window.innerWidth >= 1023) {
      testimonials_slide(3);
    } else if (window.innerWidth >= 481) {
      testimonials_slide(2);
    } else {
      testimonials_slide(1);
    }
  function testimonials_slide(amountSlider) {
    sliderAuto(testimonialsWrapper, testimonialsContainer, testimonialsItem, amountSlider, 2000);
  }
//  Draggble 
  draggable(testimonialsLogoWrapper,testimonialsLogoContainer);
})();
// handle AutoShow and draggre
const newsWrapper = document.querySelector(".news-wrapper");
const newsContainer = document.querySelector(".news-container");
const newsItem = document.querySelectorAll(".news-item");

  if (window.innerWidth >= 1023) {
    news_slide(3);
  } else if (window.innerWidth >= 480) {
    news_slide(2);
  } else {
    news_slide(1);
  }
function news_slide(amountSlider) {
  sliderAuto(newsWrapper, newsContainer, newsItem, amountSlider, 5000);
}
// draggre
draggable(newsWrapper,newsContainer);

});

