import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ResponseObject, Data } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data as Data))
            );
        this.controller.getSources((data) => this.view.drawSources(data as ResponseObject));
    }
}

export default App;
