const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const blogPosts = [
    {
        title: "Maximizing Your Morning Routine",
        date: "January 2, 2024",
        author: "Emily Davis",
        image: "images/morning.jpeg",
        excerpt: "Learn how to kickstart your day with a productive morning routine that sets the tone for success."
    },
    {
        title: "Mindfulness for Beginners",
        date: "January 3, 2024",
        author: "Michael Lee",
        image: "images/mindfulness.jpeg",
        excerpt: "Discover simple mindfulness techniques to reduce stress and improve focus in your daily life."
    },
    {
        title: "10 Books to Read in 2024",
        date: "January 4, 2024",
        author: "Sarah Brown",
        image: "images/books.jpeg",
        excerpt: "Expand your knowledge and imagination with these must-read books for 2024."
    }
];

const blogPostsContainer = document.querySelector(".blog-posts");
const loadMoreButton = document.getElementById("loadMoreButton");

let currentPostIndex = 0;

function createPostHTML(post) {
    return `
        <article class="post">
            <h2><a href="#">${post.title}</a></h2>
            <p class="post-meta">Posted on ${post.date} by ${post.author}</p>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.excerpt}</p>
        </article>
    `;
}

loadMoreButton.addEventListener("click", () => {
    const postsToLoad = blogPosts.slice(currentPostIndex, currentPostIndex + 2);
    let firstNewPost;

    postsToLoad.forEach((post, index) => {
        const newPostHTML = createPostHTML(post);
        blogPostsContainer.insertAdjacentHTML("beforeend", newPostHTML);

        if (index === 0) {
            firstNewPost = blogPostsContainer.lastElementChild;
        }
    });

    currentPostIndex += postsToLoad.length;

    if (currentPostIndex >= blogPosts.length) {
        loadMoreButton.style.display = "none";
    }

    if (firstNewPost) {
        firstNewPost.scrollIntoView({ behavior: "smooth" });
    }
});
