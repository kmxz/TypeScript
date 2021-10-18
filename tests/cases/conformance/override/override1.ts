// @declaration: true
// @noImplicitOverride: true
class B {
    foo (v: string) {}
    fooo (v: string) {}
}

class D extends B {
    override foo (v: string) {}

    fooo (v: string) {}

    override bar(v: string) {}

    override toString() { return ''; }
}

class C {
    override foo(v: string) {}

    override toString() { return ''; }
}

function f () {
    return class extends B {
        override foo (v: string) {}
    
        fooo (v: string) {}
    
        override bar(v: string) {}
    }
}

class E extends (class {
    foo () { }
    bar () { }
}) {
    override foo () { }
    bar () { }

    baz() {}

    override bazz () {}
}

function ff () {
    return class {
        override foo () {}
    }
}