import React from "react";
import './Contact.css';
import { Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';



function Contact() {
    return (
        <div>
            <div className='container mt-5 h-100 justify-content-center text-center'>
               <div className='row justify-content-center'>
              
                    <div className='col-md-8 justify-content-center text-start'>
					<h2 className="fs-1 mb-3">Contact Us</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum officia perferendis eius nobis non hic ratione voluptatum doloribus iusto architecto!</p>
               
                        <Form>
                            <FormGroup className='row mb-3'>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='first-name'>
                                        First Name
                                    </FormLabel>
                                    <FormControl type='text' id='first-name' required />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='last-name'>
                                        Last Name
                                    </FormLabel>
                                    <FormControl type='text' id='last-name' />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='email'>
                                        Enter your Email Address
                                    </FormLabel>
                                    <FormControl type='email' id='email' required />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='phone-number'>
                                        Phone Number
                                    </FormLabel>
                                    <FormControl type='tel' id='phone-number' />
                                </div>
 
                                <div className="col-md-12">
                                    <FormLabel htmlFor='comment'>
                                        Comments
                                    </FormLabel>
                                    <FormControl as='textarea' rows={4} id='comment' />
                                </div>
                                <div className="col-md-12">
                                    <button type='submit' className="btn btn-primary w-100 mt-2">
                                   Send 
                                    </button>
                                </div>
                                {/* Vous pouvez ajouter d'autres champs de formulaire ici */}
                            </FormGroup>
                            {/* Vous pouvez ajouter un bouton de soumission ou des contrôles de formulaire supplémentaires ici */}
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
