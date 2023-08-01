import React from 'react';
import './TextComponent.scss';

type Props = {
    text: String;
};

const TextComponent = ({ text }: Props) => {
    const paragraphs = text.split('\n');

    return (
        <p>
            {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
                <span>{paragraph}</span>
                <br />
            </React.Fragment>
            ))}
        </p>
    );
};

export default TextComponent;
