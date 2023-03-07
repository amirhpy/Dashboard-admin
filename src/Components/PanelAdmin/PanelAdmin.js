import React from 'react';

const PanelAdmin = () => {
    return (
        <section className='panel-admin'>
            <div className='panel-devias'>
                <div className='panel-logo-parent'>
                    <svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.16" d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z" fill="#6366F1">
                        </path>
                        <path d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z" fill="#6366F1">
                        </path>
                    </svg>
                </div>
                <div className='panel-devias-info'>
                    <h3 className='panel__devias-name'>Devias</h3>
                    <p className='panel__devias-desc'>Production</p>
                </div>
            </div>
            <ul className='panel-menu'>
                <li className='panel__item'>Overview</li>
                <li className='panel__item'>Analytics</li>
                <li className='panel__item'>E-Commerce</li>
                <li className='panel__item'>Crypto</li>
                <li className='panel__item'>Account</li>
            </ul>
        </section>
    );
};

export default PanelAdmin;