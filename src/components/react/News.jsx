import React, { useState } from 'react'
import news from '../../config/news.json'
import Search from './Search'
import NewsList from './NewsList'

const News = () => {

    const allCategories = ['All',...new Set(news.map(n => n.category))];
    const [searchTerm, setSearchTerm] = useState("");
    const [resultFilter, setResultFilter] = useState(news);

    const handleCategory = (category) =>{
        if(category === 'All'){
            setResultFilter(news);
            return
        }
        const filteredNews = news.filter(n => n.category === category);
        setResultFilter(filteredNews);
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setResultFilter(
            news.filter(post => post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        )
    }
    
    return (
        <section className="container mx-auto py-4 px-4 my-4 bg-neutral-50 rounded-sm">
            <Search handleChange={handleChange} searchTerm={searchTerm} allCategories={allCategories} handleCategory={handleCategory}/>
            <NewsList resultFilter={resultFilter}/>
        </section>
    )
}

export default News