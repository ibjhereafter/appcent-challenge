const pattern = {
    name: /^([^\d])[a-zA-Z\s]+$/,
    email: /^([\w-_.\d]+)@([a-z]+)\.([a-z]{2,20})?([a-z.]{2,20})$/,
    password: /^([a-zA-Z.-_@#*\d]{5,})$/,
}

export default pattern;