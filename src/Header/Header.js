import React, { Component } from "react";
import Quotation from '../Quotation/Quotation';
import './header.css';


export default class Header extends Component {
    render() {

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*************************************************************************/

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
}


/******************************************************************** */

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {

    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show3')) {
        openDropdown.classList.remove('show3');
      }
    }
  }
}
        return (
            <header>
                    <div className="container-fluid">
                    <div className="row quotation">
                        <div className="marquee">
                            <Quotation data_card_info={this.props.data_quotation}/>
                        </div>
                    </div>
                    </div>
                    <div className="container p-1">
                    <div className="row m-0">
                        <div className="col-xl-6 col-lg-6 col-md-3 col-sm-3 col-3 p-sm-0">
                        <nav className="three">
                            <ul className="topmenu">
                                <img className="menu-left-logo" src="img/header-logo.svg" alt="logo-header"/>
                                <img className="menu-left-logo-665" src="img/header-logo-665.svg" alt="logo-header"/>
                                <div className="vertical-line"></div>
                                <li><a className="what-we-do" href="http://atomars.zzz.com.ua/">
                                <svg  width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="5" height="5" fill="white"/>
                                    <rect x="7" width="5" height="5" fill="white"/>
                                    <rect x="14" width="5" height="5" fill="white"/>
                                    <rect y="7" width="5" height="5" fill="white"/>
                                    <rect x="7" y="7" width="5" height="5" fill="white"/>
                                    <path d="M14 7H19V12H14V7Z" fill="white"/>
                                    <rect y="14" width="5" height="5" fill="white"/>
                                    <rect x="7" y="14" width="5" height="5" fill="white"/>
                                    <rect x="14" y="14" width="5" height="5" fill="white"/>
                                </svg></a>
                                    <ul class="submenu">
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Project Voting</a>
                                            <p className="submenu_text">Community project voting competition</p>    
                                        </li>
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Launchpad</a>
                                            <p className="submenu_text">Token Launch Platform</p>
                                        </li>
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Token listining</a>
                                            <p className="submenu_text">Request to list the project token or coin</p>
                                        </li>
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Contact us</a>
                                            <p className="submenu_text">Send your questions or feedback to the support team</p>
                                        </li>
                                    </ul>
                                </li>
                                <li><a className="hr-wrapper-trade" href=" ">Trade<img className="trade-arrow_menu_down" src="img/arrow-menu-down.svg" alt="arrow-menu-down"/> 
                                <img className="trade-arrow_menu_up" src="img/arrow-menu-up.svg" alt="arrow-menu-up"/></a>
                                    <ul class="submenu">
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Quick Exchange</a>
                                            <p className="submenu_text">The easiest way to trade</p>    
                                        </li>
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Advanced</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="https://atomars.zzz.com.ua">Markets</a></li>
                                <li><a className="hr-wrapper-trade" href=" ">Finance<img className="trade-arrow_menu_down" src="img/arrow-menu-down.svg" alt="arrow-menu-down"/> 
                                <img className="trade-arrow_menu_up" src="img/arrow-menu-up.svg" alt="arrow-menu-up"/></a>
                                    <ul class="submenu">
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Free Coins</a>
                                            <p className="submenu_text">Collect daily free coins</p>    
                                        </li>
                                        <li>
                                            <img src="img/rhombus-menu.svg" alt="rhombus-menu" />
                                            <a className="submenu_name" href="https://atomars.zzz.com.ua">Staking</a>
                                            <p className="submenu_text">Get rewards for staking coins</p>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="https://atomars.zzz.com.ua">News</a>
                                </li>
                            </ul>
                        </nav>
                        </div>
                        <div className="menu-right col-xl-6 col-lg-6 col-md-8 col-sm-8 col-8 pl-5 pr-0 ml-xl-0 ml-lg-0 ml-md-0 ml-sm-5">
                               <ul className="menu-right_items float-right">
                                    <button className="menu-right_button">Log In</button>
                                    <button className="menu-right_button">Register</button>
                                    <li className="menu-right-item"><a href="https://atomars.zzz.com.ua"><svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.0381 7.3448V8.86398H7.44187C7.98935 8.86398 8.26282 8.60765 8.26282 8.09528C8.26282 7.59479 7.99216 7.34482 7.45033 7.34482H7.0381V7.3448ZM12.4684 5.37405V1.13138C12.4684 0.506321 11.9979 0 11.4176 0H3.01096C2.43068 0 1.96015 0.506304 1.96015 1.13138V5.37405H0V12.4451H1.96015V16.9706C1.96015 17.5954 2.43066 18.102 3.01096 18.102H11.4176C11.9979 18.102 12.4684 17.5954 12.4684 16.9706V12.4451H14.4094V5.37405H12.4684ZM11.4176 1.41422V5.37405H3.01112L3.01101 1.41422H11.4176H11.4176ZM9.24232 8.05579C9.24232 8.53777 9.07812 8.92422 8.74975 9.2148C8.42137 9.50566 8.01089 9.6449 7.51785 9.63273H7.03812V11.2734H6.10685V6.56698H7.61122C8.69843 6.56698 9.24229 7.06335 9.24229 8.05579H9.24232ZM2.50057 10.1948L2.17888 11.2735H1.16848L2.76854 6.56703H3.8636L5.43263 11.2735H4.41671L4.08938 10.1948H2.5006H2.50057ZM7.21436 17.5363C6.92422 17.5363 6.68869 17.283 6.68869 16.9706C6.68869 16.6582 6.92422 16.4049 7.21436 16.4049C7.5045 16.4049 7.73977 16.6582 7.73977 16.9706C7.73977 17.283 7.5045 17.5363 7.21436 17.5363ZM11.4176 15.8393H3.01098L3.01109 12.4452H11.4175V15.8393H11.4176ZM12.4268 9.2148C12.0987 9.50566 11.6879 9.6449 11.1951 9.63273H10.7154V11.2734H9.78416V6.56698H11.288C12.3758 6.56698 12.9192 7.06333 12.9192 8.05579C12.9191 8.53777 12.7552 8.92422 12.4268 9.2148H12.4268ZM11.1274 7.3448H10.7154V8.86398H11.1187C11.6661 8.86398 11.9401 8.60765 11.9401 8.09528C11.9402 7.59479 11.6692 7.3448 11.1274 7.3448ZM3.30487 7.37825H3.27921C3.26792 7.51579 3.24279 7.64867 3.20327 7.77628L2.70366 9.42005H3.86929L3.37263 7.78846C3.34054 7.68513 3.31798 7.54839 3.30488 7.37827L3.30487 7.37825Z" fill="white"/>
                                        </svg></a></li>
                                    <li className="menu-right-item"><a className="menu-right_chat" href="https://atomars.zzz.com.ua">
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.6983 9.51296C9.06842 9.51296 9.43492 9.43914 9.77686 9.29572C10.1188 9.15229 10.4295 8.94208 10.6912 8.67707C10.9529 8.41206 11.1605 8.09744 11.3022 7.75119C11.4438 7.40494 11.5167 7.03382 11.5167 6.65904C11.5167 6.28426 11.4438 5.91315 11.3022 5.5669C11.1605 5.22064 10.9529 4.90603 10.6912 4.64102C10.4295 4.37601 10.1188 4.16579 9.77686 4.02237C9.43492 3.87894 9.06842 3.80513 8.6983 3.80513C7.95082 3.80513 7.23394 4.10581 6.70539 4.64102C6.17684 5.17623 5.8799 5.90214 5.8799 6.65904C5.8799 7.41595 6.17684 8.14185 6.70539 8.67707C7.23394 9.21228 7.95082 9.51296 8.6983 9.51296ZM8.6983 10.4643C7.70165 10.4643 6.74582 10.0634 6.04109 9.34974C5.33635 8.63612 4.94043 7.66825 4.94043 6.65904C4.94043 5.64983 5.33635 4.68196 6.04109 3.96834C6.74582 3.25473 7.70165 2.85382 8.6983 2.85382C9.69495 2.85382 10.6508 3.25473 11.3555 3.96834C12.0603 4.68196 12.4562 5.64983 12.4562 6.65904C12.4562 7.66825 12.0603 8.63612 11.3555 9.34974C10.6508 10.0634 9.69495 10.4643 8.6983 10.4643ZM8.20226 11.4156C7.11423 11.4155 6.04767 11.7222 5.1221 12.3014C4.19653 12.8806 3.44852 13.7093 2.96191 14.6947L2.44332 15.7469C2.37177 15.8919 2.33799 16.053 2.34519 16.2149C2.35239 16.3768 2.40034 16.5342 2.48448 16.6721C2.56861 16.81 2.68615 16.9238 2.82594 17.0028C2.96573 17.0818 3.12313 17.1233 3.28321 17.1234H14.1134C14.2735 17.1233 14.4309 17.0818 14.5707 17.0028C14.7105 16.9238 14.828 16.81 14.9121 16.6721C14.9963 16.5342 15.0442 16.3768 15.0514 16.2149C15.0586 16.053 15.0248 15.8919 14.9533 15.7469L14.4347 14.6947C13.9481 13.7093 13.2001 12.8806 12.2745 12.3014C11.3489 11.7222 10.2824 11.4155 9.19434 11.4156H8.20226ZM8.20226 10.4643H9.19434C10.4568 10.4643 11.6943 10.8203 12.7682 11.4924C13.8421 12.1645 14.71 13.1261 15.2746 14.2695L15.7941 15.3216C15.9373 15.6118 16.0048 15.9342 15.9904 16.2582C15.9759 16.5822 15.8798 16.8971 15.7113 17.1729C15.5428 17.4488 15.3075 17.6764 15.0276 17.8343C14.7478 17.9921 14.4328 18.0749 14.1125 18.0747H3.28415C2.96391 18.0747 2.649 17.9918 2.36929 17.8339C2.08959 17.676 1.85438 17.4483 1.68599 17.1725C1.51761 16.8967 1.42164 16.5819 1.40719 16.2579C1.39274 15.934 1.46029 15.6117 1.60344 15.3216L2.12202 14.2695C2.68661 13.1261 3.55447 12.1645 4.62838 11.4924C5.70229 10.8203 6.9398 10.4643 8.20226 10.4643Z" fill="white"/>
                                        <path d="M3.06156 8.56091V10.0459L1.80924 9.68915C1.35102 9.5254 0.954229 9.22177 0.673567 8.8201C0.392905 8.41843 0.242188 7.9385 0.242188 7.44645C0.242187 6.95441 0.392905 6.47448 0.673567 6.07281C0.954229 5.67114 1.35102 5.3675 1.80924 5.20375L2.3222 5.02015C2.68267 3.58472 3.50527 2.31185 4.65999 1.40271C5.81471 0.493571 7.23569 0 8.69839 0C10.1611 0 11.5821 0.493571 12.7368 1.40271C13.8915 2.31185 14.7141 3.58472 15.0746 5.02015L15.5875 5.20375C16.0458 5.3675 16.4426 5.67114 16.7232 6.07281C17.0039 6.47448 17.1546 6.95441 17.1546 7.44645C17.1546 7.9385 17.0039 8.41843 16.7232 8.8201C16.4426 9.22177 16.0458 9.5254 15.5875 9.68915L14.3352 10.0459V6.6583C14.3352 5.14449 13.7413 3.69268 12.6842 2.62226C11.6271 1.55183 10.1934 0.950473 8.69839 0.950473C7.20341 0.950473 5.76966 1.55183 4.71255 2.62226C3.65544 3.69268 3.06156 5.14449 3.06156 6.6583V8.56091ZM15.2747 6.10083V8.79302C15.55 8.69497 15.7884 8.51282 15.957 8.2717C16.1257 8.03058 16.2163 7.7424 16.2163 7.44693C16.2163 7.15146 16.1257 6.86327 15.957 6.62216C15.7884 6.38104 15.55 6.19888 15.2747 6.10083ZM2.12209 6.10083C1.84683 6.19888 1.60841 6.38104 1.43976 6.62216C1.2711 6.86327 1.18052 7.15146 1.18052 7.44693C1.18052 7.7424 1.2711 8.03058 1.43976 8.2717C1.60841 8.51282 1.84683 8.69497 2.12209 8.79302V6.10083Z" fill="white"/>
                                    </svg></a></li>
                                    <li className="menu-right-item"><a href="https://atomars.zzz.com.ua"><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.16704 12.734H2.52157V1.54281H18.2082V5.98704C18.2082 6.19101 18.2908 6.38664 18.4378 6.53087C18.5847 6.67511 18.784 6.75614 18.9919 6.75614C19.2001 6.75614 19.3999 6.67526 19.5476 6.53116C19.6953 6.38705 19.7789 6.19144 19.7802 5.98704V0H0.935547V14.2768H7.16704C7.3753 14.2756 7.57461 14.1935 7.72144 14.0485C7.86826 13.9036 7.95067 13.7075 7.95067 13.5031C7.95067 13.2991 7.86811 13.1035 7.72115 12.9592C7.57419 12.815 7.37487 12.734 7.16704 12.734Z" fill="white"/>
                                        <path d="M8.18492 16.0136H5.22405C4.79127 16.0136 4.44043 16.358 4.44043 16.7827V16.7873C4.44043 17.2121 4.79127 17.5564 5.22405 17.5564H8.18492C8.61771 17.5564 8.96855 17.2121 8.96855 16.7873V16.7827C8.96855 16.358 8.61771 16.0136 8.18492 16.0136Z" fill="white"/>
                                        <path d="M14.007 10.4587C13.6437 10.6558 13.3483 10.9543 13.158 11.3163C12.9676 11.6783 12.891 12.0875 12.9378 12.4923C12.9846 12.897 13.1527 13.2791 13.4208 13.59C13.6889 13.901 14.045 14.1269 14.444 14.2391C14.8429 14.3514 15.2669 14.3449 15.6621 14.2206C16.0574 14.0963 16.4061 13.8597 16.6643 13.5407C16.9225 13.2217 17.0784 12.8348 17.1124 12.4288C17.1464 12.0228 17.0569 11.6161 16.8552 11.26C16.7221 11.0236 16.5427 10.8153 16.3274 10.6471C16.112 10.4788 15.865 10.3539 15.6005 10.2795C15.3359 10.205 15.059 10.1826 14.7855 10.2133C14.5121 10.2441 14.2475 10.3274 14.007 10.4587Z" fill="white"/>
                                        <path d="M19.663 13.061C19.7003 12.8648 19.7238 12.6663 19.7334 12.4669V12.3978C19.7427 12.1346 19.7286 11.8711 19.6911 11.6103L20.578 10.7675L21.0003 10.3668V10.3392C21.0003 10.3116 20.9722 10.2517 20.9534 10.2056C20.9346 10.1596 20.9158 10.0997 20.8924 10.0445C20.8361 9.89708 20.7751 9.75431 20.7094 9.61615C20.6859 9.5747 20.6671 9.53326 20.6484 9.49181L20.5264 9.26614C20.4607 9.15561 20.395 9.04508 20.3199 8.93455C20.2448 8.82402 20.1463 8.67665 20.0524 8.5523L19.9445 8.41414L19.8507 8.30361V8.28058L19.2829 8.42335L18.0816 8.7181C17.9333 8.58995 17.7765 8.47149 17.6124 8.36348L17.4529 8.2898L17.3355 8.22532C17.1591 8.12791 16.9756 8.04325 16.7865 7.97202L16.4862 6.78843L16.3454 6.23118H16.3173C16.2704 6.23118 16.2234 6.20815 16.1765 6.20355L15.9982 6.17131C15.8434 6.14828 15.6885 6.12986 15.529 6.11604C15.3117 6.10455 15.094 6.10455 14.8767 6.11604H14.5529L14.2479 6.14828L14.0743 6.17131L13.9289 6.19434H13.9007L13.7412 6.74698L13.3986 7.91676C13.1474 8.00582 12.9041 8.11519 12.6713 8.24374L12.6103 8.27598C12.4364 8.38002 12.2688 8.49381 12.1082 8.61678L10.9304 8.2898L10.3673 8.12861V8.15163L10.2688 8.25756L10.1562 8.39111C10.0952 8.46941 10.0295 8.5477 9.97316 8.62599C9.91685 8.70428 9.85116 8.79178 9.79485 8.87929C9.73854 8.96679 9.701 9.01745 9.65877 9.09114C9.61654 9.16482 9.57431 9.23851 9.53208 9.30759L9.38661 9.57931C9.34438 9.67142 9.30215 9.75892 9.26461 9.85103L9.19422 10.0122C9.19422 10.0583 9.16138 10.1043 9.14261 10.1458V10.1734L9.54615 10.5879L10.4096 11.4629C10.3634 11.72 10.3383 11.9802 10.3345 12.2412V12.3195C10.3292 12.5117 10.337 12.704 10.3579 12.8952L9.46638 13.738L9.04407 14.1341V14.1617L9.09099 14.2998C9.09099 14.3551 9.13322 14.4104 9.15199 14.461C9.36885 15.0006 9.66443 15.5063 10.0295 15.9624L10.1327 16.1006C10.1702 16.142 10.2078 16.1881 10.25 16.2295L10.8131 16.0914L12.0191 15.8012C12.193 15.9435 12.3764 16.0742 12.5681 16.1927L12.6197 16.2249L12.6713 16.2525C12.8675 16.363 13.0714 16.46 13.2813 16.5427L13.5816 17.7263L13.7224 18.2835H13.7505L13.896 18.3112C13.9531 18.3248 14.0111 18.3341 14.0696 18.3388C14.1682 18.3388 14.2714 18.371 14.3699 18.3802H15.3319C15.4914 18.3802 15.651 18.3572 15.8011 18.3388H15.9794L16.1202 18.3158H16.1296L16.2938 17.7631L16.6317 16.5933C16.8215 16.5258 17.0065 16.4458 17.1854 16.3539C17.4456 16.2217 17.6937 16.0676 17.9268 15.8933L19.114 16.2249L19.6771 16.3861V16.3631L19.7709 16.2571L19.8835 16.1236C19.9821 16.0038 20.0759 15.8795 20.1698 15.7506L20.2448 15.6354L20.3856 15.4236C20.5505 15.1831 20.6964 14.9306 20.822 14.6683C20.822 14.6176 20.8689 14.5624 20.8877 14.5117L20.9393 14.3781V14.3505L20.5311 13.936L19.663 13.061ZM17.7203 13.8485C17.4001 14.3714 16.9291 14.7893 16.3669 15.0496C15.8047 15.3098 15.1765 15.4006 14.5618 15.3106C13.947 15.2206 13.3732 14.9537 12.9129 14.5437C12.4526 14.1337 12.1265 13.599 11.9758 13.0071C11.825 12.4153 11.8564 11.7929 12.0659 11.2185C12.2755 10.6442 12.6538 10.1437 13.1531 9.7803C13.6523 9.41691 14.2502 9.20693 14.871 9.17689C15.4918 9.14685 16.1078 9.29811 16.6411 9.61155C17.3562 10.0333 17.8716 10.7164 18.0739 11.5109C18.2763 12.3053 18.1491 13.1461 17.7203 13.8485Z" fill="white"/>
                                    </svg></a></li>
                                    <li className="menu-right-item"><a href="https://atomars.zzz.com.ua"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 15.7617C10.5393 15.7617 10.9766 15.3245 10.9766 14.7852C10.9766 14.2458 10.5393 13.8086 10 13.8086C9.46066 13.8086 9.02344 14.2458 9.02344 14.7852C9.02344 15.3245 9.46066 15.7617 10 15.7617Z" fill="white"/>
                                        <path d="M10 0C4.47328 0 0 4.47254 0 10C0 15.5267 4.47254 20 10 20C15.5267 20 20 15.5275 20 10C20 4.47328 15.5275 0 10 0ZM10 18.4375C5.33684 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33684 5.33621 1.5625 10 1.5625C14.6632 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6632 14.6638 18.4375 10 18.4375Z" fill="white"/>
                                        <path d="M10 5.01953C8.27688 5.01953 6.875 6.42141 6.875 8.14453C6.875 8.57602 7.22477 8.92578 7.65625 8.92578C8.08773 8.92578 8.4375 8.57602 8.4375 8.14453C8.4375 7.28297 9.13844 6.58203 10 6.58203C10.8616 6.58203 11.5625 7.28297 11.5625 8.14453C11.5625 9.00609 10.8616 9.70703 10 9.70703C9.56852 9.70703 9.21875 10.0568 9.21875 10.4883V12.4414C9.21875 12.8729 9.56852 13.2227 10 13.2227C10.4315 13.2227 10.7812 12.8729 10.7812 12.4414V11.1707C12.1276 10.8229 13.125 9.59801 13.125 8.14453C13.125 6.42141 11.7231 5.01953 10 5.01953Z" fill="white"/>
                                    </svg></a></li>
                                    <li className="menu-right-item"><a href="https://atomars.zzz.com.ua"><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.6562 0H2.34375C1.05141 0 0 1.05141 0 2.34375V4.27715L8.60121 10.6748C9.01953 10.986 9.50977 11.1416 10 11.1416C10.4902 11.1416 10.9805 10.986 11.3988 10.6748L20 4.27715V2.34375C20 1.05141 18.9486 0 17.6562 0ZM18.4375 3.49203L10.4663 9.42109C10.1874 9.62855 9.81262 9.62855 9.53375 9.42109L1.5625 3.49203V2.34375C1.5625 1.91297 1.91297 1.5625 2.34375 1.5625H17.6562C18.087 1.5625 18.4375 1.91297 18.4375 2.34375V3.49203ZM18.4375 7.38668L20 6.22449V13.9062C20 15.1986 18.9486 16.25 17.6562 16.25H2.34375C1.05141 16.25 0 15.1986 0 13.9062V6.22449L1.5625 7.38668V13.9062C1.5625 14.337 1.91297 14.6875 2.34375 14.6875H17.6562C18.087 14.6875 18.4375 14.337 18.4375 13.9062V7.38668Z" fill="white"/>
                                    </svg></a></li>
                                    <li className="menu-right-item"><select className="language" size="1">
                                        <option className="language_option" value="1">EN</option>
                                        <option className="language_option" value="2">RU</option>
                                        </select>
                                    </li>
                                    <li className="menu-right-item"><a href="https://atomars.zzz.com.ua"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.902 6.608C7.122 6.608 6.488 7.232 6.488 8C6.488 8.768 7.122 9.392 7.902 9.392C8.682 9.392 9.317 8.768 9.317 8C9.317 7.232 8.683 6.608 7.902 6.608ZM14 8.528V7.568H12.195C12.109 6.78033 11.8049 6.03228 11.317 5.408L12.634 4.112L11.951 3.44L10.683 4.688C10.052 4.18304 9.29104 3.86687 8.488 3.776V2H7.512V3.776C6.682 3.872 5.952 4.208 5.317 4.688L4.05 3.44L3.367 4.112L4.684 5.408C4.16852 6.01597 3.86088 6.7728 3.806 7.568H2V8.528H3.805C3.902 9.344 4.195 10.064 4.683 10.64L3.366 11.936L4.049 12.608L5.317 11.36C5.902 11.84 6.683 12.176 7.512 12.224V14H8.488V12.224C9.2846 12.1409 10.0435 11.8421 10.683 11.36L11.951 12.608L12.634 11.936L11.317 10.64C11.805 10.064 12.147 9.296 12.195 8.528H14ZM7.902 11.264C6.098 11.264 4.585 9.824 4.585 8C4.585 6.176 6.049 4.736 7.902 4.736C9.756 4.736 11.219 6.176 11.219 8C11.219 9.824 9.756 11.264 7.902 11.264Z" fill="white" stroke="white" stroke-width="0.3"/>
                                    </svg></a></li>
                                    <li class=" menu-right-item menu-right_hamburger-menu"><img onClick={myFunction} class="dropbtn"  src="img/gamburger-menu.svg" alt="img" /><img onClick={myFunction} class="dropbtn-small"  src="img/gamburger-menu-small.svg" alt="img" />
                                    <div id="myDropdown" className="dropdown-content">
                                        <a onClick={myFunction2} className="dropdown_submenu-name dropbtn2" href="#"><img className="menu-mobile-trade-img" src="img/menu-mobile-trade.svg" alt="img"/>Trade<img className="dropdown_trade-arrow_menu_down" src="img/arrow-menu-down.svg" alt="arrow-menu-down" /> 
                                        <img className="dropdown_trade-arrow_menu_up" src="img/arrow-menu-up.svg" alt="arrow-menu-up"/>
                                        <ul id="myDropdown2" class="dropdown-content2">
                                        <li>
                                            <a className="submenu_name2" href="https://atomars.zzz.com.ua">Quick Exchange</a>
                                            <p className="submenu_text2">The easiest way to trade</p>    
                                        </li>
                                        <li>
                                            <a className="submenu_name2" href="atomars.zzz.com.ua">Advanced</a>
                                            <p className="submenu_text2">Full acces to all trading tools</p>
                                        </li>
                                        </ul>
                                        </a>
                                        <a class="dropdown_submenu-name" href=" "><img className="menu-mobile-trade-img" src="img/menu-mobile-markets.svg" alt="img" />Markets</a>
                                        <a onClick={myFunction3} class="dropdown_submenu-name dropbtn3" href="#"><img className="menu-mobile-trade-img" src="img/menu-mobile-finanse.svg" alt="img" />Finanse<img className="dropdown_finanse-arrow_menu_down" src="img/arrow-menu-down.svg" alt="arrow-menu-down" /> 
                                        <img className="dropdown_finanse-arrow_menu_up" src="img/arrow-menu-up.svg" alt="arrow-menu-up" />
                                        <ul id="myDropdown3" class="dropdown-content3">
                                        <li>
                                            <a className="submenu_name3" href="https://atomars.zzz.com.ua">Free Coins</a>
                                            <p className="submenu_text3">Collect daily free coins</p>    
                                        </li>
                                        <li>
                                            <a className="submenu_name3" href="https://atomars.zzz.com.ua">Staking</a>
                                            <p className="submenu_text3">Get rewards for staking coins</p>
                                        </li>
                                        </ul>
                                        </a>
                                        <a class="dropdown_submenu-name" href="#"><img className="menu-mobile-trade-img" src="img/menu-mobile-news.svg" alt="img" />News</a>
                                        <div className="horizontal-line"></div>
                                        <a class="dropdown_submenu-name" href="atomars.zzz.com.ua"><img className="menu-mobile-trade-img" src="img/mobile-665/menu-mobile-app.svg" alt="img" />Mobile App</a>
                                        <a class="dropdown_submenu-name" href="atomars.zzz.com.ua"><img className="menu-mobile-trade-img" src="img/mobile-665/menu-mobile-support.svg" alt="img" />Support</a>
                                        <a class="dropdown_submenu-name" href="atomars.zzz.com.ua"><img className="menu-mobile-trade-img" src="img/mobile-665/menu-mobile-settings.svg" alt="img" />Settings</a>
                                        <a class="dropdown_submenu-name" href="atomars.zzz.com.ua"><img className="menu-mobile-trade-img" src="img/mobile-665/menu-mobile-faq.svg" alt="img"/>FAQ</a>
                                        <a class="dropdown_submenu-name" href="atomars.zzz.com.ua"><img className="menu-mobile-trade-img" src="img/mobile-665/menu-mobile-language.svg" alt="img" />English</a>
                                    </div>
                                    </li>
                               </ul> 
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}