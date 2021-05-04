class DemoService {

    add(x, y) {
        return x + y
    }
}

export const demoService = Object.freeze(new DemoService())