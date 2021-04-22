import React, {Component} from "react";
import './quotation.css';

export default class Quotation extends Component {

    render() {

        const json_quotation = this.props.data_card_info;

        if(json_quotation.stat === 'plus'){
            document.getElementById("st").classList.add('green');
            }
      
        
        return json_quotation.map((item, index) => {
            return <div className="marque">
                <span className="marque_currency">{item.currency}</span>
                <span className="marque_sum">{item.sum}</span>
                <img src={item.arrow} alt="img"/>
                <span className={item.stat} id="st">{item.percent}</span>
            </div>
        })
        

    }

}
