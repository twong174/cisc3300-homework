// Array of cats
const cats = [
  { name: 'Charlie', adoptionStatus: 'available' },
  { name: 'Lily', adoptionStatus: 'not-available' },
  { name: 'Coco', adoptionStatus: 'available' },
  { name: 'Oreo', adoptionStatus: 'not-available' },
  { name: 'Luna', adoptionStatus: 'available' },
  { name: 'Milo', adoptionStatus: 'available' },
  { name: 'Lola', adoptionStatus: 'not-available' },
  { name: 'Leo', adoptionStatus: 'available' },
  { name: 'Willow', adoptionStatus: 'available' },
  { name: 'Bella', adoptionStatus: 'not-available' },
  { name: 'Max', adoptionStatus: 'available' },
  { name: 'Cleo', adoptionStatus: 'available' },
  { name: 'Lucy', adoptionStatus: 'not-available' },
  { name: 'Daisy', adoptionStatus: 'available' },
];

// 1. Change all list items' color to blue when clicked
const colorList = document.getElementById('color-list');
colorList.addEventListener('click', () => {
  const listItems = colorList.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.color = 'blue';
  }
});

// 2. Populate the second unordered list with cats' names
const catsList = document.getElementById('cats-list');
cats.forEach(cat => {
  const li = document.createElement('li');
  li.textContent = cat.name;
  catsList.appendChild(li);
});

// 3. Handle form submission
const form = document.getElementById('cat-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevents the default form submission

  // Get the value of the input field
  const catNameInput = document.getElementById('cat-name').value.trim();

  // Remove any existing messages
  messageDiv.innerHTML = '';
  
  // Check if the input is empty
  if (catNameInput === '') {
      // Show error message
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Please Provide a Value';
      errorMessage.classList.add('error');
      messageDiv.appendChild(errorMessage);
  } else {
      // Show success message
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Success';
      successMessage.classList.add('success');
      messageDiv.appendChild(successMessage);

      console.log('Form submitted with value:', catNameInput);
  }
});
