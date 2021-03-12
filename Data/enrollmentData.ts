


let env:string;
    //env="dev";
    env="tst"

module.exports = {
    URLs: {
        targetUrl: "https://app."+env+".fmb.live.backbaseservices.com/fmb-enrollment/index#/anchor-data",
        anchorDataUrl: "https://app."+env+".fmb.live.backbaseservices.com/fmb-enrollment/index#/anchor-data",
        smsOTPUrl: "https://app."+env+".fmb.live.backbaseservices.com/fmb-enrollment/index#/otp-verification"
    },

    personalInfo :{
        firstname : "Phony",
        lastname : "Bogusson",
        dateOfBirth: "06/07/1989",
        email : "sentinel@blueopal.com",
        phoneNumber: "8153420469"
    },
    cellOTPPageData:{
        headerText:"Mobile phone number",
    }

}