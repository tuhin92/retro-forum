// load all posts data 
const loadAllPost =async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const postData = await response.json();
    const posts = postData.posts;
    console.log(posts);
}
loadAllPost();