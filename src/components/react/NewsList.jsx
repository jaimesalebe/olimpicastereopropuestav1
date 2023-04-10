import React from 'react'
import news from '../../config/news.json'

const NewsList = ({resultFilter}) => {
    return (
        <div className="grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                resultFilter.map((post) => (
                    <a key={post.title} href={post.url} className="hover:scale-105 hover:transition-all">
                        <ul>
                            <li className="flex flex-col max-w-sm rounded-lg bg-white shadow-lg">
                                <img
                                    src={post.urlToImage}
                                    alt=""
                                    width="0"
                                    height="0"
                                    className="rounded-t-lg w-full h-32  object-cover"
                                />
                                <div className="p-6">
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 line-clamp-2">
                                        {post.title}
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 line-clamp-2">
                                        {post.content}
                                    </p>
                                    <h4 className='uppercase font-bold'><span className='bg-neutral-100 rounded-full p-2'>{post.category}</span></h4>
                                </div>

                            </li>
                        </ul>
                    </a>
                ))
            }
        </div>
    )
}

export default NewsList