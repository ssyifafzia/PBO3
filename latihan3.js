class SensorPasut {
    constructor(nama, lokasi) {
        this.nama = nama;
        this.lokasi = lokasi;
        this._status = "hidup";
    }
    aktifkan() {
        this._status = "aktif";
        return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan`;
    }
    nonaktifkan() {
        this._status = "nonaktif";
        return `Sensor ${this.nama} di ${this.lokasi} telah dinonaktifkan`;
    }
    getStatus() {
        return `Status sensor ${this.nama} adalah ${this._status}`;
    }

    reset() {
        this._status = "hidup";
        return `Sensor ${this.nama} di ${this.lokasi} telah direset`;
    }
    updateLokasi(newLokasi) {
        this.lokasi = newLokasi;
        return `Lokasi sensor ${this.nama} telah diperbarui menjadi ${this.lokasi}`;
    }
}
class UsiaSensor extends SensorPasut {
    constructor(nama, lokasi, usia) {
        super(nama, lokasi);
        this.usia = usia; 
    }
    getUsia() {
        return `Usia sensor ${this.nama} adalah ${this.usia} tahun`;
    }
}

class Kapal {
    constructor(nama, kapasitas) {
        this.nama = nama;
        this.kapasitas = kapasitas; 
        this.status = "berlayar";
    }
    berlayar() {
        this.status = "berlayar";
        return `Kapal ${this.nama} sedang berlayar.`;
    }
    berlabuh() {
        this.status = "berlabuh";
        return `Kapal ${this.nama} telah berlabuh.`;
    }
    getStatus() {
        return `Status kapal ${this.nama} adalah ${this.status}.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, kapasitas, jumlahPenumpang) {
        super(nama, kapasitas);
        this.jumlahPenumpang = jumlahPenumpang; // Jumlah penumpang saat ini
    }
    infoPenumpang() {
        return `Kapal ${this.nama} memiliki kapasitas ${this.kapasitas} orang dan saat ini ada ${this.jumlahPenumpang} penumpang.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, kapasitas, muatan) {
        super(nama, kapasitas);
        this.muatan = muatan; // Muatan dalam ton
    }
    infoMuatan() {
        return `Kapal ${this.nama} memiliki kapasitas ${this.kapasitas} ton dan saat ini mengangkut ${this.muatan} ton muatan.`;
    }
}

let SensorPasutMerak = new SensorPasut("Selat Sunda", "Merak");
console.log(SensorPasutMerak.aktifkan());
console.log(SensorPasutMerak.nonaktifkan());
console.log(SensorPasutMerak.getStatus());
console.log(SensorPasutMerak.reset());
console.log(SensorPasutMerak.updateLokasi("Jakarta"));

let sensorUsia = new UsiaSensor("Sensor1", "Lokasi1", 5);
console.log(sensorUsia.getUsia());
console.log(sensorUsia.aktifkan());
console.log(sensorUsia.getStatus());

let kapalPenumpang1 = new KapalPenumpang("Kapal Bahtera", 200, 150);
console.log(kapalPenumpang1.berlayar());
console.log(kapalPenumpang1.infoPenumpang());
console.log(kapalPenumpang1.getStatus());
console.log(kapalPenumpang1.berlabuh());

let kapalKargo1 = new KapalKargo("Kapal Kargo Sejahtera", 1000, 750);
console.log(kapalKargo1.berlayar());
console.log(kapalKargo1.infoMuatan());
console.log(kapalKargo1.getStatus());
console.log(kapalKargo1.berlabuh());
