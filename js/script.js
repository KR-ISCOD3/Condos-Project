
const navbar = document.getElementById("navbar");

window.onscroll = () => {
  const scrollValue = window.scrollY;
  console.log(scrollValue);
  const valuescroll = 120;

  if (window.scrollY > valuescroll) {
    navbar.style.backgroundColor = "#353935";
    navbar.style.transition = "0.5s";
    navbar.style.padding = "0px 0px";
    navbar.style.boxShadow = "5px 0px 15px black";

  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.transition = "0.5s";
    navbar.style.padding = "12px 0px";
    navbar.style.boxShadow = "none ";
  }
};

const condos = [
    {
      "id": 1,
      "title": "Small Condo in Downtown",
      "price": 75000,
      "bedrooms": 1,
      "location": "Downtown City",
      "image": "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/02/Daher20134-scaled.jpg"
    },
    {
      "id": 2,
      "title": "Cozy Studio Condo",
      "price": 85000,
      "bedrooms": 1,
      "location": "Suburban Area",
      "image": "https://images.squarespace-cdn.com/content/v1/5f40a8cf9f9f8d5592b55cc3/1599232764670-9I5Y08L7MPRGI1T99XYP/27+fernvale+cl12388.jpg"
    },
    {
      "id": 3,
      "title": "Compact City Condo",
      "price": 69000,
      "bedrooms": 1,
      "location": "City Center",
      "image": "https://moosecondoreno.ca/wp-content/uploads/2019/11/condo-remodoling-Milton-1024x683.jpg"
    },
    {
      "id": 4,
      "title": "Modern Condo with City View",
      "price": 90000,
      "bedrooms": 2,
      "location": "Uptown District",
      "image": "https://moosecondoreno.ca/wp-content/uploads/2020/04/modern-apartment-with-custom-bedroom-and-home-office-barrie.jpg"
    },
    {
      "id": 5,
      "title": "Affordable Condo in the Suburbs",
      "price": 80000,
      "bedrooms": 1,
      "location": "Suburban Neighborhood",
      "image": "https://i.pinimg.com/736x/a9/88/42/a98842f276a88202a6f49a1491198a8c.jpg"
    },
    {
      "id": 6,
      "title": "Affordable Condo in the Suburbs",
      "price": 90000,
      "bedrooms": 2,
      "location": "Suburban Neighborhood",
      "image": "https://i.pinimg.com/736x/60/68/4e/60684ec30d57dbecc6263f41d01ecb5d.jpg"
    },
    {
      "id": 7,
      "title": "Affordable Condo in the Suburbs",
      "price": 60000,
      "bedrooms": 1,
      "location": "City Center",
      "image": "https://www.mandanibay.com/wp-content/uploads/2022/02/A-Guide-on-How-to-Design-and-Furnish-Your-Own-Condo-Unit.webp"
    },
    {
      "id": 8,
      "title": "Affordable Condo in the Suburbs",
      "price": 50000,
      "bedrooms": 1,
      "location": "Uptown District",
      "image": "https://images.squarespace-cdn.com/content/v1/5d6d67f2387da800015dc00e/1585429896889-PUOKDAUCXWOZZ2KVAEK8/BrunoBelli_Jude_SansaInteriors-2.jpg"
    }
];

const rowcard = document.getElementById("rowcard");
const rowcard1 = document.getElementById("rowcard1");
const rowcard2 = document.getElementById("rowcard2");

condos.forEach(condo => {
    const condoElment = 
    `
        <div class="col-6 col-md-4 col-lg-3 p-1 p-md-2 my-1 animate__animated animate__bounceIn">
            <div class="card overflow-hidden">
            <div class="image bg-secondary">
                <img
                class="w-100 h-100 object-fit-cover"
                src="${condo.image}"
                alt="No image"
                />
            </div>
            <div class="card-body text-center suse-font">
                <h4>$${condo.price}</h4>
                <div class="border-top text-center pt-2">
                <p class="m-0 text-secondary">
                    <i class="bi bi-geo-alt-fill text-dark"></i>
                    ${condo.location}
                </p>
                <p class="m-0 text-secondary">
                    <i class="fa-solid fa-bed text-dark"></i>
                    ${condo.bedrooms} BED</p>
                </div>
            </div>
            </div>
        </div>
    `
    rowcard.innerHTML += condoElment;
    rowcard1.innerHTML += condoElment;
    rowcard2.innerHTML += condoElment;
})