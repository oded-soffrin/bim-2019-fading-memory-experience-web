
import changeRouteFactory from '../utils/changeRouteFactory'

class Watchdog {
    constructor(history, restartMin = 5) {
        this.restartMin = restartMin;
        this.changeRoute = changeRouteFactory(history);
        this.update();
        window.keepalive = () => {
            this.update();
        }
    }

    update() {
        console.log('timer updated');
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            console.log('navigating back');
            this.changeRoute('/')
        },this.restartMin * 60 * 1000);
    }
}

export default Watchdog;


