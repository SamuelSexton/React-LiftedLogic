import React, {useState, useEffect, useRef} from 'react';
import * as image from './imageFiles';

export function NavBar(props) {
    const handleSignUp = (e) => {
        e.preventDefault();
        alert('This feature is not yet implemented.')
    }
    return (
        <nav className='navBar'>
            <image.LogoImageBlue/>
            <ul className='drop-down'>
                <button className='drop-downbtn'>Menu <image.ChevronDown/></button>
                <div className='drop-content'>
                <li><img alt='home' src='Icons/Nav-Icons/Home.svg'/> Home</li>
                    <li><img alt='records' src='Icons/Nav-Icons/Record.svg'/> Record</li>
                    <li><img alt='music note' src='Icons/Nav-Icons/Music Note.svg'/> Music</li>
                    <li><img alt='people' src='Icons/Nav-Icons/People.svg'/> Artists</li>
                    <li><img alt='calendar' src='Icons/Nav-Icons/Calendar.svg'/> Concerts</li>
                </div>
            </ul>
            <button className='sign-up' onClick={handleSignUp}>Sign Up</button>
        </nav>
    );
}

export function Button(props) {
    return (
        <div className={props.divClass}>
            <button className={props.buttonClass} type={props.type}>{props.title}</button>
        </div>
    )
}


export function AlbumCard(props){
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-left'>
                    <img src={props.imgURL} alt={props.desc} />
                </div>
                <div className='card-right'>
                    <h4 className='card-album'>{props.album}</h4>
                    <h5 className='card-artist'>{props.artist}</h5>
                    <p className='card-info'>{props.info}</p>
                </div>
            </div>
        </div>
    );
}

export function SlideShow({cards}) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [translateX, setTranslateX] = useState(0);
    const [cardWidth, setCardWidth] = useState(null);
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const cardRef = useRef(null);
   
    
    useEffect(() => {
        if(cardRef.current){
            setCardWidth(cardRef.current.getBoundingClientRect().width);
        }
    }, [currentCardIndex]);
    
    

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
          setCurrentCardIndex(0);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    useEffect(() => {
        setTranslateX(calculateTranslateX(windowWidth,cardWidth));
        }, [windowWidth,cardWidth, currentCardIndex]);

    function calculateTranslateX(width, card){
        if(Math.floor(width/50) > 10){
            return `${Math.floor((width - card)/2)}`;
        }else{
            return `-${Math.floor((width - card)/2)}`;
        }
    }
    

    const handlePreviousClick = () => {
        setCurrentCardIndex(currentCardIndex - 1);
        setTimeout(() => {
            setTranslateX(translateX+(cardWidth+50));
        }, 10);
    }

    const handleNextClick = () => {
        setCurrentCardIndex(currentCardIndex + 1);
        
        setTimeout(() => {
                setTranslateX(translateX-(cardWidth+50));
        }, 10);
        
    }
    

    return (
        <div className='slide-show-container'>
            <div className='slide-show'
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.5s ease',
            }}
            >
                {cards.map((item, index) => 
                    <div key={index} className={`test ${index === currentCardIndex ? 'active' : ''}`}
                    ref={index === currentCardIndex ? cardRef : null}>{item}</div>)}
            </div>
            <div className='button-container'>
                <button onClick={handlePreviousClick} disabled={currentCardIndex === 0}
                style={{backgroundColor: isHoveredLeft ? '#001D5D' : '#B8BFCF'}}
                onPointerEnter={() => setIsHoveredLeft(true)}
                onPointerLeave={() => setIsHoveredLeft(false)}
                >
                    <image.ArrowLeft fill={isHoveredLeft ? 'white' : 'black'}/>
                </button>
                <button onClick={handleNextClick} disabled={currentCardIndex === cards.length - 1}
                style={{backgroundColor: isHoveredRight ? '#001D5D' : '#B8BFCF'}}
                onPointerEnter={() => setIsHoveredRight(true)}
                onPointerLeave={() => setIsHoveredRight(false)}
                >
                    <image.ArrowRight fill={isHoveredRight ? 'white' : 'black'}/>
                </button>
            </div>
            
        </div>
    );
};

