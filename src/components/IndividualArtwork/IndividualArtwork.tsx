import { useMemo, useRef, useState } from 'react';
import './IndividualArtwork.scss';
import classNames from 'classnames';
import TextComponent from '../TextComponent';
import ProductList from '../ProductList';
import Paginate from '../Paginate';

const artworkName = 'Artwork Name X';
const authorName = 'Thomas';
const authorLink = '#/';
const price = 227;

const supportInformation = [
    {
        icon: '/paintingIcon.svg',
        text: 'Collect from reputable artists and galleries',
    },
    {
        icon: '/shippingIcon.svg',
        text: 'Ships securely to your door',
    },
    {
        icon: '/certificateIcon.svg',
        text: 'Certificates of Authenticity with each artwork',
    }
];

const artistStatement = `Photographic artwork from the HONG KONG Series by Sven Pfrommer.
                                Diasec work: lambda print behind clear acrylic glass 2mm, with polished edges, with alu-dibond as back and aluminum hanging profile.
                                Artwork is ready to hang.
                                Limited Edition of 10 with certificate.

                                Size: 140 x 70 cm`;

const itemInfo: {[key: string]: string} = {
        Year: '2015',
        Materials: 'paint, acryl',
        Style: 'modern',
    };

const tags = ['Germany', 'Photography', 'Urban'];

const items = [{}];
const itemsPerPage = 12;

for (let i = 0; i < 27; i++) {
    items.push({});
}

const additionalImages: string[] = [];

for (let i = 0; i < 5; i++) {
    additionalImages.push('https://placehold.co/100');
}

const IndividualArtwork = () => {
    const [isLike, setLike] = useState(false);

    const [page, setPage] = useState(1);
    const visibleProductList = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    }, [page]);

    const productListRef = useRef<null | HTMLElement>(null);

    const handleActivateLike = () => {
        setLike(prev => !prev);
    };

    const handlePageChange = (page: number) => {
        setPage(page);


        if (productListRef.current) {
            productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="artwork-container">
            <div className="mainInfo-container">
                <div className="images">
                    <div className="titleAndAuthor mobile-only">
                        <div className="nameInfo">
                            <p className='nameInfo__name'>{artworkName}</p>
                            <p>By <a className='nameInfo__authorLink' href={authorLink}>{authorName}</a></p>
                        </div>
                        <div className="buttonsContainer">
                            <div onClick={handleActivateLike} className='likeContainer'>
                                <svg className={classNames(isLike && 'active')}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.66l-1.06-1.08a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.85a5.5 5.5 0 0 0 0-7.8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="images__image-container">
                        <div className='images__image'>
                            <img src="https://ik.imagekit.io/theartling/prod/tr:cm-pad_resize,w-1094,h-1094/products/Product/aa06e0846fdd4928b2ffeaee51683a3f.jpg" alt="Artwork" />
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="titleAndAuthor not-mobile">
                        <div className="nameInfo">
                            <p className='nameInfo__name'>{artworkName}</p>
                            <p>By <a className='nameInfo__authorLink' href={authorLink}>{authorName}</a></p>
                        </div>
                        <div className="buttonsContainer">
                            <div onClick={handleActivateLike} className='likeContainer'>
                                <svg className={classNames(isLike && 'active')}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.66l-1.06-1.08a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.85a5.5 5.5 0 0 0 0-7.8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='price'>
                        <p>US$ {price}</p>
                        <button className='button'>Add to cart</button>
                    </div>
                    <section className='section'>
                        <hr className='artwork-container__space' />
                        <div className='section__title'>Overview</div>
                        <div className='description'>
                            <div className='description__list'>
                                {Object.keys(itemInfo).map((key) => {
                                    const value = itemInfo[key];

                                    return (<span><b>{key}: </b> {value}</span>);
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='support-information'>
                <hr className='artwork-container__space' />
                <div className='support-information__title'>
                    Buy With Confidence
                </div>
                <ul className='support-information__list'>
                    {supportInformation.map(({ icon, text }) => {
                        return (
                            <li className='support-information__list-item'>
                                <img src={icon} alt="icon" />
                                <span>{text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <hr className='artwork-container__space' />
            <div className='section'>
                <div className='section__title'>
                    Artist Statement
                </div>
                <div className='artist-statement'>
                    <TextComponent text={artistStatement} />
                </div>
            </div>
            <hr className='artwork-container__space' />
            <div className='section'>
                <div className='section__title'>
                    Releated Tags
                </div>
                <ul className='tags-list'>
                    {tags.map((text) => {
                        return (<li className='tags-list__item'>
                            <a
                                className='tags-list__item-link'
                                href="#/"
                            >
                                {text}
                            </a>
                        </li>);
                    })}
                </ul>
            </div>
            <hr className='artwork-container__space' />
            <div className='section'>
                <div className='section__title other-works-title'>Other works of the author</div>
                <ProductList items={visibleProductList} />
                {items.length > itemsPerPage &&
                    <div className='pagination-container'>
                        <Paginate
                            totalItems={items.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                            maxDisplayedPages={4}
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default IndividualArtwork;