import PropTypes from 'prop-types';

const CocktailInfo = ({ productInfo }) => {
    return (
        <div className="cocktail-infos">
            <div className="row">
                <h3 className="label">Name: </h3>
                <p className="text">{productInfo.name}</p>
            </div>
            <div className="row">
                <h3 className="label">Category: </h3>
                <p className="text">{productInfo.category}</p>
            </div>
            <div className="row">
                <h3 className="label">Info: </h3>
                <p className="text">{productInfo.info}</p>
            </div>
            <div className="row">
                <h3 className="label">Instructions: </h3>
                <p className="text">{productInfo.instructions}</p>
            </div>
            <div className="row">
                <h3 className="label">Ingredients: </h3>
                <p className="text">{productInfo.ingredients}</p>
            </div>
        </div>
    )
}

CocktailInfo.propTypes = {
    productInfo: PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        info: PropTypes.string,
        ingredients: PropTypes.string,
        instructions: PropTypes.string
    })
}
export default CocktailInfo