import React from 'react';

const Filter = (props) => {
    let items = [];
    for (let i = 1; i <= props.pages; i++) {
        items =[...items, i];
    }
    return (
        <div className="buttons-section">  
            {items.map( item => <button className='results-pages-button' onClick={() => props.searchDatabase(props.searchedTitle, item)} key={item}>page {item}</button> )}
        </div>      
    );
}

export default Filter;