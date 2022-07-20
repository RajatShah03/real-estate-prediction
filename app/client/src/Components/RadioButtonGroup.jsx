import { Button, ButtonGroup } from 'reactstrap'

const RadioButtonGroup = ({ name, n, selected, setSelected }) => {  
    return (
        <div>
            <h4>{name}</h4>
            <ButtonGroup style={{ width: 320 }}>
                {n.map(i => <Button key={i} color="primary" outline onClick={() => setSelected(i)} active={selected === i}>{i}</Button>)}
            </ButtonGroup>
        </div>
    )
}

export default RadioButtonGroup