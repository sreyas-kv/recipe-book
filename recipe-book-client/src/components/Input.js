import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error"><span className="display-error">{this.props.meta.error}</span></div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta}</div>
            );
        }

        return ( 
          
            <div className="form-input">
              <h1>{console.log(this.props.meta.error)}</h1>
                {/* <label htmlFor={this.props.input.name}> */}
                <span className="show-error">
                    {this.props.label}
                    {error}
                    {warning}
                    </span>
                {/* </label> */}
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    placeholder={this.props.label}
                />
            </div>
        );
    }
}
