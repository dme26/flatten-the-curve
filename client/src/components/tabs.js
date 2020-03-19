import React from "react"

export default class tabs extends React.Component{

    constructor(props){
		super(props);
		this.state = {
            active: 'about'
        }
    }

    render(){
        return (
            <div className="box tab-container">
                <div className="tabs">
                <ul>
                    <li className={this.state.active =='about' ? 'is-active' : ''}>
                    <a onClick={(e)=> this.setState({active: 'about'})}>About</a>
                    </li>
                    <li className={this.state.active =='forecast' ? 'is-active' : ''}>
                    <a onClick={(e)=> this.setState({active: 'forecast'})}>Note on Forecasts</a>
                    </li>
                </ul>
                </div>
                <div className={this.state.active =='about' ? '' : 'is-hidden'}>
                    <p className="is-size-6">The goal of this site is to motivate people to take actionable steps now to slow the spread of COVID-19.</p>
                    <p className="is-size-6">
                        This is a work in Progress. Code is freely available on <a href="https://github.com/carlaiau/flatten-the-curve"  target="_blank" rel="noopener noreferrer">
                        GitHub</a> and pull requests are welcome.
                    </p>
                    <p className="is-size-6">
                        Inspired by <a href="https://flattenthecurve.com/" target="_blank" rel="noopener noreferrer">Flattenthecurve.com</a>. 
                        Please visit this site for actionable steps to slow the spread.
                    </p>
                    <p className="is-size-6">
                        COVID-19 Data belongs to <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank" rel="noopener noreferrer">Johns Hopkins University</a> 
                    </p>
                    <p className="is-size-6">
                        If your country is not in the dropdown we are filtering out countries below 3 million population and less than 5 confirmed cases. 
                        If your country is not shown but should be, please contact us!
                    </p>
                </div>
                <div className={this.state.active =='forecast' ? '' : 'is-hidden'}>
                
                    <p className="is-size-6">
                    The forecasts below show a future projection of COVID-19 in the selected country of {this.props.country_name}. 
                    This is based on the historical growth data of each country that is currently ahead of {this.props.country_name} in the outbreak.
                    </p>
                    <p className="is-size-6">
                    Viewing this can offer unique insights into the range of possible outcomes. Not based on epidemiological models, only on historical data experienced by other countries.
                    </p>
                    <p className="is-size-6">
                        The potential forecast does not take into account the relative doubling time of each country.
                    </p>
                    <p className="is-size-6">
                        The true forecast depends on a multitude of factors such as the number and speed of tests done, the quality of the case tracking, the testing of tracked cases, and the support given to those who need to go into isolation.
                    </p>
                </div> 
            </div>
        )
    }
}