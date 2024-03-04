// load all posts data 
const loadAllPost = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const postData = await response.json();
    const posts = postData.posts;
    displayPosts(posts);
}

// display post data 
const displayPosts = posts => {
    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = `card w-full bg-base-100 shadow-xl mb-4`;

        postCard.innerHTML = `
            <div class="card-body">
                <div class="flex gap-x-8">
                    <div class="avatar rounded-full">
                        <div class="w-[90px] h-24 rounded-xl">
                            <img src="${post.image}" />
                        </div>
                    </div>

                    <div>
                        <div class="flex">
                            <h6>#${post.category}</h6>
                            <h6>Author : ${post.author.name}</h6>
                        </div>
                        <h3 class="my-2 font-mulish font-bold text-xl">${post.title}</h3>
                        <p class="my-4 text-base text-[#67676a] font-inter">${post.description}</p>
                        <hr class="border-t border-dashed border-gray-400 my-4"/>

                        <div class="flex justify-between items-center">
                            <div class="flex space-x-4">
                                <div class="flex items-center space-x-2">
                                    <img src="images/Group 13.svg" alt="">
                                    <p>${post.comment_count}</p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <img src="images/Group 16.svg" alt="">
                                    <p>${post.view_count}</p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <img src="images/Group 18.svg" alt="">
                                    <p>${post.posted_time}</p>
                                </div>
                                <!-- Move button container here -->
                                <div>
                                    <button>
                                        <img src="images/Group 40106.svg" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        postContainer.appendChild(postCard);
    });
}

loadAllPost();
