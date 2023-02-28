let products = {
  productList: [
    {
      productName: "Black shirt",
      category: "Shirts",
      price: "499",
      image: "/assets/shirt1.jpg",
    },
    {
      productName: "Green shirt",
      category: "Shirts",
      price: "499",
      image: "/assets/shirt2.jpg",
    },
    {
      productName: "Red shirt",
      category: "Shirts",
      price: "499",
      image: "/assets/shirt3.jpg",
    },
    {
      productName: "Purple shirt",
      category: "Shirts",
      price: "499",
      image: "/assets/shirt4.webp",
    },
    {
      productName: "Black Round Neck t-shirt",
      category: "T-shirts",
      price: "299",
      image: "/assets/tshirt-1.jpg",
    },
    {
      productName: "Red Round Neck t-shirt",
      category: "T-shirts",
      price: "299",
      image: "/assets/t-shirt-4.jfif",
    },
    {
      productName: "Olive Round Neck t-shirt",
      category: "T-shirts",
      price: "299",
      image: "/assets/tshirt-2.jpg",
    },
    {
      productName: "Sky Blue Round Neck t-shirt",
      category: "T-shirts",
      price: "299",
      image: "/assets/tshirt-3.jpg",
    },
    {
      productName: "Brown Round Neck t-shirt",
      category: "T-shirts",
      price: "299",
      image: "/assets/t-shirt-5.jpg",
    },
    {
      productName: "Walking Shoes",
      category: "Shoes",
      price: "299",
      image: "/assets/shoe2.jfif",
    },
    {
      productName: "Sneakers Shoes",
      category: "Shoes",
      price: "299",
      image: "/assets/shoe1.jfif",
    },
    {
      productName: "Loafers Shoes",
      category: "Shoes",
      price: "299",
      image: "/assets/shoe4.jpg",
    },
    {
      productName: "The Formals",
      category: "Shoes",
      price: "299",
      image: "/assets/shoe3.jpg",
    },
    {
      productName: "Slim Fit Chino Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p1.jpg",
    },
    {
      productName: "Light Jean Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p2.jpg",
    },
    {
      productName: "Dark Wash Jean Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p3.jpg",
    },
    {
      productName: "Formal Trouser Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p4.jpg",
    },
    {
      productName: "Jogger Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p5.jpg",
    },
    {
      productName: "Casual Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p6.jpg",
    },
    {
      productName: "Cargo Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p7.jpg",
    },
    {
      productName: "Pajama Pants",
      category: "Pants",
      price: "299",
      image: "/assets/p8.jpg",
    },
    {
      productName: "Socks",
      category: "Sports-wear",
      price: "299",
      image: "",
    },
    {
      productName: "Jersey Shorts",
      category: "Sports-wear",
      price: "299",
      image: "",
    },
    {
      productName: "Jersey Shorts",
      category: "Sports-wear",
      price: "299",
      image: "",
    },
    {
      productName: "Hand Gripper",
      category: "Sports-wear",
      price: "299",
      image: "",
    },
  ],
};
for (let i of products.productList) {
  // Create Div
  let prodCard = document.createElement("div");
  prodCard.classList.add("card", i.category, "hide");
  // create image div
  let prodDiv = document.createElement("div");
  prodDiv.classList.add("image-container");
  let prodImg = document.createElement("img");
  prodImg.setAttribute("src", i.image);
  prodDiv.appendChild(prodImg);
  prodCard.appendChild(prodDiv);
  let container = document.createElement("div");
  container.classList.add("cont");
  let prodName = document.createElement("h5");
  prodName.classList.add("product-name");
  prodName.innerText = i.productName.toUpperCase();
  container.appendChild(prodName);
  prodCard.appendChild(container);
  document.querySelector(".products").appendChild(prodCard);
}
function filterProduct(value){
  let buttons = document.querySelectorAll(".btn-value");
buttons.forEach((btn) => {
    if (value.toUpperCase() == btn.innerText.toUpperCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  let productCardDiv = document.querySelectorAll(".card");
  productCardDiv.forEach((card) => {
    if ((value == "all")) {
      card.classList.remove("hide");
    } else {
      if (card.classList.contains(value)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    }
  });
};
document.getElementById("search").addEventListener('click',()=>{
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
})
window.onload = () => {
  filterProduct("all");
};