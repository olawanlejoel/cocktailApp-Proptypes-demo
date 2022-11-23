import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { request } from 'graphql-request';
import CocktailInfo from '../Components/CocktailInfo';

const ProductDetails = () => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();


	useEffect(() => {
		const fetchProduct = async () => {
			const { cocktail } = await request(
				'https://api-us-east-1.graphcms.com/v2/cl4ji8xe34tjp01yrexjifxnw/master',
				`
			{ 
				cocktail(where: {slug: "${slug}"}) {
					category
					info
					ingredients
					instructions
					image {
						url
					 }
					name
					
				 }
			}
		 `
			);

			setProduct(cocktail);
		};

		fetchProduct();
	}, [slug]);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<div className="title">
					<h1>{product.name}</h1>
				</div>
				{product && (
					<div className="flex-container">
						{product.image && (
							<img src={product.image.url} alt="" className="cocktail-img" />
						)}
						<CocktailInfo productInfo={{
							name: product.name,
							category: product.category,
							info: product.info,
							ingredients: product.ingredients,
							instructions: product.instructions
						}} />
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
