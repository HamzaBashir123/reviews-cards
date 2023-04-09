const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag. Sriracha literally flexitarian irony.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// Select items 
const personImg = document.querySelector(".personImg");
const author = document.querySelector(".author");
const job = document.querySelector('.job');
const info = document.querySelector(".info");


//  job.innerHtml = "12"
// Select button
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.querySelector(".randomBtn");
let currentItem = 0;

// window.addEventListener("DOMContentLoaded", function () {
//     const item = reviews[currentItem];
//     personImg.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
//   });

  function showPerson(person) {
    const item = reviews[person];
    personImg.src = item.img;
    author.textContent = item.name;
    console.log(author.textContent)
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    prevBtn.style.display = "inline-block"
    currentItem++;
    if (currentItem > reviews.length - 1) {
      nextBtn.style.display = "none"
      currentItem--;

    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    nextBtn.style.display = "inline-block"
    if (currentItem < 0) {
      currentItem++ ;
      prevBtn.style.display = "none"
      
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
      currentItem = Math.floor(Math.random() * reviews.length);
      showPerson(currentItem);
  });