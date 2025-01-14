const productContainer=document.querySelector('#product-container')
async function fetchSingleProduct() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  displayProduct(product)
}
function displayProduct(product){
productContainer.innerHTML=`
<div class="card" style="box-shadow: 10px 10px 15px gray;">
        <img
          src=${product.images}
          class="card-img-top"
          width="700px"
          height="350px"
          alt="${product.title}"
        />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <div class="buy"><p class="card-price">$${product.price}</p>
          <a class="addcart" href="addcart.html">Add To Card</a></div>
        </div>
      </div>
`
}
fetchSingleProduct()
fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then(console.log);
