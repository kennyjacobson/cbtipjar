import React, {useState} from 'react'

const CardItem = (props) => {
    const [amount, setAmount] = useState(10)


    return (
        <div className="Card-item"  >
            <div className="Card-title">
                <div>{props.restaurant.name}</div>
            </div>
            <div className="Card-address">
                {props.restaurant.address}
            </div>
            <div className="Card-photo">
                <div>

                    <img alt="restaurant " src={props.restaurant.photo ? props.restaurant.photo.url : '/image-not-found.png'}></img>

                </div>
            </div>
            <div className="Card-description">
                {props.restaurant.description}
            </div>
            <div className="Card-payment">
                <span>Enter Amount to tip:</span>
                
                <input id="amount" type="text" className="Card-payment-amount" onChange={e => setAmount(e.target.value)} value={amount} ></input>
                
                
                
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_xclick" />
                    <input type="hidden" name="business" value={props.restaurant.paypalAccount?props.restaurant.paypalAccount:"missing"}/>
                    <input type="hidden" name="lc" value="US" />
                    <input type="hidden" name="item_name" value={`TipJar - Restaurant: ${props.restaurant.name}`} />
                    <input type="hidden" name="amount" value={amount}/>
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="button_subtype" value="services" />
                    <input type="hidden" name="custom" value="TipJar" />
                    <input type="hidden" name="no_note" value="1" />
                    <input type="hidden" name="no_shipping" value="2" />
                    <input type="hidden" name="rm" value="1" />
                    <input type="hidden" name="return" value="https://www.cbtipjar.com/" />
                    <input type="hidden" name="cancel_return" value="https://www.cbtipjar.com/" />
                    {/*<input type="hidden" name="notify_url" value="{!SiteBaseUrl}/LDSSPaypalIPN" />*/}

                    <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
                    <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>

        </div>
    )
}

export default CardItem