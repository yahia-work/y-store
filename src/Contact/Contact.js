import "./Contact.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Contact(){
    return(
        <div className="contact flex">
            <div className="contactez-nous-infos flex">
                <strong>Contactez-nous:</strong>
                <div>Service client :</div>
                <div>hiyacollection@gmail.com</div>
                <div>0676343038</div>
            </div>
            <div className="contactez-nous flex">
                <TextField label="Nom" variant="outlined" />
                <TextField label="Address E-mail" variant="outlined" />
                <TextField label="Telephone" variant="outlined" />
                <TextField label="Sujet" variant="outlined" />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                />
                <Button style={{backgroundColor:"black"}} variant="contained" className="envoyer-button">
                    Envoyer Message
                </Button>
            </div>
        </div>
    )
}

export default Contact;