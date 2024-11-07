import React from "react";
class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange,locale: currenLocale}= this.props;
        const {change: nextChange,locale: nextLocale} = nextProps;

        if(currentChange===nextChange && nextLocale===currenLocale){
            return false;
        }
        return true;

    }
    render(){
        const {change,locale,show}= this.props;
        return(
            <>
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
            </button>
            {show && <p>Hello</p>}
            </>
        );
    }
}
export default Button;