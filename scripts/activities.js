"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

window.onload = function () {
    initDefault();

    let activitySelect = document.querySelector("#activitySelect");

    activitySelect.style.display = "none";

    document.querySelector("#eTicketForm").style.display = "none";

    initCategories();

    document.querySelector("#categorySelect").addEventListener("change", initActivities);

    activitySelect.addEventListener("change", displayActivities);

    document.querySelector("#eTicketForm").addEventListener("submit", doNotReloadThePageThatIsAllThisFunctionDoes);

}

function doNotReloadThePageThatIsAllThisFunctionDoes(event) {
    event.preventDefault();
}

function initDefault() {
    let categoriesDropdown = document.querySelector("#categorySelect");
    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a category";
    defaultOption.value = "";
    categoriesDropdown.appendChild(defaultOption);
}

function initCategories() {
    let myDropdown = document.querySelector("#categorySelect");

    for (let i = 0; i < categories.length; i++) {
        let currentCategory = categories[i];

        let newOption = document.createElement("option");
        newOption.textContent = currentCategory;
        newOption.value = categories[i];

        myDropdown.appendChild(newOption);
    }
}

function initActivities(event) {
    // this line clears the activity display if the category changes, to avoid showing out of date information
    document.querySelector("#activityDisplay").innerHTML = "";
    document.querySelector("#eTicketForm").style.display = "none";

    // save the category select html element for later
    let categoriesDropdown = event.target;
    let activitiesDropdown = document.querySelector("#activitySelect");

    // if there is data, wipe it before we continue in order to avoid adding every activity possible when changing category
    activitiesDropdown.length = "0";

    // this should probably be a function as I feel I'm re-writing this a lot
    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select an activity";
    defaultOption.value = "";
    activitiesDropdown.appendChild(defaultOption);

    // show the activities dropdown
    activitiesDropdown.style.display = "block";

    let realIndex = (event.target.selectedIndex - 1);

    if (realIndex === -1) {
        activitiesDropdown.style.display = "none";
    } else {
        // loop through activites, only creating an option for those that match our current category
        for (let i = 0; i < activities.length; i++) {
            let currentCategory = activities[i].category;
            if (currentCategory === categoriesDropdown.value) {
                let newOption = document.createElement("option");
                newOption.textContent = activities[i].name;
                newOption.value = activities[i].id;

                activitiesDropdown.appendChild(newOption);
            }
        }
    }
}


// functional but unoptimized, review later
function displayActivities(event) {
    let activityDropdown = event.target;
    let categoriesDropdown = document.querySelector("#categorySelect");;


    document.querySelector("#eTicketForm").style.display = "none";

    let realIndex = (event.target.selectedIndex - 1);
    let activityDiv = document.querySelector("#activityDisplay");

    if (realIndex === -1) {
        activityDiv.innerHTML = "";
    } else {

        let activitiesInCategory = [];
        for (let i = 0; i < activities.length; i++) {
            let currentCategory = activities[i].category;
            if (currentCategory === categoriesDropdown.value) {
                activitiesInCategory.push(activities[i])
            }
        }

        let price = activitiesInCategory[realIndex].price;
        if (price > 0) {
            document.querySelector("#eTicketForm").style.display = "block";
        }

        let currentActivity = activitiesInCategory[realIndex];
        activityDiv.innerHTML = `
            <div> Category: ${currentActivity.category} </div>
            <div> ID: ${currentActivity.id} </div>
            <div> Name: ${currentActivity.name} </div>
            <div> Description: ${currentActivity.description} </div>
            <div> Location: ${currentActivity.location} </div>
            <div> Price: ${currentActivity.price.toFixed(2)} </div>
            `;
    }
}