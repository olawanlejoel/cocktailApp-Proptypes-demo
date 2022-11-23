import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { request } from 'graphql-request';
import Product from '../Components/Product';

const Products = () => {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			const { cocktails } = await request(
				'https://api-us-east-1.graphcms.com/v2/cl4ji8xe34tjp01yrexjifxnw/master',
				`
			{ 
				cocktails {
               id
               name
               slug
               info
               ingredients
               instructions
               image {
                 url
               }
               category
             }
			}
		 `
			);

			setProducts(cocktails);
		};

		fetchProducts();
	}, []);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div className="title">
				<h1>CockTails</h1>
			</div>
			<div className="cocktails-container">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
