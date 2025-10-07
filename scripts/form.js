const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

//selecct the <select> element
const productSelect = document.getElementById('products');

//loop through the products array and create an <option> element for each product
products.forEach(product => {
  const option = document.createElement('option');
    option.value = product.name; // value attribute = product name
    option.textContent = product.name; // visible text = product name
    productSelect.appendChild(option); //append the option to the select element
}); 

let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('reviewCount').textContent = reviewCount;
});
