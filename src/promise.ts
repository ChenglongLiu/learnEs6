
const delay = ((ms: number) => new Promise(res => setTimeout(res, ms)));

class Merge {

    private _helloRes: Promise<void> | null;

    constructor() {
        this._helloRes = null;
    }

    public async hello(): Promise<void> {
        console.log("hello start");
        if (!this._helloRes) {
            this._helloRes = this._hello();
        }
        return this._helloRes;
    }

    private async _hello(): Promise<void> {
        console.log("_hello start");
        await delay(5000);
        console.log("_hello end");
    }
}

let m: Merge = new Merge();
m.hello();
m.hello();
m.hello();
m.hello();
m.hello();
m.hello();
setTimeout(() => { console.log("hahaha") }, 8000);