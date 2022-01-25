class hewan {
    constructor(darat, udara) {
        this.darat = darat;
        this.udara = udara;
    }
}

let hewan1 = new hewan("buaya", "elang");

console.log(
    hewan1.darat +
       " adalah hewan yang bertelur dan memiliki sebuah mulut yg panjang, meiliki sebuah ekor yg panjang dan meiliki gigi yg tajam"
);
console.log(`${hewan1.udara} adalah burung yg paling besar dan sangat ganas`);