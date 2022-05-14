import React from 'react';
import '@components/css/description.css';

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
                                <div className='tag'>
                                    {tag}
                                </div>
                            )
                        }
                        
                    </div>
            }
        </div>
    );
};

export default Description;