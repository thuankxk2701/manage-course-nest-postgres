import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from '@remix-run/react';

export interface IDataBlogs{
  id:string,
  title:string,
  body:string,
  userId:string
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data :Array<IDataBlogs>= await response.json();
  
  return json({blogs:data});
}

export default function Index() {
  const {blogs} = useLoaderData<typeof loader>()
  return (
      <div className='grid grid-cols-4 gap-3'>
       {blogs?.map(blog=>(
        <Link to={`/blogs/${blog.id}`} className='p-3 shadow-md rounded-md' key={blog.id}>{blog.body}</Link>
       ))}
      </div>
  );
}
