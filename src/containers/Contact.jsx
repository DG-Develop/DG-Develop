import React from 'react'

const Contact = ({ OnSubmit }) => {
  return (
    <section>
        <div>
            <p>Contact me</p>
            <h2>How can I help you</h2>
        </div>

        <form method='POST' onSubmit={OnSubmit}>
            <div>
                <label htmlFor="issue">I'm interested in...</label>
                <div>
                    <div>
                        <p>API</p>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'  id='name'/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
            </div>

            <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' id='subject'/>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>

            <div>
                <input type="sumbit" value="Sent request"/>
            </div>
        </form>
    </section>
  )
}

export default Contact