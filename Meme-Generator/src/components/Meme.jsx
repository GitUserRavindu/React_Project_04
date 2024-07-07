import React from 'react'
// import memesData from '../memesData.js'

export default function Meme() {
    const [memesList, setMemesList] = React.useState([])
    
    React.useEffect( () => {
        async function fetchMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemesList(data.data.memes)
        }
        
        fetchMemes()
        
    }, [])
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    function getMeme() {
        const randomIndex = Math.floor(Math.random() * memesList.length)
        setMeme( (prevMeme) => ({
            ...prevMeme,
            memeUrl: memesList[randomIndex].url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        
        setMeme( (prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="topText">Top Text</label>
                    <input 
                        id="topText"
                        type="text" 
                        name="topText" 
                        placeholder="Top Text" 
                        className="form--text-input"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bottomText">Bottom Text</label>
                    <input 
                        id="bottomText"
                        type="text" 
                        name="bottomText" 
                        placeholder="Bottom Text" 
                        className="form--text-input"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />   
                </div>         
                <button className="form--button" onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.memeUrl} alt="Meme Image" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>  
        </main>
    )
}