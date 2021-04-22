import React, {Component} from "react";
import './exchange.css';

export default class Exchange extends Component {
    render() {

        window.onload = function () {
            let c = {'USD':'1', 'BTC':'49959'}; 
        
            let val = document.getElementById('val'); 
            let currency1 = document.getElementById('cur1'); 
            
            let currency2 = document.getElementById('cur2'); 
            
            let result = document.getElementsByClassName('convert_result')[0]; 
    
            function summ() { 
                let z = 0;
                if(currency1.value === currency2.value){ 
                    result.innerText = val.value; 
                } else {
                    if(currency1.value !== 'USD'){ 
                        z = val.value*c[currency1.value]; 
                        result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; 
                    } else { // Если не равны
                        result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100;
                    }
                }
            }
            val.oninput = function () { 
                summ();
            };

            currency2.onchange = function () {
                let ch2 = currency2.onchange;
                if(ch2 !== 'BTC'){
                    document.getElementById("bto").classList.toggle('us');
                }
                else{
                    document.getElementById("bto").classList.add('bt');
                }
                summ();
                
            }
            currency1.onchange = function () {
                let ch = currency1.onchange;
                if(ch !== 'USA'){
                    document.getElementById("usa").classList.toggle('us');
                    document.getElementById("usa").classList.add('bt');
                }
                else{
                    document.getElementById("usa").classList.add('us');
                }
                summ();
            };  
        }

        return (

            <div className="exchange float-right">
                <div className="exchange_field">
                    <p className="exchange_field-total"><input id="val"  type="number" placeholder="50.00"/></p>
                    <div className="exchange_field-money">
                    <div className="us" id="usa" value="USA" ></div>
                        <select className="field-money_options" id="cur1" size="1">
                            <option>USD</option>
                            <option>BTC</option>
                        </select>
                    </div>
                </div>
                <div class="line_first"></div>
                <div>
                    <div className="total-conversion">
                        <p className="circle"><img className="img-minus" src="img/minus.svg" alt="minus"/></p>2.00 USD TOTAL CARD FEES</div>
                    <div class="line_second"></div>
                    <div className="total-conversion_second">
                        <p className="circle"><img className="img-percent" src="img/percent.svg" alt="percent"/></p>34011&ensp;&ensp;CONVERSION RATE</div>
                </div>
                <div class="line_first"></div>
                <div className="exchange_field-second">
                <div class="exchange_field-total convert_result">0.00125910</div>
                    <div className="exchange_field-money">
                        <div className="bt" id="bto" value="BTC"></div>
                        <select className="field-money_options" id="cur2" size="1">
                            <option>BTC</option>
                            <option>USD</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="exchange_button">Exchange</button>
            </div>

        );
    }
}