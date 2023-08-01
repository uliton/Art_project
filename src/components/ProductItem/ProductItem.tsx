import { Link } from 'react-router-dom';
import './ProductItem.scss'

type Props = {
    item: object;
};

const ProductItem = ({ item }: Props) => {
    return (
        <div className='productItem'>
            <Link className="productItem__image-container" to="/artwork/:id">
                <img src="https://placehold.co/300" alt="product-image" />
            </Link>
            <div className="productItem__info">
                <p className="productItem__info-name">Yellow Pession</p>

            </div>
            <div className="productItem__info">
                <p className="productItem__infoproductItem__info-artistname">Linda Clerget, France</p>

            </div>
            <div className="productItem__info">
                <p className="productItem__info-kindOfArt">Painting</p>

            </div>
            <div className="productItem__info">
                <p className="productItem__info-price">{`US$ ${230}`}</p>
            </div>
        </div>
    );
};

export default ProductItem;