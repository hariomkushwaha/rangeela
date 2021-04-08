import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'; 

class Directory extends React.Component {
    constructor(){
        super()

        this.state ={
         sections : [
                {
                  title: 'Saree',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PC1OM5LTOD9352x8sr4GXDHnn_sxNdksvQ&usqp=CAU',
                  id: 1,
                  linkUrl: 'shop/saree'
                },
                {
                  title: 'Top',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglmiDX40sI60aTZMocph0rSwcwXpcb4c1eg&usqp=CAU',
                  id: 2,
                  linkUrl: 'shop/top'
                },
                {
                  title: 'Jeans',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJfUYl6TBbEXXH4Xy5kOPwNXQAl2QnN9UXQ&usqp=CAU',
                  id: 3,
                  linkUrl: 'shop/jeans'
                },
                {
                  title: 'Ethnic',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorqZX6Z1ajAPNCkU7z-KPj6v8WS-jtrQNTBgDO81nygASG-OU9CuNOEiN4tg_5PQA5WI&usqp=CAU',
                  size: 'large',
                  id: 4,

                  linkUrl: 'shop/ethnic'
                },
                {
                  title: 'Shoes',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0nNIjmtq9dtqkU7TFuydTZOC2Au4FmtZew&usqp=CAU',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/shoes'
                }
              ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }

            </div>
        )
    }
}

export default Directory;