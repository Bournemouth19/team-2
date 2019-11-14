import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class login extends React.Component{
    render(){
        return(
            <Form>
                <Form>
                <label>Username</label>
                <input placeholder='Username' />
                </Form>
                <Form>
                <label>Password</label>
                <input placeholder='Password' />
                </Form>
                <Form>
                {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
                </Form>
                <Button type='submit'>Login</Button>
            </Form>
        )
    }
}

export default login