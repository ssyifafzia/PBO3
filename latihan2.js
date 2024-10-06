class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} orang memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
    }

    hitungLuasDek() {
        return `Luas dek kapal ${this.nama} adalah ${this.panjang * this.lebar} m².`;
    }

    infoKapasitas() {
        return `Kapal ${this.nama} memiliki kapasitas ${this.kapasitas} orang.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, kapasitas, panjang, lebar, jumlahPenumpang) {
        super(nama, "Kapal Penumpang", kapasitas, panjang, lebar);
        this.jumlahPenumpang = jumlahPenumpang; 
    }

    infoPenumpang() {
        return `Kapal ${this.nama} saat ini mengangkut ${this.jumlahPenumpang} penumpang.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, kapasitas, panjang, lebar, muatan) {
        super(nama, "Kapal Kargo", kapasitas, panjang, lebar);
        this.muatan = muatan; 
    }

    infoMuatan() {
        return `Kapal ${this.nama} saat ini mengangkut ${this.muatan} ton muatan.`;
    }
}

let kapalPenumpang1 = new KapalPenumpang("Budiono Siregar", 500, 200, 100, 300);
console.log(kapalPenumpang1.infoKapal());
console.log(kapalPenumpang1.hitungLuasDek());
console.log(kapalPenumpang1.infoKapasitas());
console.log(kapalPenumpang1.infoPenumpang());

let kapalKargo1 = new KapalKargo("Kargo Sejahtera", 1000, 250, 50, 800);
console.log(kapalKargo1.infoKapal());
console.log(kapalKargo1.hitungLuasDek());
console.log(kapalKargo1.infoKapasitas());
console.log(kapalKargo1.infoMuatan());
