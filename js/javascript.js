const menus = document.querySelector(".menus");
const menu = document.querySelector(".menu");
const favs = document.querySelector(".favs");
const movies = document.querySelector(".movie-container");
const movieButton = document.querySelectorAll(".list-button");
const favorites = document.querySelector(".favorites");
const mFavorites = document.querySelector(".m-favorites");
const slideButton = document.querySelectorAll(".slider-button");
const sliderContainer = document.querySelectorAll(".slider-container-images");
const navLogin = document.querySelector(".nav-login");
const mLogin = document.querySelector(".m-login");
const loginSection = document.querySelector(".login-section");
const loginFormClose = document.querySelector(".login-form-close");
const listNavMenu = document.querySelector(".list-nav-menu");
const mobileNav = document.querySelector(".mobile-nav");
const mobileMenu = document.querySelector(".m-menu");
const mobileFavs = document.querySelector(".m-favs");
let favsButton = document.querySelectorAll(".favs-button");
let isDragStart = false;
let prevPageX;
let sliderImages;
let prevScrollLeft;
let query;

////////////////////////////////////////////////////////////////////////
//                          Slider Section                            //
////////////////////////////////////////////////////////////////////////

slideButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    function slideSelector(query) {
      sliderImages = e.target.closest(query);
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = sliderImages.clientWidth * direction;
      sliderImages.scrollBy({ left: scrollAmount, behavior: "smooth" });

      sliderImages = e.target.closest(query);
    }

    if (e.target.closest(".action")) {
      query = ".action";
      slideSelector(query);
    }

    if (e.target.closest(".adventure")) {
      query = ".adventure";
      slideSelector(query);
    }
    if (e.target.closest(".documentary")) {
      query = ".documentary";
      slideSelector(query);
    }
    if (e.target.closest(".horror")) {
      query = ".horror";
      slideSelector(query);
    }

    if (e.target.closest(".war")) {
      query = ".war";
      slideSelector(query);
    }
  });
});

sliderContainer.forEach((slider) => {
  slider.addEventListener("mousedown", (e) => {
    function slideSelector(query) {
      sliderImages = e.target.closest(query);
      e.preventDefault();
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = sliderImages.scrollLeft;

      sliderImages.addEventListener("mousemove", (e) => {
        e.preventDefault();
        if (isDragStart) {
          let positionX = e.pageX - prevPageX;
          sliderImages.scrollLeft = prevScrollLeft - positionX;
        }
      });
    }

    if (e.target.closest(".action")) {
      query = ".action";
      slideSelector(query);
    }
    if (e.target.closest(".adventure")) {
      query = ".adventure";
      slideSelector(query);
    }
    if (e.target.closest(".documentary")) {
      query = ".documentary";
      slideSelector(query);
    }
    if (e.target.closest(".horror")) {
      query = ".horror";
      slideSelector(query);
    }

    if (e.target.closest(".war")) {
      query = ".war";
      slideSelector(query);
    }
  });
});
window.addEventListener("mouseup", () => {
  isDragStart = false;
});

menus.addEventListener("click", function () {
  menu.classList.toggle("d-g");
});

favs.addEventListener("click", (e) => {
  if (e.target.classList.contains("favs")) favorites.classList.toggle("de");
});

////////////////////////////////////////////////////////////////////////
//                       Favorites Section                            //
////////////////////////////////////////////////////////////////////////
let favNames = [];
movieButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    let movieName =
      e.target.parentElement.firstElementChild.firstElementChild.textContent;
    let movieThumb =
      e.target.parentElement.parentElement.firstElementChild.getAttribute(
        "src"
      );

    if (!favNames.includes(movieName)) {
      let newFavs = document.createElement("div");
      newFavs.className = "listed-favs";

      let newFavsImg = document.createElement("img");
      newFavsImg.className = "fav-img";
      newFavsImg.src = `${movieThumb}`;

      let newP = document.createElement("p");
      newP.className = "favs-name";
      newP.textContent = `${movieName}`;

      let newButton = document.createElement("button");
      newButton.className = "material-symbols-outlined favs-button";
      newButton.textContent = "close";

      newFavs.appendChild(newFavsImg);
      newFavs.appendChild(newP);
      newFavs.appendChild(newButton);
      favorites.appendChild(newFavs);
      favNames.push(movieName);
      favsButton = document.querySelectorAll(".favs-button");

      favsButton.forEach((buttons) => {
        buttons.addEventListener("click", (e) => {
          let favToRemove = e.target.parentElement.children[1].textContent;
          favNames = favNames.filter(function (fn) {
            return fn !== favToRemove;
          });
          let RemoveFav = e.target.parentElement;
          RemoveFav.remove();
          if (favNames.length < 1) {
            favorites.style.justifyContent = "center";
            let newFP = document.createElement("p");
            newFP.className = "fav-p";
            newFP.textContent = "No added to favorites";
            favorites.appendChild(newFP);
          }
        });

        if (favorites.scrollHeight > favorites.clientHeight) {
          favorites.style.overflowY = "auto";
        } else {
          favorites.style.overflowY = "hidden";
        }
      
        if (favNames.length >= 1) {
          favorites.style.justifyContent = "flex-start";
          if (favorites.querySelector(".fav-p")) {
     
          }
        }
      });
    }
  });
});

//// Login Section Open And Close ////

// Login Section Open With Nav
function loginHandler(query) {
  query.addEventListener("click", () => {
    loginSection.classList.toggle("d-f");
    loginSection.classList.toggle("d-n");
  });
}

loginHandler(navLogin);
loginHandler(mLogin);
loginHandler(loginFormClose);

// Login Section Close
loginSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("login-section")) {
    loginSection.classList.toggle("d-n");
    loginSection.classList.toggle("d-f");
  }
});

mobileMenu.addEventListener("click", () => {
  menu.classList.toggle("d-g");
});

mobileFavs.addEventListener("click", (e) => {
  favorites.classList.toggle("de");
});

mLogin.addEventListener;
listNavMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("d-f");
  mobileNav.classList.toggle("d-n");
  if (favorites.classList.contains("de")) {
    favorites.classList.toggle("de");
  }
});




