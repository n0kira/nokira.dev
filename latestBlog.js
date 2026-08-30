const latestBlogContainer = document.querySelector(`.latest-blog`);

fetch('https://blog.nokira.dev/posts.json')
  .then(response => response.json())
  .then(posts => {
    if (posts.length == 0) return;
    const post = posts[posts.length - 1];
    
    document.querySelector(`.latest-blog-space`).innerHTML = `
      <div class="blog-item">
        <div class="blog-details">
          <div>
            <div class="blog-title">${post.title}</div>
            <div class="blog-date">${post.date}</div>
            <div class="blog-description">${post.description}</div>
          </div>
          <div class="blog-resources">
            <a href="https://blog.nokira.dev/post.html?file=${post.slug}">Read More</a>
          </div>
        </div>
      </div>
    `
  });
