const constants = {
    // regex
    username_rg: /^[A-Za-z]+[A-Za-z0-9 ]*$/,
    alph_rg: /^[A-Za-z]*$/,
    alphanum_rg: /^[A-Za-z0-9 ]*$/,
    email_rg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    num_rg: /^[0-9]*$/,
    float_rg: /^[0-9]*[.]?[0-9]*$/,
    neg_num_rg: /^(-)?[0-9]*$/,
}

module.exports = constants
