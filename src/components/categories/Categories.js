import React, { useState } from 'react';
import AllCategories from './AllCategories';
import AllSubCategories from './AllSubCategories';
import AllTask from './AllTask';

function Categories() {

    const [categories, setCategories] = useState('9d8c3cd6-7a65-4d4a-a2ea-4df6be56ca7f');
    const [subCategories, setSubCategories] = useState('9d8c3cd6-7a65-4d4a-a2ea-4df6be56ca7f');
    const [subTask, setsubTask] = useState('9d8c3cd6-7a65-4d4a-a2ea-4df6be56ca7f');
    const [currCategoriesState, setCurrCategoriesState] = useState('categories');

    const renderCategoriesContent = () => {
        switch (currCategoriesState) {
            case 'categories':
                return <AllCategories setCurrCategoriesState = {setCurrCategoriesState} setCategories = {setCategories}/>
            case 'subCategories':
                return <AllSubCategories setCurrCategoriesState = {setCurrCategoriesState} categories = {categories} setSubCategories = {setSubCategories}/>
            case 'subTask':
                return <AllTask setCurrCategoriesState = {setCurrCategoriesState}/>
            default:
                return <AllCategories currCategoriesState = {currCategoriesState} setCategories = {setCategories}/>;
        }
    };


    return (
        <div className="container-fluid">
            <div className="row">
                {/* <div className="sidebar col-md-3">
                    <SlideBar onSelect={setSelected} />
                </div> */}
                <main className="col-md-9">
                    {/* <h1>Hello</h1> */}
                    {renderCategoriesContent()}
                </main>
            </div>
        </div>
    );
}

export default Categories;