const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalImage = document.getElementById('modalImage');

const postDetails = [
  {
    title: "Sunrise Over the #########",
    text: "Here’s a few more photos and thoughts from that peaceful sunrise by the sea. The air was salty, the breeze perfect, and I felt totally present.",
    image: "Assets/Pictures/mynameis.png"
  },
  {
    title: "Learning to Bake Sourdough",
    text: "The loaf had this magical golden crust and chewy center. I didn’t expect to love baking this much, but I might be hooked now.",
    image: "Assets/Pictures/breadfrom.png"
  },
  {
    title: "A Rainy Day Book Haul",
    text: "Each book I picked up tells a different story. There’s something cozy about discovering forgotten pages while the rain taps on the windows.",
    image: "Assets/Pictures/librarie.png"
  },
  {
    title: "Last Night in the Backyard",
    text: "At around 2:47 a.m., I heard footsteps on the gravel. Through the window, I saw a man standing completely still under the lemon tree. He wasn’t moving—just staring toward the house.\n\nI turned on the porch light. In a blink, he was gone. I checked the security cameras—nothing. No trace. No shadow.\n\nMaybe it was just my imagination... but it felt real. Too real.\n\nJust in case, I live in ######.",
    image: "Assets/Pictures/stalker.png"
  },
  {
    title: "The Note on the Bike",
    text: "This morning I found a tiny folded note tucked into the basket of my bicycle. It simply read: “Keep pedaling.” I looked around—no one in sight.\n\nI don't know who left it or why, but it made my ride feel lighter. Some gestures don’t need signatures.",
    image: "Assets/Pictures/bikeof.png"
  }
];

document.querySelectorAll('.read-more').forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modalTitle.textContent = postDetails[index].title;
    modalText.textContent = postDetails[index].text;
    modalImage.src = postDetails[index].image;
    modal.style.display = 'flex';
    document.body.classList.add('modal-active');
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-active');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-active');
  }
});

modalImage.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

modalImage.addEventListener('dragstart', (e) => {
  e.preventDefault();
});
