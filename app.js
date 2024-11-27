// Filtrer les produits selon la catégorie et la recherche
document.getElementById('filterBtn').addEventListener('click', function () {
  const category = document
    .getElementById('categoryFilter')
    .value.toLowerCase();
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(function (product) {
    const productCategory = product.getAttribute('data-category').toLowerCase();
    const productTitle = product.querySelector('h5').textContent.toLowerCase();

    if (
      (category === '' || productCategory.includes(category)) &&
      (searchText === '' || productTitle.includes(searchText))
    ) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
function filterProducts() {
  var selectedCategory = document.getElementById('categorySelect').value;
  var productItems = document.getElementsByClassName('product-item');

  for (var i = 0; i < productItems.length; i++) {
    var productCategory = productItems[i].getAttribute('data-category');

    if (selectedCategory === 'all' || selectedCategory === productCategory) {
      productItems[i].style.display = 'block';
    } else {
      productItems[i].style.display = 'none';
    }
  }
}
