const loadMoreButton = document.getElementById('loadMoreButton');

fetch('https://dummyjson.com/products?limit=8&skip=0')
.then(res => res.json())
.then(({ products }) => {
    console.log(products)
    products.forEach(product => {
        productsContainer.innerHTML += `
        <div
        class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
      >
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style="background-image: url('${product.images[0]}');"
        >
          <button
            class="add-to-card p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            <svg
              class="h-5 w-5 pointer-events-none"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">${product.title}</h3>
          <span class="text-gray-500 mt-2">$${product.price}</span>
        </div>
      </div>`
    });
});

loadMoreButton.addEventListener('click', () => {
    
})

