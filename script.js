const carouselEl = document.querySelector("#carouselEl");

const myPromise = new Promise((resolve, reject) => {
    let cars = [
        {
            name: "Lamborghini Huracan STO",
            image: "https://billionairetoys.com/wp-content/uploads/lamborghini_huracan_sto_front_side_garage_featured-1000x600.jpg",
            price: "2 000",
        },
        {
            name: "Aston Martin Vantage",
            image: "https://coolmaterial.com/wp-content/uploads/2017/11/Aston-Martin-Vantage-1000x600.jpg",
            price: "1 000",
        },
        {
            name: "Ferrari SF90 Stradale",
            image: "https://www.thesupercarblog.com/wp-content/uploads/2023/03/Ferrari-SF90-Stradale-for-sale-Houston-1-1000x600.jpg",
            price: "1 500",
        },
        {
            name: "McLaren",
            image: "https://images.carandbike.com/cms/articles/2023/9/3205535/Mclaren_GT_Cyber_Yellow_a79c8150f5.jpg",
            price: "900",
        },
        {
            name: "Ares S1",
            image: "https://billionairetoys.com/wp-content/uploads/ARES-S1-Project-Hero-1000x600.jpg",
            price: "2 000",
        },
    ];
    setTimeout(() => {
        if (cars.length) {
            resolve(cars);
        } else {
            reject("Data is invalid");
        }
    }, 500);
});

myPromise
    .then((data) => {
        console.log(data);
        carouselEl.innerHTML = data.map((car, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''} slide">
            <img class="carousel-img" src="${car.image}" class="d-block w-100" alt="${car.name} image" />
            <div class="info">
                <h2>${car.name}</h2>
                <h4>$${car.price}</h4>
            </div>
        </div>

        `)
    })
    .catch((err) => {
        console.log(err);
    });
