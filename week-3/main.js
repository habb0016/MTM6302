//create the blog data
<<<<<<< HEAD
const category = [
    'World', 
    'Canada', 
    "Technology", 
    "Design"
]
// feature post and post title section
const blogs = [
    {
        //object
        category: "World",
        title: "Featured post",
        date: "Nov 12",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        link: "/"
=======
const categories = [
    'World', 
    'Canada', 
    'Technology', 
    'Design'
]

const blogs = [
    {
        category: 'World',
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    },
    {
        category: 'Design',
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    }
]

>>>>>>> b55482720d95bc82efd95bf797e5d7096e08d9ad

    },
    {
        //object
        category: "Design",
        title: "Post title",
        date: "Nov 11",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        link: "/"
    }
]
/*** DOM ***/
<<<<<<< HEAD
console.log(document.title)

/*** Finding HTML Elements ***/
//Select element by ID.
const $main = document.getElementById("main")
console.log($main)

//Select element by any CSS selector
const $canadaCategory = document.querySelector("nav a:nth-child(2)");
console.log( $canadaCategory );

const $categories = document.querySelectorAll('nav a');
console.log( $categories [0] );
//practice CSS selectors
// console.log(document.querySelectorAll('nav a:not(nav a:last-child)'))
console.log(document.querySelectorAll('[href*="cdn"]'));
console.log(document.querySelectorAll('nav a:first-child'));
console.log(document.querySelectorAll('nav a:not(nav a:last-child)'));
=======
console.log(document.links)

/*** Finding HTML Elements ***/
//Select element by ID.
const $main = document.getElementById('main')
console.log( $main )

//Select element by any CSS selector
const $canadaCategory = document.querySelector('nav a:nth-child(2)')
console.log( $canadaCategory  )

const $categories = document.querySelectorAll('nav a')
console.log( $categories )

//practice CSS selectors
console.log( document.querySelectorAll('[href^="https"]')   )
console.log( document.querySelectorAll('[href*="cdn"]')   )
>>>>>>> b55482720d95bc82efd95bf797e5d7096e08d9ad

/*** Traversing the DOM  ***/
console.log( $main.children  )
console.log( $main.childNodes )
console.log( $main.firstElementChild  )
console.log( $main.nextElementSibling )

/*** Manipulating attributes */
//getAttribute()
//Obtain the id of the main element
<<<<<<< HEAD
console.log($main.className);
=======
console.log( $main.getAttribute('id') )
console.log( $main.id )
>>>>>>> b55482720d95bc82efd95bf797e5d7096e08d9ad

//exception calling attributes as properties
console.log( $main.className )
console.log( $main.style);
console.log( $main.getAttribute('style'));
console.log(typeof $main.getAttribute('style'));

//setAttribute
//create the id jumbotron; first div element of main
<<<<<<< HEAD
$main.firstElementChild.setAttribute('id','jumbotron');
//Add  'text-bg-dark' class to the element with id jumbotron; warning!
const $jumbotron = document.getElementById("jumbotron");
$jumbotron.setAttribute("class", "text-bg-dark");
//Add the href attribute to the 'continue reading...' link from jumbotron; https://imdac.github.io/mtm6302/
console.log($jumbotron.firstElementChild.children[2].firstElementChild.setAttribute('href','https://imdac.github.io/mtm6302/'));
const $jumbotronLink = $jumbotron.firstElementChild.children[2].firstElementChild;
$jumbotron.firstElementChild.children[2].setAttribute('target', '_blank');
console.log($jumbotronLink.getAttribute('class')); // text-bg-dark
=======
$main.firstElementChild.setAttribute('id','jumbotron')
const $jumbotron = document.getElementById('jumbotron')
//Add  'text-bg-dark' class to the element with id jumbotron; warning!
// $jumbotron.setAttribute('class','text-bg-dark')

//Add the href attribute to the 'continue reading...' link from jumbotron; https://imdac.github.io/mtm6302/
const $jumbotronLink = document.querySelector('main a')
console.log($jumbotronLink)
$jumbotronLink.setAttribute('href','https://imdac.github.io/mtm6302/')

$jumbotronLink.setAttribute('target', '_blank')
console.log($jumbotronLink.getAttribute('class')); // text-white fw-bol
>>>>>>> b55482720d95bc82efd95bf797e5d7096e08d9ad
console.log($jumbotronLink.getAttribute('href')); // https://imdac.github.io/mtm6302/
console.log($jumbotronLink.getAttribute('target')); // _blank

//Remove
//Remove the attribute 'target' from the 'continue reading...' link
console.log($jumbotronLink.removeAttribute('target')); // null 



/*** Manipulating classes ***/
<<<<<<< HEAD
// console.log($jumbotron.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' o the element with id jumbotron
// $jumbotron.classList.add('text-bg-dark');
// console.log($jumbotron.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]
=======
console.log(   $jumbotron.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' to the element with id jumbotron
$jumbotron.classList.add('text-bg-dark')
console.log($jumbotron.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]
>>>>>>> b55482720d95bc82efd95bf797e5d7096e08d9ad

// Remove class
$jumbotron.classList.remove('text-bg-dark')
// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
$jumbotron.classList.remove('text-bg-dark');
// console.log($jumbotron.classList);
// Toggle class
//obtain the 'dark mode' button, and save it to $darkModeBtn const
<<<<<<< HEAD
const $darkModeBtn = document.getElementById("darkModeBtn");
$darkModeBtn.addEventListener('click', function() {
    // toggle class here
    $jumbotron.classList.toggle("text-bg-dark")
})

//contains() and boolean condition
console.log($jumbotron.classList.contains('position-relative')) // ?
console.log($jumbotron.classList.contains('text-bg-dark'))      // ?
const i = 5;
const condition = i > 0;
$jumbotron.classList.toggle('text-bg-dark', condition) //Toggle class
console.log($jumbotron.classList) // ?
=======
const $darkModeBtn = document.getElementById('darkModeBtn')
// $darkModeBtn.addEventListener('click', function() {
//     // toggle class here
//     $jumbotron.classList.toggle('text-bg-dark')
// })

//contains() and boolean condition
console.log($jumbotron.classList.contains('position-relative')) // true
console.log($jumbotron.classList.contains('text-bg-dark'))      // false
const i = 0;
const condition = i > 0;
$jumbotron.classList.toggle('text-bg-dark', condition) //Toggle class
console.log($jumbotron.classList) 


const $link = document.querySelector('nav a')

console.log( $link.textContent = categories[3])

const $title = document.getElementById('title')
$title.textContent = blogs[0].title

 $main.innerHTML = `<div class="nav-scroller py-1 mb-2">
 <nav class="nav d-flex justify-content-between">
   <a class="p-2 link-secondary" href="#">${categories[3]}</a>
   <a class="p-2 link-secondary" href="#">${categories[2]}</a>
   <a class="p-2 link-secondary" href="#">${categories[1]}</a>
   <a class="p-2 link-secondary" href="#">${categories[0]}</a>
 </nav>
</div>`



>>>>>>> b55482720d95bc82efd95bf797e5d7096e08d9ad





