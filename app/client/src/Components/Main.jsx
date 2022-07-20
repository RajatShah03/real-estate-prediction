import { useEffect, useState } from 'react'
import { Badge, Button, Input } from 'reactstrap'
import axios from 'axios'
import LocationDropdown from './LocationDropdown'
import RadioButtonGroup from './RadioButtonGroup'
import Error from './Error'

const Main = () => {
    const [locations, setLocations] = useState([])
    const [sqft, setSqft] = useState(0)
    const [bedrooms, setBedrooms] = useState(-1)
    const [bathrooms, setBathrooms] = useState(-1)
    const [balcony, setBalcony] = useState(-1)
    const [location, setLocation] = useState('')
    const [estimate, setEstimate] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(locations.length === 0) {
            async function fetchLocations() {
                try {
                    const { data } = await axios.get('http://localhost:8000/locations')
                    setLocations(data.details)
                } catch (e) {
                    setError(e.message)
                }
            }
            fetchLocations()
        }
    }, [locations])

    const estimatePrice = async () => {
        const payload = {
            location,
            sqft,
            bath: bathrooms,
            bhk: bedrooms,
            balcony
        }

        try {
            const { data: { details } } = await axios.post('http://localhost:8000/predict', payload)
            setEstimate(details.price)
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignSelf: 'center',
            gap: 16,
            padding: "32px 0",
            maxWidth: "320px",
            margin: "0 auto",
        }}>
            {error && <Error error={error} />}
            <div>
                <h4>Area (Square foot)</h4>
                <Input value={sqft.toString()} onChange={e => setSqft(Number(e.target.value))} />
            </div>
            <RadioButtonGroup name="# Bedrooms" n={[1, 2, 3, 4, 5]} selected={bedrooms} setSelected={setBedrooms} />
            <RadioButtonGroup name="# Bathrooms" n={[1, 2, 3, 4, 5]} selected={bathrooms} setSelected={setBathrooms} />
            <RadioButtonGroup name="# Balcony" n={[1, 2, 3]} selected={balcony} setSelected={setBalcony} />
            <div>
                <h4>Choose Location in Bengaluru</h4>
                {location && <h6>Selected Location: <Badge color="info">{location}</Badge></h6>}
                <LocationDropdown locations={locations} setLocation={setLocation} />
            </div>
            <Button color="primary" onClick={estimatePrice}>Estimate Price</Button>
           {estimate && <div>
                <h4>The Estimated price for selected property is: <Badge color="success">{estimate}</Badge></h4>
            </div>}
        </div>
    )
}

export default Main