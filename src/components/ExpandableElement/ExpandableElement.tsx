import React, { useState, useRef, useLayoutEffect } from 'react';
import './ExpandableElement.scss';
import classNames from 'classnames';

type Props = {
    content: string | JSX.Element
};

const maxHeight = 140;

const ExpandableElement = ({ content }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<null | HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    useLayoutEffect(() => {
        const { current } = contentRef;
        const { clientHeight } = current ? current : { clientHeight: 0 };

        if (clientHeight > maxHeight) {
            setContentHeight(clientHeight);
        }
    }, []);

    return (
        <div className={`expandable-element ${expanded ? 'expanded' : ''}`}>
            <div className="content" ref={contentRef}>
                {content}
            </div>
            {contentHeight > maxHeight && (
                <div className={classNames(`buttonContainer`, expanded && 'buttonContainer--expanded')}>
                    <button onClick={toggleExpanded} className="toggle-button">
                    {expanded ? 'Show less' : 'Show more'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExpandableElement;