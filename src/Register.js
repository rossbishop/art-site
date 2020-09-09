import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import RegisterStyles from './css/register.module.css'
import cx from 'classnames'

export default function Register(props) {

    return (
        <div className="container">
            <div class="row">
                <div class="col-12">
                    <form className={RegisterStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Register</h1>
                        <label for="inputEmail" className="sr-only">Enter email address</label>
                        <input type="email" id="inputEmail" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Email Address" required autofocus/>
                        <label for="inputUsername" className="sr-only">Enter new username</label>
                        <input type="username" id="inputUsername" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" required autofocus/>
                        <label for="inputPassword" className="sr-only">Enter password</label>
                        <input type="password" id="inputPassword" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" required autofocus/>
                        <label for="inputPasswordConfirm" className="sr-only">Enter password</label>
                        <input type="password" id="inputPasswordConfirm" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Confirm Password" required autofocus/>
                        <button className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
