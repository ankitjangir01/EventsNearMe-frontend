import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {
    return (
        <div>
            <InputGroup className="mb-3 input-group-lg w-100">
                <Form.Control
                    placeholder="Enter City Name"
                    aria-label="City Name"
                    aria-describedby="basic-addon2"
                />
                <Button className="custom-btn" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchBar