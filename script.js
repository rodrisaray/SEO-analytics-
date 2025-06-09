document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  cta.addEventListener('click', () => {
    document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
  });
});

<script>
fetch('https://yourblogname.blogspot.com/feeds/posts/default?alt=json')
  .then(response => response.json())
  .then(data => {
    const posts = data.feed.entry.slice(0, 3); // Get latest 3
    let html = '<ul>';
    posts.forEach(post => {
      const title = post.title.$t;
      const url = post.link.find(l => l.rel === 'alternate').href;
      html += `<li><a href="${url}" target="_blank">${title}</a></li>`;
    });
    html += '</ul>';
    document.getElementById('blog-feed').innerHTML = html;
  });
</script>
