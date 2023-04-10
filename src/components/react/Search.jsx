import React from 'react'

const Search = ({ handleChange, searchTerm, allCategories, handleCategory }) => {
        
    const handleSubmit = e => e.preventDefault();

    return (
        <>
            <form onSubmit={handleSubmit} className='relative mb-4 flex gap-4 w-full flex-wrap items-stretch'>
                <input
                    type="search"
                    className="m-0 flex-auto rounded-full shadow ring-2 ring-orange-300 focus:ring-orange-500 focus:outline-none px-3 py-1.5"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange} />
                <div className='flex flex-wrap gap-4'>
                    {
                        allCategories.map((category) => (
                            <button
                                onClick={() => handleCategory(category)}
                                key={category}
                                className='bg-orange-400 p-3 rounded-full text-white uppercase hover:bg-orange-800 focus:bg-orange-800'>{category}
                            </button>
                        ))
                    }
                </div>
            </form>
        </>

    )
}

export default Search