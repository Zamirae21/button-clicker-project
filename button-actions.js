// Get references to the buttons
const fooButton = document.getElementById('foo');
const barButton = document.getElementById('bar');
const foobarButton = document.getElementById('foobar');

// Add click event listeners to each button
fooButton.addEventListener('click', () => {
  // Create an h3 element
  const h3 = document.createElement('h3');
  // Set the text content of the h3 element
  h3.textContent = 'Foo';
  // Append the h3 element to the main tag
  document.querySelector('main').appendChild(h3);
});

barButton.addEventListener('click', () => {
  // Create an h3 element
  const h3 = document.createElement('h3');
  // Set the text content of the h3 element
  h3.textContent = 'Bar';
  // Append the h3 element to the main tag
  document.querySelector('main').appendChild(h3);
});

foobarButton.addEventListener('click', () => {
  // Create an h2 element
  const h2 = document.createElement('h2');
  // Set the text content of the h2 element
  h2.textContent = 'FooBar';
  // Append the h2 element to the main tag
  document.querySelector('main').appendChild(h2);
});
