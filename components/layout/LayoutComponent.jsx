import React from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const LayoutComponent = (props) => {/*Recibe al hijo */
    const { children } = props;
return (
        <div>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </div>
  )
}

export default LayoutComponent