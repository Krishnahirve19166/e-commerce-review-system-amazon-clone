import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";

import "./Subtotal.css";  

function Subtotal() {
    
    const [{basket}, dispatch] = useStateValue();

    // create a function to calculate the subtotal

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            {/* Update the content */}
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contain a gift.
                        </small>
                    </>
                )}
                decimalScale = {2}
                value={getBasketTotal(basket)} // dynamically update the record 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'}
            />
            <button>Proceed to Checkout </button>
        </div>
    )
}

export default Subtotal
