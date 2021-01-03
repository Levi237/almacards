import React, { Component } from 'react';
import styled from 'styled-components';
export default class EmailForm extends Component { 
    state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        websiteValue: '',
        messageValue: '',
        addServices: ['Services Request:'],
        services: ["Online Store", "Professional Website", "Email Marketing", "Graphic Design"]
    };

    handleSelect = (e, service) => {
        const { addServices } = this.state
        e.preventDefault();

        if (addServices.includes(service)){
            e.currentTarget.classList.remove('selectedHighlighted');
            this.setState(prevState => ({     
                addServices: addServices.filter(x => (
                    x !== service
                ))
            }));
        } else {
            e.currentTarget.classList.add('selectedHighlighted')
            this.setState({
                addServices: [...addServices, service]
            });
        };
    };

    render(){
        const { emailValue, fNameValue, lNameValue, websiteValue, messageValue , addServices, services} = this.state

        const buttonSelectors = services.map((service, key) => {
            return(
                <button 
                    key={key} 
                    id={key}
                    name={service}
                    value={service}
                    className="select-service white"
                    onClick={(e) => {this.handleSelect(e, service)}
                }>
                   {service}
                </button>
            );
        });
        return(<>
                <Form 
                    action={`https://${process.env.REACT_APP_MAILCHIMP_SRC}.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                    method="POST" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate" 
                    target="_blank" 
                    novalidate 
                >
                 {this.props.children}
                <label htmlFor='MERGE1'>
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue}
                        placeholder="*First Name" 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        required
                    />
                </label>
                <label htmlFor='MERGE2'>
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lNameValue}
                        placeholder="Last Name" 
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue}
                        placeholder="*Email" 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                <label htmlFor='WEBSITE'>
                    <input 
                        type="website" 
                        name="WEBSITE" 
                        id="WEBSITE" 
                        value={websiteValue}
                        placeholder="Website URL" 
                        onChange={(e)=>{this.setState({websiteValue: e.target.value});}}
                    />
                </label>

                <h3>What are You Intrested In?</h3>
                <div>
                    {buttonSelectors}
                    <input 
                        type="hidden" 
                        name="SERVICES" 
                        id="SERVICES" 
                        value={addServices}
                    />
                </div>

                <label htmlFor='MESSAGE'>
                    <textarea 
                        type="text" 
                        maxlength="255"
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue}
                        placeholder="Message" 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
                <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
                <div className="clear">
                    <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </Form> 
        </>);
    };
};

const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;

const Form = styled.form`
    position: relative;
    z-index: 90000000000000000000000000000000000000;
    text-align: center;
    max-width: 700px;
    background-color: white;
    padding: 20px 0;
    overflow: scroll;
    margin: 20px auto;

    h3 {
        padding: 20px 0 10px;
        text-transform: capitalize;
        color: #181717;
    }
    p {
        max-width: 500px;
        margin: 20px auto;
        font-size: 16px;
        line-height: 150%;
    }
    input {
        font-size: 18px;
        height: 36px;
        margin: 5px auto;
        border-width: 1px;
        border-radius: 0px;
    }
    input[type=submit] {
        font-size: 18px;
        line-height: 100%;
        text-transform: uppercase;
        color: #181717;
        background-color: #fff;
        border-radius: 0;
        height: 58px;
        border: #181717 solid 1px;
        width: 200px;
        position: relative;
        z-index: 900;
    }
    button {
        border-radius: 0px;
        border: 1px solid black;;
        background: transparent;
    }
    label {
        width: 44%;
        display: inline-block;
        &:nth-of-type(even){
            margin-left: 1.75%
        }

        &:nth-of-type(5){
            width: 100%;
            input {
                width: 86%;
                padding: 5px 2%!important;
            }
        }
        &:nth-of-type(6){
            width: 100%;
            margin-left: 0!important;
        }
        input {
            width: 90%;
            padding: 5px 5%;
        }
        textarea {
            width: 86%;
            border: 1px solid black;
            border-radius: 0px;
            height: 120px;
            margin: 5px 0;
            font-family: Montserrat, Arial;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #473E4E;
            padding: 2%;
        }
    }
    > div {
        max-width: 650px;
        margin: 0 auto;
        width: 100%;
        > button {
            vertical-align: top;
            width: 150px;
            height: 54px;
            font-size: 16px;
            padding: 5px 30px;
            margin: 5px;
        }
    }
    @media screen and (max-width: 900px) {
        padding: 40px 0 20px 0;
    }
    @media screen and (max-width: 698px) {
        > div {
            max-width: 320px;
        }
        label {
            display: block;
            width: 90%;
            margin: 0 auto!important;
        }
    }

`;



