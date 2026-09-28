/* =====================================
   BLOG DATA
===================================== */

const blogs = [

    {
        id: 1,

        title: "The Best Version of Myself ✨",

        date: "September 27, 2026",

        icon: "🌷",

        description:
            "A little promise to myself about becoming the person I dream of being.",

        content: `
            <h2>The Best Version of Myself ✨</h2>

            <p>
                Becoming the best version of myself isn't about
                becoming perfect. It's about becoming someone
                I'm proud of.
            </p>

            <p>
                I want to keep learning, growing, travelling,
                playing sports and building my career in
                Artificial Intelligence.
            </p>

            <p>
                My journey won't always be perfect, but I want
                to keep moving forward and becoming better
                every day.
            </p>
        `
    },


    {
        id: 2,

        title: "My Dream Travel List ✈️",

        date: "September 27, 2026",

        icon: "✈️",

        description:
            "Places I dream of visiting and the experiences I want to have there.",

        content: `
            <h2>My Dream Travel List ✈️</h2>

            <p>
                Travelling isn't just about visiting beautiful
                places. I want to experience the food, culture,
                people and everyday life of each destination.
            </p>

            <p>
                Japan, the USA, Kashmir, Switzerland and many
                more places are on my dream list.
            </p>

            <p>
                I want to collect experiences instead of
                just photographs.
            </p>
        `
    },


    {
        id: 3,

        title: "A Letter to My 2035 Self 💌",

        date: "September 27, 2026",

        icon: "💌",

        description:
            "A message to the future version of me about dreams, growth and life.",

        content: `
            <h2>A Letter to My 2035 Self 💌</h2>

            <p>
                Dear Future Me,
            </p>

            <p>
                I hope you're proud of the girl who started
                writing this letter in 2026.
            </p>

            <p>
                I hope you remember all the dreams you had,
                all the risks you took and all the little
                moments that helped you become who you are.
            </p>

            <p>
                Never forget where you started.
            </p>
        `
    },


    {
        id: 4,

        title: "My AI Journey 🤖",

        date: "September 28, 2026",

        icon: "🤖",

        description:
            "My journey of learning Artificial Intelligence and building my future.",

        content: `
            <h2>My AI Journey 🤖</h2>

            <p>
                Artificial Intelligence is one of the areas
                I want to build my career in.
            </p>

            <p>
                From learning programming and data structures
                to exploring machine learning and modern AI
                tools, every step is teaching me something new.
            </p>

            <p>
                My goal is to keep learning and eventually
                build something meaningful with technology.
            </p>
        `
    },


    {
        id: 5,

        title: "Sports & Me 🏆",

        date: "September 28, 2026",

        icon: "🏆",

        description:
            "How sports became an important part of my life.",

        content: `
            <h2>Sports & Me 🏆</h2>

            <p>
                Sports have taught me discipline, teamwork,
                patience and how to keep going even when
                things don't go exactly as planned.
            </p>

            <p>
                Every tournament and every practice becomes
                another memory and another lesson.
            </p>

            <p>
                I want sports to remain an important part
                of my life even while building my career.
            </p>
        `
    }

];


/* =====================================
   DISPLAY BLOGS
===================================== */

const blogContainer =
    document.getElementById("blogContainer");


function displayBlogs(blogList) {

    blogContainer.innerHTML = "";


    if (blogList.length === 0) {

        blogContainer.innerHTML = `
            <p style="text-align:center;">
                No blogs found 😭
            </p>
        `;

        return;
    }


    blogList.forEach(blog => {

        const card = document.createElement("div");

        card.className = "blog-card";


        card.innerHTML = `

            <div class="blog-icon">
                ${blog.icon}
            </div>

            <div class="blog-date">
                ${blog.date}
            </div>

            <h3>
                ${blog.title}
            </h3>

            <p>
                ${blog.description}
            </p>

            <button
                class="read-button"
                onclick="openBlog(${blog.id})">

                Read More →

            </button>

            <button
                class="like-button"
                onclick="likeBlog(this)">

                ♡

            </button>

        `;


        blogContainer.appendChild(card);

    });

}


/* =====================================
   OPEN BLOG
===================================== */

const modal =
    document.getElementById("blogModal");

const modalContent =
    document.getElementById("modalContent");


function openBlog(id) {

    const blog =
        blogs.find(blog => blog.id === id);


    if (!blog) return;


    modalContent.innerHTML =
        blog.content;


    modal.style.display = "block";


    document.body.style.overflow = "hidden";
}


/* =====================================
   CLOSE BLOG
===================================== */

document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);


function closeModal() {

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


/* =====================================
   CLOSE WHEN CLICKING OUTSIDE
===================================== */

window.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeModal();

    }

});


/* =====================================
   SEARCH BLOGS
===================================== */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase();


    const filteredBlogs =
        blogs.filter(blog =>

            blog.title
                .toLowerCase()
                .includes(searchText)

            ||

            blog.description
                .toLowerCase()
                .includes(searchText)

        );


    displayBlogs(filteredBlogs);

});


/* =====================================
   LIKE BUTTON
===================================== */

function likeBlog(button) {

    if (button.innerHTML === "♡") {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


/* =====================================
   DARK MODE
===================================== */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});


/* =====================================
   START WEBSITE
===================================== */

displayBlogs(blogs);