export function ContactForm(props) {
    const [info, setInfo] = useState({
        fName: '',
        lName: '',
        mail: '',
        reason: '',
        message: '',
    });

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof info)
        alert(`Form Submited with ${JSON.stringify(info)}`)
    }
    return (
        <div className='contact'>
            <div className='form-left'>
                <div className='form-left-header'>
                    <h3 className='form-header'>{props.headerName}</h3>
                    <p className='form-info'>{props.formInfo}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='first-name'>
                        <label>First Name</label>
                        <input style={{height:'40px'}}
                        type='text' 
                        name='fName' 
                        placeholder='  First Name' 
                        value={info.fName} 
                        onChange={handleChange} required/>
                    </div>
                        
                    <div className='last-name'>
                        <label>Last Name</label>
                        <input style={{height:'40px'}}
                        type='text' 
                        name='lName' 
                        placeholder='  Last Name'
                        value={info.lName} 
                        onChange={handleChange} required/>
                    </div>

                    <div className='mail'>
                        <label>Email Address</label>
                        <input style={{height:'40px'}}
                        type='email' 
                        name='mail' 
                        placeholder='  email@domain.com' 
                        value={info.mail}
                        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                        onChange={handleChange} required/>
                    </div>

                    <div className='reason'>
                        <label>Reason for Contacting</label>
                        <select style={{height:'40px'}} name='reason' value={info.reason}  onChange={handleChange} required>
                            <option value='' disabled>  Select One</option>
                            <option value='internet'>Internet</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>

                    <div className='message'>
                        <label>Message(Optional)</label>
                        <textarea name='message' 
                        value={info.message} 
                        placeholder='Write a Brief Meassage...' 
                        onChange={handleChange} 
                        maxLength={100} rows={6} cols={50}/>
                        <button className='learn-more' type='submit'>Learn More</button>
                    </div>
                </form>
            </div>
            <div className='form-right'>
                <image.ArtistImage
                    altname = 'Henry Swales'
                    imgSrc = 'Images/harry-swales-0l0KjNoAfAk-unsplash.jpg'
                />
            </div>
            
        </div>
    );
}

export function Footer(props) {
    
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-company-info'>
                    <image.LogoImageWhite/>
                    {!(props.location) ? null :
                        props.location.length > 0 ? 
                        props.location.map(item => <a key={item.id} href={item.url}><span>{item.address}</span>{item.city}</a>)
                        : null}
                    {!(props.zipAndPhone) ? null :
                    props.zipAndPhone.length > 0 ? 
                    props.zipAndPhone.map(item => <a key={item.id} href={item.url}><span>{item.zip}</span>{item.phone}</a>)
                    : null}
                </div>
                <div className='footer-explore'>
                    <h5 className='anchor-header'>Explore</h5>
                    {!(props.exploreAnchors) ? null :
                    props.exploreAnchors.length > 0 ? props.exploreAnchors.map(item => <a key={item.id} href={item.url}>{item.name}</a>)
                    : null}
                </div>
                <div className='footer-music'>
                    <h5 className='anchor-header'>Music</h5>
                    {!(props.musicAnchors) ? null :
                        props.musicAnchors.length > 0 ? props.musicAnchors.map(item => <a key={item.id} href={item.url}>{item.name}</a>)
                        : null}
                </div>
                <div className='footer-artists'>
                    <h5 className='anchor-header'>Artist</h5>
                    {!(props.artistAnchors) ? null :
                        props.artistAnchors.length > 0 ? props.artistAnchors.map(item => <a key={item.id} href={item.url}>{item.name}</a>)
                        : null}
                </div>
                <div className='footer-records'>
                    <h5 className='anchor-header'>Records</h5>
                    {!(props.recordAnchors) ? null :
                        props.recordAnchors.length > 0 ? props.recordAnchors.map(item => <a key={item.id} href={item.url}>{item.name}</a>)
                        : null}
                </div>
            </div>
            <div className='footer-terms'>
                    <div className='privacy'>
                        <a href={props.privacyLink}>{props.privacyName}</a>
                    </div>
                    <div className='terms'>
                    <a href={props.termsLink}>{props.termsName}</a>
                    </div>
                    <image.SocialIcons
                    facebook={true}
                    facebookLink='#'
                    twitter={true}
                    twitterLink='#'
                    instagram={true}
                    instagramLink='#'
                    youtube={true}
                    youtubeLink='#'
                    />
                </div>
        </div>
    );
}