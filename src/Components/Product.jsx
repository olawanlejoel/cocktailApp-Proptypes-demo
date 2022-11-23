import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
    return (
        <div key={product.id} className="cocktail-card">
            <img src={product.image.url} alt="" className="cocktail-img" />
            <div className="cocktail-info">
                <div className="content-text">
                    <h2 className="cocktail-name">{product.name}</h2>
                    <span className="info">{product.info}</span>
                </div>
                <Link to={`/products/${product.slug}`}>
                    <div className="btn">View Details</div>
                </Link>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product