alert("selamat datang..");
var lagi = true;

while (lagi === true) {
  var nama = prompt("masukan nama:");
  var kelas = prompt("masukan kelas:");
  var umur = prompt("masukan umur:");
  var sekolah = prompt("masukan sekolah:");
  alert(`halo nama saya ${nama} \nkelas saya ${kelas} \numur saya ${umur} \nsekolah saya ${sekolah}`);

  lagi = confirm(`coba lagi?`);
}
alert(`terima kasih..`);
