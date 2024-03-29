import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem =({title,imageUrl,size ,history,linkUrl, match})=>(
    <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size}  menu-item`} 
    onClick ={()=> history.push(`${match.url}${linkUrl}`)}>
    <div className='content'>
        <h1 className='tittle'>{title}</h1>
        <span className='subtitle'>Order now</span>
    </div>
</div>
)


export default withRouter(MenuItem);