import './Intro.css'

export default function Intro() {

    

    const blurbStyle = {
        marginTop:60,
        marginRight: 50,
        textAlign: 'center',
        fontFamily: 'Midnight',
        fontSize: 30
    }
        
    

    return(
        <div style={blurbStyle}>
            <br />
            <h2>Hi, My name is Danni</h2>
            
            <p>
                Welcome to my Portfolio Site. Feel free to browse around and contact me should you have any questions!
            </p>
        </div>
    )
}