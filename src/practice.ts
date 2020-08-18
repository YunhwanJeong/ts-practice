function add(n1: number, n2: number): number {
    return n1 + n2;
}

function concat(s1: string, s2: string): string {
    return s1 + s2;
}

let plus: (a: number, b: number) => number;

plus = add;
plus = concat;