// productsGet();
// async function productsGet() {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const products = await response.json();

//     let data = "";
//     for(let i = 0; i<products.length; i++) {
//         data += `<div class="col">
//         <div class="card shadow-sm">
//         <img width="350px" height="400px" src="${products[i].image}" />
//           <div class="card-body">
//             <p class="card-text"> ${products[i].title}</p>
//             <div class="d-flex justify-content-between align-items-center">
//               <div class="btn-group">
//                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//               </div>
//               <small class="text-muted">${products[i].price} Azn</small>
//             </div>
//           </div>
//         </div>
//       </div>`
//     }

//     document.querySelector('#mehsul').innerHTML = data;

// }

























fetch("https://fakestoreapi.com/products")
.then((response) => {
  response.json()
  .then((products) => {
    let data = "";
    for (let i = 0; i < products.length; i++) {
      data += `<div class="col">
            <p>${products[i].id}</p>
            <div class="card shadow-sm">
            <img width="350px" height="400px" src="${products[i].image}" />
              <div class="card-body">
                <p class="card-text"> ${products[i].title}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">${products[i].price} Azn</small>
                </div>
              </div>
            </div>
          </div>`;
    }

    document.querySelector("#mehsul").innerHTML = data;

    let modal = document.querySelector('#modal');

      
    fetch("https://fakestoreapi.com/products${id=1}").then((response) => {
        response.json().then((modal) => {

        });

        let data = "";
        data += `<div id="modal" class="modal-body">
        <p> ${modal[i].description}</p>
        <p> ${modal[i].category}</p>
        <p> </p>
    </div>`
    });

    document.querySelector("#modal").innerHTML = data;

  });
});
