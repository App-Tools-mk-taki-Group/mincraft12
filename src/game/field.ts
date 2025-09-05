class Field {
    private objects: any[];

    constructor() {
        this.objects = [];
    }

    addObject(object: any) {
        this.objects.push(object);
    }

    removeObject(object: any) {
        this.objects = this.objects.filter(obj => obj !== object);
    }

    getObjects() {
        return this.objects;
    }

    update() {
        // Update logic for the field, such as managing object states
    }
}

export default Field;