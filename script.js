const blogPosts = [
  {
    title: "Getting Started with JavaScript",
    content: "JavaScript is a powerful scripting language used to create dynamic web content. This guide walks you through the basics."
  },
  {
    title: "10 CSS Tricks You Should Know",
    content: "Learn about 10 useful CSS tricks that will make your websites more responsive and stylish."
  },
  {
    title: "Building Responsive Layouts",
    content: "Responsive design ensures your site works on all devices. Let’s explore how to use flexbox and media queries effectively."
  }
];

const blogContainer = document.getElementById('blogContainer');
const searchInput = document.getElementById('searchInput');

// Function to display blog posts
function displayPosts(posts) {
  blogContainer.innerHTML = '';
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');

    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;

    blogContainer.appendChild(postDiv);
  });
}

// Initial load
displayPosts(blogPosts);

// Filter blog posts based on search input
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchText) ||
    post.content.toLowerCase().includes(searchText)
  );
  displayPosts(filteredPosts);
});
