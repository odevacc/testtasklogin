export const validate = (values) => {
    const errors = {};
    if (values.password !== '123456') {
        errors.password = "Password: 123456";
    }
    if (values.username !== 'developer21') {
        errors.username = 'Login: developer21';
    }
    return errors;
};