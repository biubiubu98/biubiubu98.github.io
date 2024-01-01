var posts=["2023/12/31/日常文章/C-中的内存管理：深入理解与应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };