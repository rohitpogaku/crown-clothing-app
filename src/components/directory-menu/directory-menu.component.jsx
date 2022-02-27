import React from "react";
import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[{
                title: 'hats',
                imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg',
                id:1
                },
                {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/3987290/pexels-photo-3987290.jpeg',
                id: 2    
                },
                {
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/6770027/pexels-photo-6770027.jpeg',
                id: 3
                },
                {
                title: 'women',
                imageUrl: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg',
                id: 4,
                size: 'large'
                },
                {
                title: 'men',
                imageUrl: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
                id:5,
                size: 'large'
                }]
        };
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} /> 
                    ))
                }
            </div>
        );
    }
}



export default DirectoryMenu;