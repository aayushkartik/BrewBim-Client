import React from 'react'
import Footer from './Footer.js'
import './css/home.css';
const Home = () => {
    return (
        <>
        <div className="upper-block">
        <div className='heading container-fluid'>
            <b>Create prospect lists from LinkedIn.</b> 
            <p className='supporting-text'>Export leads from LinkedIn with accurate contact info 
                        and connect directly with your audience.</p>
        </div>
        </div>
        <div className='heading-2 container div2'>
            <b>Exports lead from sales navigator with contact info.</b> 
            <p className='supporting-text'>convert any LinkedIn search or saved list into email list-
            whether you're doing cold outreach or recuriting the best talent, 
            Brewbim is there to help you connect faster and easier</p>
        </div>

        <div className='combi'>
        <div className='heading-2 container-fluid'>
            <b>Massive data for hypergrowth</b> 
            <p className='supporting-text'>Our BigData is what power Brewbim to be #1 email finder for LinkedIn</p>
        </div>
        <div className="container Promoclass">
        <div className="row">
            <div className="col-sm">
            <div clasName='promo'>
                120M<br/>
                Work Emails
            </div>
            </div>
            <div className="col-sm">
            <div clasName='promo'>
                70M<br/>
                Private Emails
            </div>
            </div>
            <div className="col-sm">
            <div clasName='promo'>
                60M<br/>
                Mobile Numbers
            </div>
            </div>
            <div className="col-sm">
            <div clasName='promo'>
                90M<br/>
                Social Profiles
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="Joinus">
        <div className='heading-2 container join2'>
            <b>Join for free today</b> 
            <p className='supporting-text'>Supercharge your team with the best accceleration and LinkedIn automation tools</p>
            <button className='bton'>Join us</button>
            <p className='supporting-text'>Get <b>30 credits</b> absolutely free</p>
        </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Home
