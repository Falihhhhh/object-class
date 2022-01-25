var siswa = {
    namaDepan : "Muhammad",
    namabelakang : "falih",

    tampilkan : function () {
        console.log(`nama ${this.namaDepan} ${this.namabelakang}`);
    }

}


console.log(siswa.namaDepan);
siswa.tampilkan()