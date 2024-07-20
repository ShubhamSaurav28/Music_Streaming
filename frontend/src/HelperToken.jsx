export const tokenCheck = () => {
    let token = window.localStorage.getItem('musicstream');
    if (token) {
        token = JSON.parse(token);
        const id = token.userId;
        const username = token.username;
        if (!id) {
            return false;
        }
        return { id , username };
    }
    else {
        return false;
    }
}