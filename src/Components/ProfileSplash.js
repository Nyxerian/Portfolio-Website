import ProfileImg from '../Images/ProfileImg.png'


export default function ProfileSplash() {

    const imgstyle = {
        width: 670,
        height: 550,
        marginLeft: 60,
    }
        
    

    return(
        <div>
            <img 
                className="imageSplash"
                src={ProfileImg} 
                style={imgstyle}               
                />                
            
        </div>
    )
}