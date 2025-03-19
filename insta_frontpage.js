let arr = [
    {
        storiess: "https://hips.hearstapps.com/hmg-prod/images/thor-1658259662.jpeg?crop=0.563xw:1.00xh;0.214xw,0&resize=640:*",
        show: "https://i.pinimg.com/736x/5b/f4/a9/5bf4a989ac96489a138b7f2dc223ebd0.jpg",
        title: "Thor",
        dp: "https://hips.hearstapps.com/hmg-prod/images/thor-1658259662.jpeg?crop=0.563xw:1.00xh;0.214xw,0&resize=640:*",
    },
    {
        storiess: "https://www.mundodeportivo.com/alfabeta/hero/2024/08/iron-man-thanos-vengadores-endgame-ucm.jpg?width=768&aspect_ratio=16:9&format=nowebp",
        show: "https://cdn.wallpapersafari.com/99/13/dcnF6X.jpg",
        title: "Iron Man",
        dp: "https://www.mundodeportivo.com/alfabeta/hero/2024/08/iron-man-thanos-vengadores-endgame-ucm.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    },

    {
        storiess: "https://media.newyorker.com/photos/5a87650156b75c08a3e5bbb6/16:9/w_1280,c_limit/Cobb-Black-Panther.jpg",
        show: "https://wallpaper.forfun.com/fetch/e3/e3c8add9ceb299a925d0b7c92c43a0f6.jpeg",
        title: "Black Panther",
        dp: "https://media.newyorker.com/photos/5a87650156b75c08a3e5bbb6/16:9/w_1280,c_limit/Cobb-Black-Panther.jpg",
    },
    {
        storiess: "https://img.asmedia.epimg.net/resizer/v2/DMBZR3D73VEBVOZT2DKZLMM7H4.jpg?auth=d49b6168916d14cdd73b7d5b11fdbc017d4736e4bc581c9ebc34602c7c3b04b2&width=360&height=203&smart=true",
        show: "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
        title: "Spider-Man",
        dp: "https://img.asmedia.epimg.net/resizer/v2/DMBZR3D73VEBVOZT2DKZLMM7H4.jpg?auth=d49b6168916d14cdd73b7d5b11fdbc017d4736e4bc581c9ebc34602c7c3b04b2&width=360&height=203&smart=true",

    },
    {
        storiess: "https://images3.alphacoders.com/932/thumb-1920-932825.jpg",
        show: "https://mfiles.alphacoders.com/946/946399.jpg",
        title: "Venome",
        dp: "https://images3.alphacoders.com/932/thumb-1920-932825.jpg"
    },
    {
        storiess: "https://i.pinimg.com/736x/4e/c8/68/4ec8688da311b581fbb150a6c56aa1eb.jpg",
        show: "https://i.pinimg.com/736x/0d/1a/a4/0d1aa4597e1360c5d67f165e73514d1c.jpg",
        title: "Hulk",
        dp: "https://i.pinimg.com/736x/4e/c8/68/4ec8688da311b581fbb150a6c56aa1eb.jpg",
    }

]

let pass = "";
let story_section = document.querySelector(".story_section")
// let stories = document.querySelector(".stories");
let story_container = document.querySelector(".story_container")
let story_title = document.querySelector(".story_title");
let dp_img = document.querySelector(".dp");


arr.forEach(function (obj, idx) {
    //    console.log(obj,idx)
    pass += `<div class="stories">
        <img id="${idx}" src="${obj.storiess}" alt="" >
    </div> `
})
story_section.innerHTML = pass;

story_section.addEventListener('click', function (dets) {
    let storyData = arr[dets.target.id];

    if (storyData) {
        story_container.style.display = "block";
        story_container.style.backgroundImage = `url(${storyData.show})`;
        story_title.textContent = storyData.title;
        dp_img.src = storyData.dp;
    }
    setTimeout(() => {
        story_container.style.display = "none";
    }, 2000)
})





// Get the dropdown icon and the dropdown menu
const dropdownIcon = document.getElementById('dropdownIcon');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add a click event listener to the dropdown icon
dropdownIcon.addEventListener('click', function () {
    // Toggle the 'show' class on the dropdown menu
    dropdownMenu.classList.toggle('show');
});




// Instagram-Like Heart Effect on photo

const heartPhoto = document.querySelector('#heart_photo');
const largeHeart = heartPhoto.querySelector('i');
const instaImage = document.querySelector('.insta_images');
const likeButton = document.querySelector('#likeBtn');
const heartIcon = likeButton.querySelector('i');

// Initialize state
let isLiked = false;
let lastTap = 0;

// Toggle Heart Button Click
likeButton.addEventListener("click", toggleLikeButton);

// Double Tap on Image to Show Heart Effect like Instagram
instaImage.addEventListener("dblclick", handleDoubleTap);

// Function to toggle like button
function toggleLikeButton() {
  isLiked = !isLiked;
  updateLikeButton();
}

// Function to update like button
function updateLikeButton() {
  if (isLiked) {
    heartIcon.classList.remove("ri-heart-line");
    heartIcon.classList.add('ri-heart-fill');
    heartIcon.style.color = "red";
  } else {
    heartIcon.classList.add("ri-heart-line");
    heartIcon.classList.remove("ri-heart-fill");
    heartIcon.style.color = "white";
  }
}

// Function to handle double tap on image
function handleDoubleTap() {
  largeHeart.style.transform = "translate(-50%, -50%) scale(1.3)";
  setTimeout(() => {
    largeHeart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
  isLiked = true;
  updateLikeButton();
}








