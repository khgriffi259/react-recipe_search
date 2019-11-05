import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({
        recipe: {
            image_url,
            title,
            publisher,
            source_url,
            recipe_id
        }
    }
) => {
    return  <>
            <div className="col s12 m6 xl4">
                <div className="card">
                    <div className="card-image">
                        <img src={image_url} alt={title} className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title"> {title} </span>
                        <p className="publisher"> {`provided by ${publisher}`} </p>
                    </div>
                    <div className="card-action">
                        <Link to={`/details/${recipe_id}`} className="btn waves-effect blue mr-1">Details</Link>
                        <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn waves-effect green">Recipe Url</a>
                    </div>
                </div>
            </div>
            </>
}

export default Recipe
