const products = document.getElementById('products');
const cart = document.getElementById('cart');

const cartHeading = document.createElement('h2');
cartHeading.classList.add('cart_heading');
cartHeading.append('CART');
cart.append(cartHeading);

async function getProducts() {
	try {
		const response = await fetch('https://fakestoreapi.com/products');

		if (response.status !== 200) {
			throw new Error('No data');
		}

		const products = await response.json();

		return {
			error: null,
			data: products,
		};
	} catch (error) {
		return {
			error: error.message,
			data: [],
		};
	}
}

function renderProducts() {
const result = getProducts();

result.then(({ data, error }) => {
	if (error) {
		products.innerHTML = `<h2>${error}</h2>`;
	}

	const fragment = document.createDocumentFragment();

	data.forEach((product) => {
		const productItem = document.createElement('div');
		productItem.classList.add('product__item');
		productItem.dataset.id = product.id;
		productItem.innerHTML = `
	<div class="cart_image">
	  <img src="${product.image}" alt="${product.title}">
	</div>
	<div class="product__body">
	  <h2>${product.title}</h2>
	  <p>${product.description}</p>
	  <p class="product__price">
		<span>Price:</span>
		<span>${product.price}</span>
		<span>₼</span>
	  </p>
	  <p class="product__category">
		<span>Category:</span>
		<span>${product.category}</span>
	  </p>
	  <p class="product__rating">
		<span>Rating:</span>
		<span>${product.rating.rate}</span>
		<span>(${product.rating.count})</span>
	  </p>
	</div>
  `;
		fragment.appendChild(productItem);
	});

	products.appendChild(fragment);
});
}


renderProducts();

products.addEventListener('click', findClickedProduct);

function findClickedProduct(event) {
  const target = event.target;
  const productItem = target.closest('.product__item');

  if (productItem) {
	const productId = productItem.dataset.id;

	const data = getData('cartData');

	if (data[productId]) {
	  data[productId] += 1;
	} else {
	  data[productId] = 1;
	}

	saveData('cartData', data);

	addCart(data);
  }
}


// function findClickedProduct(event) {
//   const target = event.target;
//   const productItem = target.closest('.product__item');

//   if (productItem) {
//     const productId = productItem.dataset.id;
//     const cartContainer = document.getElementById('cartContainer');
//     const cartItems = cartContainer.getElementsByClassName('product_cart');

//     const data = getData('cartData') || {};
//     const quantity = data[productId] || 0;

//     if (data[productId]) {
//       data[productId] += 1;
//     } else {
//       data[productId] = 1;
//     }

//     if (quantity > 0) {
//       // Product is already in the cart, update quantity and price
//       data[productId] = quantity + 1;
//     } else {
//       // Product is not in the cart, add it
//       data[productId] = 1;
//     }

//     saveData('cartData', data);
//     updateCartDisplay(cartItems);
//   }
// }

// function updateCartDisplay(cartItems) {
//   for (const cartItem of cartItems) {
//     const productId = cartItem.dataset.id;
//     const quantityElement = cartItem.querySelector('.product__quantity span');
//     const priceElement = cartItem.querySelector('.product__price span');

//     const data = getData('cartData') || {};
//     const quantity = data[productId] || 0;

//     quantityElement.textContent = quantity;
//     priceElement.textContent = calculateTotalPrice(productId, quantity);
//   }
// }

// function updateCartDisplay(cartItems) {
//   for (const cartItem of cartItems) {
//     const productId = cartItem.dataset.id;
//     const quantityElement = cartItem.querySelector('.product__quantity span');
//     const priceElement = cartItem.querySelector('.product__price span');

//     const data = getData('cartData') || {};
//     const quantity = data[productId] || 0;

//     quantityElement.textContent = quantity;

//     // Update the price based on the new quantity
//     const product = getProductById(productId);
//     if (product) {
//       const price = product.price * quantity;
//       priceElement.textContent = price;
//     }
//   }
// }

// function calculateTotalPrice(productId, quantity) {
//   const product = getProductById(productId);
//   return product ? product.price * quantity : 0;
// }

function saveData(key, value) {
  const JSONstring = JSON.stringify(value);
  localStorage.setItem(key, JSONstring);
}

function getData(key) {
  const JSONstring = localStorage.getItem(key);
  const data = JSON.parse(JSONstring);
  return data;
}

async function addCart(data) {
  const cartContainer = document.getElementById('cartContainer');
  cartContainer.innerHTML = '';

  const fragmentCart = document.createDocumentFragment();

  for (const [productId, quantity] of Object.entries(data)) {
	const product = await getProductById(productId);

	if (product) {
	  const cartItem = document.createElement('div');
	  cartItem.classList.add('product_cart');
	  cartItem.dataset.id = product.id;
	  cartItem.innerHTML = `
		<div class="cart_image">
		  <img src="${product.image}" alt="${product.title}">
		</div>
		<div class="product__body">		  
			<h2>${product.title}</h2>
			<p class="product__price">
			  <span>Price:</span>
			  <span>${product.price * quantity}</span>
			  <span>₼</span>
			</p>	  
			<p class="product__quantity">
			  <span>Quantity:</span>
			  <span>${quantity}</span>
			</p>	  
		</div>
	  `;
	  fragmentCart.appendChild(cartItem);
	}
  }

  cart.appendChild(fragmentCart);
}

// async function addCart(data) {
//   const cartContainer = document.getElementById('cartContainer');
//   cartContainer.innerHTML = '';

//   const fragmentCart = document.createDocumentFragment();

//   for (const [productId, quantity] of Object.entries(data)) {
//     const product = await getProductById(productId);

//     if (product) {
//       const cartItem = document.createElement('div');
//       cartItem.classList.add('product_cart');
//       cartItem.dataset.id = product.id;
//       cartItem.innerHTML = `
//         <div class="cart_image">
//           <img src="${product.image}" alt="${product.title}">
//         </div>
//         <div class="product__body">
		  
//             <h2>${product.title}</h2>
		  
		  
//             <p class="product__price">
//               <span>Price:</span>
//               <span>${product.price * quantity}</span>
//               <span>₼</span>
//             </p>
		  
		  
//             <p class="product__quantity">
//               <span>Quantity:</span>
//               <span>${quantity}</span>
//             </p>
		  
//         </div>
//       `;
//       fragmentCart.appendChild(cartItem);
//     }
//   }

//   cartContainer.appendChild(fragmentCart);
// }

async function getProductById(productId) {
  try {
	const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

	if (response.status !== 200) {
	  throw new Error('No data');
	}

	const product = await response.json();
	return product;
  } catch (error) {
	console.error(error);
	return null;
  }
}

// // Load cart on page load
// const initialCartData = getData('cartData');
// if (initialCartData) {
//   addCart(initialCartData);
// }
