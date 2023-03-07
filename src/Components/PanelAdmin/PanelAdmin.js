import React from 'react';
import { NavLink } from 'react-router-dom'

// Components
import Concepts from '../ConceptsMenu/Concepts';

const PanelAdmin = ({ menuOpen }) => {
    return (
        <section className={menuOpen}>
            <div style={{padding: '2rem'}}>
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
                    <NavLink to='/' className={(link) => link.isActive ? 'panel__item--active' : ''}>
                        <li className='panel__item mt-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path fill="currentColor" d="M3 10.5651c0-.5744 0-.8616.074-1.126a1.9998 1.9998 0 0 1 .318-.6502c.1633-.2208.39-.3971.8434-.7498l6.7823-5.2751c.3513-.2732.527-.4099.721-.4624a.9996.9996 0 0 1 .5226 0c.194.0525.3697.1891.721.4624l6.7823 5.2751c.4534.3527.6801.529.8434.7498.1446.1955.2524.4159.318.6502.074.2644.074.5516.074 1.126V17.8c0 1.1201 0 1.6801-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4801 3 18.9201 3 17.8v-7.2349Z" opacity="0.12">
                                </path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.126 14c.444 1.7252 2.0102 3 3.874 3s3.4299-1.2748 3.874-3M11.0177 2.764 4.2354 8.0391c-.4534.3527-.68.529-.8434.7498a1.9998 1.9998 0 0 0-.318.6502C3 9.7035 3 9.9907 3 10.565V17.8c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4801 21 18.9201 21 17.8v-7.2349c0-.5744 0-.8616-.074-1.126a2.0016 2.0016 0 0 0-.318-.6502c-.1633-.2208-.39-.3971-.8434-.7498L12.9823 2.764c-.3513-.2732-.527-.4099-.721-.4624a.9996.9996 0 0 0-.5226 0c-.194.0525-.3697.1891-.721.4624Z">
                                </path>
                            </svg>
                            <p className='panel__item-txt'>Overview</p>
                        </li>
                    </NavLink>
                    <NavLink to='/analytics' className={(link) => link.isActive ? 'panel__item--active' : ''}>
                        <li className='panel__item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path fill="currentColor" d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8Z" opacity="0.12">
                                </path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15v2m4-6v6m4-10v10m-8.2 4h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z">
                                </path>
                            </svg>
                            <p className='panel__item-txt'>Analytics</p>
                        </li>
                    </NavLink>
                    <NavLink to='/ecommerce' className={(link) => link.isActive ? 'panel__item--active' : ''}>
                        <li className='panel__item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path fill="currentColor" d="M7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V9l-6.4485 4.6061c-.196.1399-.2939.2099-.3988.231a.4996.4996 0 0 1-.2765-.0229c-.1-.038-.1852-.1232-.3554-.2934l-3.0416-3.0416c-.1702-.1702-.2554-.2554-.3554-.2934a.4996.4996 0 0 0-.2765-.0229c-.1049.0211-.2028.0911-.3988.231L3 15v1.2c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z" opacity="0.12">
                                </path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 9-6.4485 4.6061c-.196.1399-.2939.2099-.3988.231a.4996.4996 0 0 1-.2765-.0229c-.1-.038-.1852-.1232-.3554-.2934l-3.0416-3.0416c-.1702-.1702-.2554-.2554-.3554-.2934a.4996.4996 0 0 0-.2765-.0229c-.1049.0211-.2028.0911-.3988.231L3 15m4.8 6h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z">
                                </path>
                            </svg>
                            <p className='panel__item-txt'>E-Commerce</p>
                        </li>
                    </NavLink>
                    <NavLink to='/customers' className={(link) => link.isActive ? 'panel__item--active' : ''}>
                        <li className='panel__item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.4998 12c2.4853 0 4.5-2.0147 4.5-4.5S11.9851 3 9.4998 3s-4.5 2.0147-4.5 4.5 2.0148 4.5 4.5 4.5Zm0 3c-2.8306 0-5.3464 1.5446-6.9407 3.9383-.3493.5245-.524.7867-.5038 1.1216.0156.2608.1866.5801.395.7377C2.7179 21 3.086 21 3.8222 21h11.3553c.7362 0 1.1043 0 1.3719-.2024.2084-.1576.3793-.4769.395-.7377.0201-.3349-.1545-.5971-.5038-1.1216C14.8463 16.5446 12.3305 15 9.4998 15Z" opacity="0.12"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.9998 15.8369c1.4559.7314 2.7042 1.9051 3.6153 3.3727.1804.2907.2706.436.3018.6372.0634.409-.2163.9117-.5971 1.0736-.1875.0796-.3983.0796-.82.0796m-4.5-9.4678c1.4818-.7363 2.5-2.2653 2.5-4.0322 0-1.7669-1.0182-3.2959-2.5-4.0322m-2 4.0322c0 2.4853-2.0147 4.5-4.5 4.5s-4.5-2.0147-4.5-4.5S7.0146 3 9.4998 3c2.4853 0 4.5 2.0147 4.5 4.5ZM2.5591 18.9383C4.1534 16.5446 6.6692 15 9.4998 15c2.8307 0 5.3465 1.5446 6.9408 3.9383.3493.5245.5239.7867.5038 1.1216-.0157.2608-.1866.5801-.395.7377C16.2818 21 15.9137 21 15.1775 21H3.8222c-.7362 0-1.1043 0-1.372-.2024-.2083-.1576-.3793-.4769-.395-.7377-.02-.3349.1546-.5971.5039-1.1216Z"></path></svg>
                            <p className='panel__item-txt'>Customers</p>
                        </li>
                    </NavLink>
                    <NavLink to='/products' className={(link) => link.isActive ? 'panel__item--active' : ''}>
                        <li className='panel__item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16.283 21c1.8107 0 2.7161 0 3.3844-.3618a2.9996 2.9996 0 0 0 1.3195-1.434c.305-.696.2298-1.5983.0795-3.4028l-.7-8.4c-.1294-1.5526-.1941-2.329-.5379-2.9165a3.0005 3.0005 0 0 0-1.2944-1.191C17.92 3 17.141 3 15.583 3H8.4162c-1.558 0-2.337 0-2.9511.2938a3 3 0 0 0-1.2944 1.191c-.3438.5876-.4085 1.364-.5379 2.9166l-.7 8.4c-.1504 1.8045-.2256 2.7068.0795 3.4028a2.9998 2.9998 0 0 0 1.3195 1.434C5 21 5.9054 21 7.7162 21h8.5668Z" opacity="0.12"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.9996 8a3.9996 3.9996 0 0 1-1.1716 2.8284 3.9996 3.9996 0 0 1-5.6568 0A3.9999 3.9999 0 0 1 7.9996 8m-4.3668-.5986-.7 8.4c-.1504 1.8045-.2256 2.7068.0795 3.4028a2.9998 2.9998 0 0 0 1.3195 1.434C5 21 5.9054 21 7.7162 21h8.5668c1.8107 0 2.7161 0 3.3844-.3618a2.9996 2.9996 0 0 0 1.3195-1.434c.305-.696.2298-1.5983.0795-3.4028l-.7-8.4c-.1294-1.5526-.1941-2.329-.5379-2.9165a3.0005 3.0005 0 0 0-1.2944-1.191C17.92 3 17.141 3 15.583 3H8.4162c-1.558 0-2.337 0-2.9511.2938a3 3 0 0 0-1.2944 1.191c-.3438.5876-.4085 1.364-.5379 2.9166Z"></path></svg>
                            <p className='panel__item-txt'>Products</p>
                        </li>
                    </NavLink>
                </ul>
                <Concepts />
            </div>
        </section>
    );
};

export default PanelAdmin;