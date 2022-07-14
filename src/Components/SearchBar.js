import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {
    return (
        <div >
            <span id='homepage-searchbar' className='vh-100 d-flex justify-content-center align-items-center'>
                <InputGroup className="mb-3 input-group-lg w-50">
                    <Form.Control
                        placeholder="Enter City Name"
                        aria-label="City Name"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="custom-btn" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </span>
        </div>
    )
}

export default SearchBar