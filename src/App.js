import React from 'react';
import * as image from './imageFiles';
import * as component from './components'
import heroBackground from './marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg';
import './App.css';
import './Slide-Show.css';


const App = () => {
    const locationItems = [
        {id: 1, address: ' 8521 W Fairfax Rd', city:'Los Angeles, CA', url: '#'}
    ]

    const zipAndPhoneItems = [
        {id: 1, zip:'990210', phone:'(909) 505 4302', url: '#'}
    ]

    const exploreItems = [
        {id: 1, name: 'About Us', url: '#'},
        {id: 2, name: 'Our Story', url: '#'},
        {id: 3, name: 'Team', url: '#'},
        {id: 4, name: 'Careers', url: '#'},
        {id: 5, name: 'FAQ', url: '#'}
    ];

    const musicItems = [
        {id: 1, name: 'Missing Out', url: '#'},
        {id: 2, name: 'Trapsoul', url: '#'},
        {id: 3, name: 'Sonder Sons', url: '#'},
        {id: 4, name: 'Paradise Today', url: '#'},
        {id: 5, name: 'Needed', url: '#'}
    ];

    const artistItems = [
        {id: 1, name: 'Brent Faiyez', url: '#'},
        {id: 2, name: 'Drake', url: '#'},
        {id: 3, name: 'Bryson Ford', url: '#'},
        {id: 4, name: 'Young Ford', url: '#'},
        {id: 5, name: 'Roy Fresco', url: '#'}
    ];

    const recordItems = [
        {id: 1, name: 'What a Time', url: '#'},
        {id: 2, name: 'Coming Home', url: '#'},
        {id: 3, name: 'Always First', url: '#'},
        {id: 4, name: 'So Far Gone', url: '#'},
        {id: 5, name: 'Big Bluez', url: '#'}
    ];

    const cards = [
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Bryant Tiller'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Bryant'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Tiller'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Bry Till'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Brent Faiyez'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Brent'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
        < component.AlbumCard 
            imgURL='Images/71RLkNIuZNL._SY355_.jpg'
            album='Trapsoul'
            artist='Faiyez'
            info='Bryson Djuan Tiller, is an American singer, songwriter and rapper. 
            Born in Louisville, Kentucky, he started his career in 2011, releasing the 
            debut mixtape titled Killer Instinct Vol.1.' 
        />,
    ];
    return (
        <div className='mainContainer'>
            <div className='hero' style={{backgroundImage : `url(${heroBackground})`}}>
                
                    
                
                <component.NavBar/>
            
            
                <div className='hero-content'>
                    <div className='col-left'>
                        <h1>A.M. Paradox</h1>
                        <p>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
                            an American singer and record producer. He released his debut project, an
                            extended play entitled A.M. Paradox, in 2016.
                        </p>
                        <button><image.PlayImage/></button><p>Watch Video</p>
                    </div>
                    
                </div>
            </div>

            <div className='artist'>
                <div className='artist-img'>
                    <image.ArtistImage
                    altName='Brent Faiyaz'
                    imgSrc='Images\aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDA0LzMyNy9NSTAwMDQzMjcxNjAuanBn.webp'/>
                </div>
                
                <div className='artist-right'>
                    <h2>Brent Faiyaz, So Far Gone</h2>
                    <p>
                        Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, 
                        Maryland to Charlotte, North Carolina before ultimately settling in Los Angeles, 
                        California to further his music career.  On January 19, 2015, he released his debut single "Allure".
                        On June 1, 2016, Faiyaz released "Invite Me", the lead single from his upcoming debut EP. 
                        On September 19, 2016, his 21st birthday, the EP entitled A.M. Paradox was released and received 
                        with positive reviews from music critics.  On January 26, 2017, Sonder released their debut EP Into.
                    </p>
                    <component.Button divClass='artist-button' buttonClass='learn-more' title='Learn More'/>
                </div>
            </div>

            <div className='new-releases'>
                <h2>New Releases</h2>
                <p>New albums every single month, check out the newest & best from Snyder Recording artist, 
                    now available on Apple Music & Spotify.
                </p>
            </div>

            
                <component.SlideShow cards={cards}/>
            
                
            

            <div className='form-container' >
                <component.ContactForm headerName='Get In Touch' formInfo='New albums every single month, check out the newest 
                & best from Snyder Recording artist, now available on Apple Music & Spotify.'/>
            </div>

            
                <component.Footer
                    privacyLink ='#'
                    privacyName = 'Privacy Policy'
                    termsLink = '#'
                    termsName = 'Terms and Conditions'
                    location = {locationItems}
                    zipAndPhone = {zipAndPhoneItems}
                    exploreAnchors = {exploreItems}
                    musicAnchors = {musicItems}
                    artistAnchors = {artistItems}
                    recordAnchors = {recordItems}
                />
            
            
        </div>
    );
}

export default App;