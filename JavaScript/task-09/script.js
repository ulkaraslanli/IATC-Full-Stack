// [
//     {
//         "word": "door",
//         "phonetic": "/dɔː/",
//         "phonetics": [
//             {
//                 "text": "/dɔː/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/door-uk.mp3",
//                 "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9014370",
//                 "license": {
//                     "name": "BY 3.0 US",
//                     "url": "https://creativecommons.org/licenses/by/3.0/us"
//                 }
//             },
//             {
//                 "text": "/dɔɹ/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/door-us.mp3",
//                 "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=658550",
//                 "license": {
//                     "name": "BY-SA 3.0",
//                     "url": "https://creativecommons.org/licenses/by-sa/3.0"
//                 }
//             }
//         ],
//         "meanings": [
//             {
//                 "partOfSpeech": "noun",
//                 "definitions": [
//                     {
//                         "definition": "A portal of entry into a building, room, or vehicle, consisting of a rigid plane movable on a hinge. Doors are frequently made of wood or metal. May have a handle to help open and close, a latch to hold the door closed and a lock that ensures the door cannot be opened without the key.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "I knocked on the vice president's door"
//                     },
//                     {
//                         "definition": "Any flap, etc. that opens like a door.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "the 24 doors in an Advent calendar"
//                     },
//                     {
//                         "definition": "(immigration) An entry point.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "A means of approach or access.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "Learning is the door to wisdom."
//                     },
//                     {
//                         "definition": "A barrier.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "Keep a door on your anger."
//                     },
//                     {
//                         "definition": "A software mechanism by which a user can interact with a program running remotely on a bulletin board system. See BBS door.",
//                         "synonyms": [],
//                         "antonyms": []
//                     }
//                 ],
//                 "synonyms": [],
//                 "antonyms": []
//             },
//             {
//                 "partOfSpeech": "verb",
//                 "definitions": [
//                     {
//                         "definition": "To cause a collision by opening the door of a vehicle in front of an oncoming cyclist or pedestrian.",
//                         "synonyms": [],
//                         "antonyms": []
//                     }
//                 ],
//                 "synonyms": [],
//                 "antonyms": []
//             }
//         ],
//         "license": {
//             "name": "CC BY-SA 3.0",
//             "url": "https://creativecommons.org/licenses/by-sa/3.0"
//         },
//         "sourceUrls": [
//             "https://en.wiktionary.org/wiki/door"
//         ]
//     }
// ]



// const api_base_url =
//     'https://api.dictionaryapi.dev/api/v2/entries/en/';
// const dict = document.getElementById('dictionary');

// // const fetchDefinitions = async word => {
// //     const response = await fetch(api_base_url + word);
// //     const json = await response.json();
// //     return json;
// //     // return json[0].meanings
// //     //     .flatMap(m => m.definitions)
// //     //     .flatMap(d => d.definition);
// // };

// async function fetchDefinitions() {
// 	try {
//         const response = await fetch(api_base_url + word);

// 		if (response.status !== 200) {
// 			throw new Error('No data');
// 		}

// 		const wordData = await response.json();

// 		return {
// 			error: null,
// 			data: wordData
// 		};
// 	} catch (error) {
// 		return {
// 			error: error.message,
// 			data: [],
// 		};
// 	}
// }

// dictForm.addEventListener("submit", (e) => {
//     e.preventDefault();
  
//     const word = document.getElementById('word').value;
//     if (word == null || word == '') {
//         return alert('Error: You must enter a word to search');
//     }
//     dict.innerHTML = '';
//     fetchDefinitions(word);
// });


// async function addCart(data) {
//     const cartContainer = document.getElementById('cartContainer');
//     cartContainer.innerHTML = '';
  
//     const fragmentCart = document.createDocumentFragment();
  
//     for (const [productId, quantity] of Object.entries(data)) {
//       const product = await getProductById(productId);
  
//       if (product) {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('product_cart');
//         cartItem.dataset.id = product.id;
//         cartItem.innerHTML = `
//           <div class="cart_image">
//             <img src="${product.image}" alt="${product.title}">
//           </div>
//           <div class="product__body">		  
//               <h2>${product.title}</h2>
//               <p class="product__price">
//                 <span>Price:</span>
//                 <span>${product.price * quantity}</span>
//                 <span>₼</span>
//               </p>	  
//               <p class="product__quantity">
//                 <span>Quantity:</span>
//                 <span>${quantity}</span>
//               </p>	  
//           </div>
//         `;
//         fragmentCart.appendChild(cartItem);
//       }
//     }
  
//     cart.appendChild(fragmentCart);
//   }

const dictionary = document.getElementById('dictionary');

const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// to get products from server
function getProducts() {
	const url = new URL(baseURL);
	url.searchParams.set('limit', urlParams.limit);
	url.searchParams.set('skip', urlParams.skip);

	fetch(url)
		.then((res) => res.json())
		.then(({ products}) => {

			// create html for each product and add it to productsContainer
			products.forEach(({ word, phonetic, phonets[audio] }) => {
				dictionary.innerHTML += createProduct(word, phonetic, phonets[audio]);
			});
		});
}



// to make html for single product
function createProduct(word, phonetic, phonets[audio]) {
	return `
<div class="card">
  <div>
    <h2>${word}</h2>
    <
</div>
  `;
}