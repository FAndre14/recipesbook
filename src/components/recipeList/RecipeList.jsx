import React, { useState } from "react";
import Recipe from "./Recipe";
import Modal from "../modal/Modal";
import "./recipeList.css";
import recipesJSON from "./recipes.json";
import Pagination from "../pagination/Pagination";


const RecipeList = ({userSearches}) => {
    const data = JSON.parse(JSON.stringify(recipesJSON));
    const [modalData, setModalData] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    let indexOfLastPost = currentPage * postsPerPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPost = [];
    let filteredData = [];
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    if (userSearches) {
        filteredData = data.filter(recipe => recipe.name.toLowerCase().includes(userSearches.toLowerCase()));
        currentPost = filteredData.slice(indexOfFirstPost, indexOfLastPost);

    } else {
        currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
    }
    
  return (
    <div className="container container__list">
        <div className='container__list-recipes'>
            {
            currentPost.map(({id, name, ingredients, description, picture}) => {
            return (
                <div key={id} className="container__list-recipe" onClick={() => setModalData(data[id-1])}>
                    <Recipe name={name} picture={picture} counter={id} />
                </div>
                );
            })}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={ userSearches ? filteredData.length : data.length} paginate={paginate} currentPage={currentPage}/>
        <Modal modalData={modalData} onClose={() => setModalData(null)} />
    </div>

    )
}

export default RecipeList;