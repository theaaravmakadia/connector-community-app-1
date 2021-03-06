import React from 'react'
import {Link} from 'gatsby'
import {ModalRoutingContext} from 'gatsby-plugin-modal-routing'
import Button from '../components/forms/button'

const ModalExamplePage = () => (
    <ModalRoutingContext.Consumer>
        {({modal, closeTo}) => (
            <div>
                {modal ? (
                    <Link to={closeTo}>
                        Close
                    </Link>
                ) : (
                    <header>
                        <h1>
                            Website Title
                        </h1>
                    </header>
                )}
                <div>
                    <p>Hey! We are happy to have you here.</p>
                    <p>But it seems you need to sign up first. It will only take a couple of minutes.</p>
                </div>
                <div>
                    <Button text="Volunteer" link="/sign-up/volunteer"/>
                </div>

                <div>
                    <Button text="Request Help" link="/sign-up/requestor"/>
                </div>
            </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage