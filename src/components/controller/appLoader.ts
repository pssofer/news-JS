import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'f5f7820e386d4ecfbe1624cccdb05f5d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
