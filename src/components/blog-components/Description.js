import React from 'react';
import "@components/css/main.css"
import Tag from './Tag';

const Description = ( {description, tags} ) => {

    return (
        <div className='description-container'>
            {
                description &&
                    <div className='description'>
                        { description }
                    </div>
            }
            {
                (tags !== undefined && tags.length !== 0) && 
                    <div className='tag-container'>
                        {
                            tags.map(tag => 
                                <Tag 
                                    text={tag.trim().toLowerCase()} 
                                    href={"/tags/"+tag.trim().toLowerCase().replaceAll(' ', '-')} />
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default Description;