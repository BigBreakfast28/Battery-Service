export default function battery_replacement () {
    return (
                <body>
                    <h4>Submit form for Battery Replacement</h4>
                        <h5>Please fill out every field.</h5>
                    <form name="Service requst" method="post" action="deancameron99@gmail.com">
                        <label for="first name">
                            First Name: <input id="first name" name="first name" />
                        </label>
                        <label>
                            Last Name: <input id="last name" name="last name"/>
                        </label>
                        <label>
                            Phone Number: <input id="phone number" name="phone number" type="tel"/>
                        </label>
                        <label>
                            Email Address: <input id="email" name="email" type="email" />
                        </label>
                        <label>
                            Vehicle location: <input id="Vehicle location" name="Vehicle location" />
                        </label>

                        <hr />

                        <fieldset for=""></fieldset>
                    </form>
                </body>
    )
}