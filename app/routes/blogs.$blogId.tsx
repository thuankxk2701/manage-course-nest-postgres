import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react';
import { IDataBlogs } from './_index';


export const loader = async ({ params }: LoaderFunctionArgs) => {
    console.log(params);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    const data: IDataBlogs = await response.json();
    return json({ blog: data })

}


const Blog = () => {
    const { blog } = useLoaderData<typeof loader>()
    return (
        <div>
            <div className='p-4 rounded-md w-[360[x]]'>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
            </div>
        </div>
    )
}

export default Blog