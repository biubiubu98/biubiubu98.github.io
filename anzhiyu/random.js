var posts=["2023/12/31/日常文章/2023.12/C++中的内存管理/","2024/01/04/directory/C语言目录/","2024/01/05/日常文章/2024.1/C语言中变量的声明和定义深度解析/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };