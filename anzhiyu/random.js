var posts=["2023/12/31/日常文章/2023.12/C++中的内存管理/","2024/01/04/directory/C语言目录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };