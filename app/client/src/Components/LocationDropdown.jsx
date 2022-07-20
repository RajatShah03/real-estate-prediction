import { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"

const LocationDropdown = ({ locations, setLocation }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggle = () => setDropdownOpen(prev => !prev)

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="xl" direction="up" color="primary">
            <DropdownToggle caret>
                Locations...
            </DropdownToggle>
            <DropdownMenu>
                {locations.map(location => <DropdownItem key={location} onClick={() => setLocation(location)}>{location}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>      
    )
}

export default LocationDropdown