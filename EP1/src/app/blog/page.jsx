import React from 'react'

async function fetchBlogData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function BlogPage() {

  const blogData = await fetchBlogData();
  console.log(blogData);

  return (
    <div>
      <h3>Blog Page</h3>
      <p>this is content of Blog page</p>
      <hr />
      {!blogData ? (
        <div>Loading....</div>
      ) : (
        <>
          {blogData.map((post) => (
            <div key={post.id}>
                <h3 className='font-bold my-3'>{post.title}</h3>
                <p>{post.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default BlogPage
