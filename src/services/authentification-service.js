export default class AuthentificationService{

    static IsAuthentificated = false;

    static login(username, password) {
        
        const isAuthentificated = (username === "soan" && password === "clement");

        return new Promise(resolve => {
            this.isAuthentificated = isAuthentificated;
            resolve(isAuthentificated)
        },1000)
    }


}