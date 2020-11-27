import React from 'react'
import welcome from '../images/welcome.png'

function Home() {

    return (
        <div className='container border reg justify'>
            <div className='row .d-flex'>
                <div className='col-md-12'>
                    <h1>Hi there!</h1><br/>
                    <h5> Here's a hearty</h5>
                    <img className='home' src={welcome} alt="welcome"/>
                    <h5 className='right'>to you the Bluestrokes way (yeah, we're dramatic like that) </h5>
                    <br/><br/>
                    <p>
                        Feel free to browse through our content. We're here to make you happy. We'll keep on populating 
                        this site as inspiration comes. But as at now, this is just random text we're typing to occupy 
                        space so that the page will look relatively presentable. We hope it worked!
                    </p>
                    <p>
                        We hope you have a lovely time here.
                    </p><br/>
                    <h5>Love, <br/> Team Bluestrokes.</h5>
                </div>
            </div>
        </div>
    )
}

export default Home
