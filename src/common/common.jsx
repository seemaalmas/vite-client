export const isValidEmailFormat = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidName = async (name) => {
    // Regular expression to match usernames starting with a letter (not a number)
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    return regex.test(name);
}

export const isFieldEmpty = async (name) => {
    // Regular expression to match usernames starting with a letter (not a number)
    
    return !name;
}