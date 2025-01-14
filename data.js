fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    if (!Array.isArray(data)) {
      if (data && Array.isArray(data.products)) {
        data = data.products;
      } else {
        console.log(data);
      }
    }
    const productContainer = document.getElementById("product-container");
    data.forEach((product) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("col-md-4", "mb-3");
      cardDiv.innerHTML = `
        <div class="card" style="box-shadow:10px 10px 15px gray">
          <img src="${product.images[0]}" class="card-img-top" width="300px" height="150px" alt="${product.title}">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="details.html?id=${product.id}" class="btn btn-primary">Details</a>
  </div>
        </div>
        `;
      productContainer.appendChild(cardDiv);
    });
  });
