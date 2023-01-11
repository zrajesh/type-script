abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void;

    getReelTime(): number {
        return 8;
    }
}

// Cannot create an instance of an abstract class
// const click = new TakePhoto("hd", "no filter");

// Create instance only from extended class
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }
    getSepia() {
        console.log("Sepia");
        
    }
}

const click = new Instagram("hd", "no filter", 3);

export {}
