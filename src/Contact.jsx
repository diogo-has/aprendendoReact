import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import Menu from "./components/Menu"
import style from "./Contact.module.css"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react';


export const Contact = () => {
    const geoData = ({ lat: -25.4249668, lng: -49.2748809 })
    const defaultPhoneNumber = "5541999999999"
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})

    }

    const handleZap = () => {
        const {email, message, name} = formData;

        const urlZipZop = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}%0D%0A`

        window.open(urlZipZop, '_blank')
    }
    return (
        <>
            <Menu />
            <div className={style.sectionContact}>
                <div>
                    <h1>Contato</h1>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input name='name' type="text" id='name' value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name='email' type="email" id='email' value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={handleChange} required     ></textarea>
                    </div>
                    <button onClick={handleZap}>Enviar</button>
                </div>
                <div>
                    <h2>Mapa</h2>
                    <div>
                        <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{ width: '800px', height: '400px' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[geoData.lat, geoData.lng]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}