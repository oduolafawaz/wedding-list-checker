const guests = [
{name:"Adegboyega Oduola", table:"Table 1", access:"VIP"},
{name:"Adegboyega Oduola 2", table:"Table 1", access:"VIP"},
{name:"Ayo James", table:"Table 1", access:"VIP"},
{name:"Adetoyese Omokanye", table:"Table 1", access:"VIP"},
{name:"Lanre Carew", table:"Table 1", access:"VIP"},
{name:"Wura Lanre Carew", table:"Table 1", access:"VIP"},
{name:"Olufade", table:"Table 1", access:"VIP"},
{name:"Afiz Ogun Oluwatoyin (DG ITF)", table:"Table 1", access:"VIP"},
{name:"Teslim Igbalaiye", table:"Table 1", access:"VIP"},
{name:"Richard Omale", table:"Table 1", access:"VIP"},

{name:"Shehu Yahaya", table:"Table 2", access:"VIP"},
{name:"Mrs Shehu Yahaya", table:"Table 2", access:"VIP"},
{name:"Professor Osaghai", table:"Table 2", access:"VIP"},
{name:"Veronica Osaghai", table:"Table 2", access:"VIP"},
{name:"High Comm. Odette Peterson 1", table:"Table 2", access:"VIP"},
{name:"High Comm. Odette Peterson 2", table:"Table 2", access:"VIP"},
{name:"HRH Amman Kano", table:"Table 2", access:"VIP"},
{name:"Oga Deacon Mike Egbon", table:"Table 2", access:"VIP"},
{name:"Dr Mairo Mandara", table:"Table 2", access:"VIP"},
{name:"Chichi Aniagolu", table:"Table 2", access:"VIP"},
{name:"Kate Meaghar", table:"Table 2", access:"VIP"},

{name:"Pastor Idowu", table:"Table 3", access:"VIP"},
{name:"Mrs Idowu", table:"Table 3", access:"VIP"},
{name:"Mr Oguego", table:"Table 3", access:"VIP"},
{name:"Mrs Oguego", table:"Table 3", access:"VIP"},
{name:"Adekunle Makama", table:"Table 3", access:"VIP"},
{name:"Augustine Emelobe", table:"Table 3", access:"VIP"},
{name:"Efiong KRPC", table:"Table 3", access:"VIP"},
{name:"Ayodele KRPC", table:"Table 3", access:"VIP"},
{name:"Ibrahim Yusuf", table:"Table 3", access:"VIP"},

{name:"Osmak Adewumi 1", table:"Table 4", access:"blank"},
{name:"Osmak Adewumi 2", table:"Table 4", access:"blank"},
{name:"Osmak Adewumi 3", table:"Table 4", access:"blank"},
{name:"Juliet 1", table:"Table 4", access:"blank"},
{name:"Temilolu", table:"Table 4", access:"blank"},
{name:"Olamide Ashimi", table:"Table 4", access:"blank"},
{name:"Juliet 2", table:"Table 4", access:"blank"},
{name:"Juliet 3", table:"Table 4", access:"blank"},
{name:"Juliet 4", table:"Table 4", access:"blank"},
{name:"Juliet 5", table:"Table 4", access:"blank"},

{name:"Juliet 6", table:"Table 5", access:"blank"},
{name:"Ayo James 2", table:"Table 5", access:"blank"},
{name:"Ayo James 3", table:"Table 5", access:"blank"},
{name:"Juliet 7", table:"Table 5", access:"blank"},
{name:"Adetoyese Omokanye 2", table:"Table 5", access:"blank"},
{name:"Adetoyese Omokanye 3", table:"Table 5", access:"blank"},
{name:"Femi Omokanye", table:"Table 5", access:"blank"},
{name:"Emerge Omokanye", table:"Table 5", access:"blank"},
{name:"Yetunde Omokanye", table:"Table 5", access:"blank"},
{name:"Bunmi", table:"Table 5", access:"blank"},

{name:"Esther Raji", table:"Table 6", access:"blank"},
{name:"Faith Okafo", table:"Table 6", access:"blank"},
{name:"Funmilayo Olajide", table:"Table 6", access:"blank"},
{name:"Adeola Smith", table:"Table 6", access:"blank"},
{name:"Teslim Aromosodun", table:"Table 6", access:"blank"},
{name:"Tomiwa Ramos", table:"Table 6", access:"blank"},
{name:"Olawunmi Ogunshola", table:"Table 6", access:"blank"},
{name:"Ademola Olaniyan", table:"Table 6", access:"blank"},
{name:"Kayode Igbalaiye", table:"Table 6", access:"blank"},
{name:"Ayobami Igbalaiye", table:"Table 6", access:"blank"},

{name:"Kayode Oduola", table:"Table 7", access:"blank"},
{name:"Kola Oduola", table:"Table 7", access:"blank"},
{name:"Ajibola Oduola", table:"Table 7", access:"blank"},
{name:"Olalere Oduola", table:"Table 7", access:"blank"},
{name:"Musa More", table:"Table 7", access:"blank"},
{name:"Omolara Oduola", table:"Table 7", access:"blank"},
{name:"Yetunde Oduola", table:"Table 7", access:"blank"},
{name:"Adeniran Adesanmi", table:"Table 7", access:"blank"},
{name:"Adeleye Opeseyi", table:"Table 7", access:"blank"},
{name:"Abdul", table:"Table 7", access:"blank"},

{name:"Adepeju Oduola", table:"Table 8", access:"blank"},
{name:"Joy Oduola", table:"Table 8", access:"blank"},
{name:"Tokunbo Aremu", table:"Table 8", access:"blank"},
{name:"Olabisi Oduola", table:"Table 8", access:"blank"},
{name:"Tope Oduola", table:"Table 8", access:"blank"},
{name:"Tope 2 Oduola", table:"Table 8", access:"blank"},
{name:"Hairat Taiye Suleiman", table:"Table 8", access:"blank"},
{name:"Adijat Azeez", table:"Table 8", access:"blank"},
{name:"Nike Obisakin", table:"Table 8", access:"blank"},

{name:"Adegbenga Adesoye", table:"Table 9", access:"blank"},
{name:"Bola Oyinbo", table:"Table 9", access:"blank"},
{name:"Makari", table:"Table 9", access:"blank"},
{name:"Reo", table:"Table 9", access:"blank"},
{name:"Saadatu", table:"Table 9", access:"blank"},
{name:"TallyFancy", table:"Table 9", access:"blank"},
{name:"Maria", table:"Table 9", access:"blank"},
{name:"Olufemi", table:"Table 9", access:"blank"},
{name:"Bolaji Saheed", table:"Table 9", access:"blank"},
{name:"LC", table:"Table 9", access:"blank"},

{name:"Galaxy 1", table:"Table 10", access:"blank"},
{name:"Archetype", table:"Table 10", access:"blank"},
{name:"ARA", table:"Table 10", access:"blank"},
{name:"Dr Lawal 1", table:"Table 10", access:"blank"},
{name:"Galaxy 2", table:"Table 10", access:"blank"},
{name:"Galaxy 3", table:"Table 10", access:"blank"},
{name:"Galaxy 4", table:"Table 10", access:"blank"},
{name:"Galaxy 5", table:"Table 10", access:"blank"},
{name:"Galaxy 6", table:"Table 10", access:"blank"},
{name:"Dr Lawal 2", table:"Table 10", access:"blank"},

{name:"Sidikatu Garba", table:"Table 11", access:"blank"},
{name:"Ramatu Garba", table:"Table 11", access:"blank"},
{name:"Huraira Adamu", table:"Table 11", access:"blank"},
{name:"Linda Abraham", table:"Table 11", access:"blank"},
{name:"Rabiat Isakoto", table:"Table 11", access:"blank"},
{name:"Moriki Zulai Abdulkadir", table:"Table 11", access:"blank"},
{name:"Mr Lanleyin", table:"Table 11", access:"blank"},
{name:"Mrs Lanleyin", table:"Table 11", access:"blank"},
{name:"Ochoche Phoebe", table:"Table 11", access:"blank"},
{name:"Cyprian Asuku", table:"Table 11", access:"blank"},

{name:"Juliet 9", table:"Table 12", access:"blank"},
{name:"Adeola Idowu", table:"Table 12", access:"blank"},
{name:"Lekan Idowu", table:"Table 12", access:"blank"},
{name:"Ali Akaba", table:"Table 12", access:"blank"},
{name:"Patric", table:"Table 12", access:"blank"},
{name:"Bright", table:"Table 12", access:"blank"},
{name:"Segun Erewa", table:"Table 12", access:"blank"},
{name:"Alhaji Nalado", table:"Table 12", access:"blank"},
{name:"Abiodun Ajiboye", table:"Table 12", access:"blank"},
{name:"Segun Ibiwoye Oba", table:"Table 12", access:"blank"},

{name:"Victor Awoniyi Boss", table:"Table 13", access:"blank"},
{name:"Ayinde Akeem Boss", table:"Table 13", access:"blank"},
{name:"Alakija Boss", table:"Table 13", access:"blank"},
{name:"Seun PA 1", table:"Table 13", access:"blank"},
{name:"Seun PA 2", table:"Table 13", access:"blank"},
{name:"Seun PA 3", table:"Table 13", access:"blank"},
{name:"Wale", table:"Table 13", access:"blank"},
{name:"Oladokun Boss", table:"Table 13", access:"blank"},
{name:"Kadijat", table:"Table 13", access:"blank"},
{name:"ITF", table:"Table 13", access:"blank"},

{name:"Fatai Adekoya", table:"Table 14", access:"blank"},
{name:"Ademola Alarape", table:"Table 14", access:"blank"},
{name:"Sadie Namama", table:"Table 14", access:"blank"},
{name:"Debodun", table:"Table 14", access:"blank"},
{name:"Oladapo Taiwo", table:"Table 14", access:"blank"},
{name:"Laide Badmus (Mak)", table:"Table 14", access:"blank"},
{name:"Ronkalid (LC)", table:"Table 14", access:"blank"},
{name:"Juliet 10", table:"Table 14", access:"blank"},
{name:"Juliet 11", table:"Table 14", access:"blank"},
{name:"Juliet 12", table:"Table 14", access:"blank"},

{name:"Tobi Oredugba", table:"Table 15", access:"blank"},
{name:"Kavodel Oredugba", table:"Table 15", access:"blank"},
{name:"Mr Robert", table:"Table 15", access:"blank"},
{name:"Timi Hamilton", table:"Table 15", access:"blank"},
{name:"Tosin Wife", table:"Table 15", access:"blank"},
{name:"Onyinye", table:"Table 15", access:"blank"},
{name:"Onyinye Husband", table:"Table 15", access:"blank"},
{name:"Mrs Fanimora", table:"Table 15", access:"blank"},
{name:"Pastor Fanimora", table:"Table 15", access:"blank"},
{name:"Hon Tubo", table:"Table 15", access:"blank"},

{name:"Bolaji Anny", table:"Table 16", access:"blank"},
{name:"Bolaji 1", table:"Table 16", access:"blank"},
{name:"Fk", table:"Table 16", access:"blank"},
{name:"Flami", table:"Table 16", access:"blank"},
{name:"Nkemka", table:"Table 16", access:"blank"},
{name:"Collins", table:"Table 16", access:"blank"},
{name:"Aliyu Kakangi", table:"Table 16", access:"blank"},
{name:"Abdulmalik Elmarzuq", table:"Table 16", access:"blank"},
{name:"Abdul Futsal", table:"Table 16", access:"blank"},
{name:"Oney", table:"Table 16", access:"blank"},

{name:"Tata Oney Brother", table:"Table 17", access:"blank"},
{name:"Fresh", table:"Table 17", access:"blank"},
{name:"Tj Idowu", table:"Table 17", access:"blank"},
{name:"Jackson", table:"Table 17", access:"blank"},
{name:"Razaq", table:"Table 17", access:"blank"},
{name:"Ibbi", table:"Table 17", access:"blank"},
{name:"Sammy", table:"Table 17", access:"blank"},
{name:"Zizu", table:"Table 17", access:"blank"},
{name:"Princewill", table:"Table 17", access:"blank"},
{name:"Princewill Cor", table:"Table 17", access:"blank"},

{name:"Isah", table:"Table 18", access:"blank"},
{name:"Usman Ahmad Gold", table:"Table 18", access:"blank"},
{name:"Cash", table:"Table 18", access:"blank"},
{name:"Kolade 1", table:"Table 18", access:"blank"},
{name:"Kolade 2", table:"Table 18", access:"blank"},
{name:"Kolade 3", table:"Table 18", access:"blank"},

{name:"Abba Mahmoud SAN", table:"Table 19", access:"blank"},
{name:"Aunty Patty (wife Abba Mahmoud)", table:"Table 19", access:"blank"},
{name:"Isa Aremu", table:"Table 19", access:"blank"},
{name:"Isa Aremu Wife", table:"Table 19", access:"blank"},
{name:"Dr Aminu Gamawa", table:"Table 19", access:"blank"},
{name:"Dr Aminu Gamawa Wife", table:"Table 19", access:"blank"},
{name:"Dr Salma Kolo", table:"Table 19", access:"blank"},
{name:"Uncle Dapo Olorunyomi", table:"Table 19", access:"blank"},
{name:"Dr Audu Grema", table:"Table 19", access:"blank"},
{name:"Dr Audu Grema +1", table:"Table 19", access:"blank"},

{name:"Joseph Ahime", table:"Table 20", access:"blank"},
{name:"Joseph Ahime Wife", table:"Table 20", access:"blank"},
{name:"Samuel Ojo", table:"Table 20", access:"blank"},
{name:"Samuel Ojo Wife", table:"Table 20", access:"blank"},
{name:"Dr Musa A Ibrahim", table:"Table 20", access:"blank"},
{name:"Dr Musa A Ibrahim Wife", table:"Table 20", access:"blank"},
{name:"Tar Ukwo", table:"Table 20", access:"blank"},
{name:"Mr Amara", table:"Table 20", access:"blank"},
{name:"Mr Kayode Bamisile", table:"Table 20", access:"blank"},
{name:"Aunty Ranti", table:"Table 20", access:"blank"},

{name:"Comrade Salisu Nuhu Mohammed", table:"Table 21", access:"blank"},
{name:"Comrade Salisu Nuhu Mohammed Wife", table:"Table 21", access:"blank"},
{name:"Architect Remi Adesoye", table:"Table 21", access:"blank"},
{name:"Architect Remi Adesoye Wife", table:"Table 21", access:"blank"},
{name:"Aunty Sikira", table:"Table 21", access:"blank"},
{name:"Aunty Sikira Daughter", table:"Table 21", access:"blank"},
{name:"Dr Labo", table:"Table 21", access:"blank"},
{name:"Dr Labo Wife", table:"Table 21", access:"blank"},
{name:"Tijjani Mohammed", table:"Table 21", access:"blank"},
{name:"Tijjani Mohammed +1", table:"Table 21", access:"blank"},

{name:"Auwal Rafsanjani", table:"Table 22", access:"blank"},
{name:"Auwal Rafsanjani +1", table:"Table 22", access:"blank"},
{name:"Chief Moji Makojunola", table:"Table 22", access:"blank"},
{name:"Chief Moji Makojunola +1", table:"Table 22", access:"blank"},
{name:"Dr Enyantu Efeni", table:"Table 22", access:"blank"},
{name:"Dr Enyantu Efeni +1", table:"Table 22", access:"blank"},
{name:"Dr Awonusi", table:"Table 22", access:"blank"},
{name:"Dr Awonusi And Wife", table:"Table 22", access:"blank"},
{name:"Dr Ejike Oji", table:"Table 22", access:"blank"},
{name:"Dr Ejike Oji +1", table:"Table 22", access:"blank"},

{name:"Ajin Kallan", table:"Table 23", access:"blank"},
{name:"Aisha Wayi", table:"Table 23", access:"blank"},
{name:"Hajiya Nabila", table:"Table 23", access:"blank"},
{name:"Aisha Abdullahi", table:"Table 23", access:"blank"},
{name:"Aisha Abdullahi +1", table:"Table 23", access:"blank"},
{name:"Ya Zainab Hashim", table:"Table 23", access:"blank"},
{name:"Ya Zainab Hashim +1", table:"Table 23", access:"blank"},
{name:"Ya Alhaji", table:"Table 23", access:"blank"},
{name:"Hannatu Gaji", table:"Table 23", access:"blank"},
{name:"Saadatu Hashim +1", table:"Table 23", access:"blank"},

{name:"Dr Stanley Ukpai", table:"Table 24", access:"blank"},
{name:"Dr Stanley Ukpai Wife", table:"Table 24", access:"blank"},
{name:"Hassan Karofi", table:"Table 24", access:"blank"},
{name:"Hassan Karofi Wife", table:"Table 24", access:"blank"},
{name:"Barr James Emmanuel", table:"Table 24", access:"blank"},
{name:"Barr James Emmanuel Wife", table:"Table 24", access:"blank"},
{name:"Umar Kawu", table:"Table 24", access:"blank"},
{name:"Aisha Bello", table:"Table 24", access:"blank"},
{name:"Alhaji Mansoor", table:"Table 24", access:"blank"},
{name:"Alhaji Mansoor Wife", table:"Table 24", access:"blank"},

{name:"Henry Mang", table:"Table 25", access:"blank"},
{name:"Atida NHRC", table:"Table 25", access:"blank"},
{name:"Dr Sa’adatu Baba", table:"Table 25", access:"blank"},
{name:"Uncle Jhonny", table:"Table 25", access:"blank"},
{name:"Hansatu", table:"Table 25", access:"blank"},
{name:"Chief Oyebisi", table:"Table 25", access:"blank"},
{name:"Dr Sadiq", table:"Table 25", access:"blank"},
{name:"Mercy", table:"Table 25", access:"blank"},
{name:"Kareem", table:"Table 25", access:"blank"},
{name:"Kiki", table:"Table 25", access:"blank"},

{name:"Kafayat", table:"Table 26", access:"blank"},
{name:"Abdulmalik", table:"Table 26", access:"blank"},
{name:"Tosin Mummyyo", table:"Table 26", access:"blank"},
{name:"Folake Familusi", table:"Table 26", access:"blank"},
{name:"Folake Familusi +1", table:"Table 26", access:"blank"},
{name:"Stephanie Penson", table:"Table 26", access:"blank"},
{name:"Tobi Lekan", table:"Table 26", access:"blank"},
{name:"Fatima Ganduje", table:"Table 26", access:"blank"},
{name:"Jafi", table:"Table 26", access:"blank"},
{name:"Jafi +1", table:"Table 26", access:"blank"},

{name:"Pleasant", table:"Table 27", access:"blank"},
{name:"Billie", table:"Table 27", access:"blank"},
{name:"Felicia", table:"Table 27", access:"blank"},
{name:"Celina", table:"Table 27", access:"blank"},
{name:"Tsola", table:"Table 27", access:"blank"},
{name:"Karl", table:"Table 27", access:"blank"},
{name:"Hana +1", table:"Table 27", access:"blank"},
{name:"Hana Plus", table:"Table 27", access:"blank"},

{name:"Abdulmalik Sani", table:"Table 28", access:"blank"},
{name:"Sanusi", table:"Table 28", access:"blank"},
{name:"Kolade Txy", table:"Table 28", access:"blank"},
{name:"Okono", table:"Table 28", access:"blank"},
{name:"Tosin Alade", table:"Table 28", access:"blank"},
{name:"Gwani", table:"Table 28", access:"blank"},
{name:"Ahmed Tura", table:"Table 28", access:"blank"},
{name:"Shegun Ogunlesi", table:"Table 28", access:"blank"},
{name:"Teejay Elias", table:"Table 28", access:"blank"},
{name:"Ahmed Gold", table:"Table 28", access:"blank"},
{name:"Marvelous", table:"Table 28", access:"blank"},
{name:"Rufia", table:"Table 28", access:"blank"},
{name:"Alhaji Ismail", table:"Table 28", access:"blank"},

{name:"Esther Charles", table:"Table 29", access:"blank"},
{name:"Zubaida Onono", table:"Table 29", access:"blank"},
{name:"Jessica Odudu", table:"Table 29", access:"blank"},
{name:"Jessica Odjugo", table:"Table 29", access:"blank"},
{name:"Khadijah", table:"Table 29", access:"blank"},
{name:"Queenth", table:"Table 29", access:"blank"},
{name:"Asmau", table:"Table 29", access:"blank"},
{name:"Carmen Ekpo", table:"Table 29", access:"blank"},
{name:"Ifedapo Ekpo", table:"Table 29", access:"blank"},

{name:"Hana Hashim", table:"Table 30", access:"blank"},
{name:"Zuwaira Hashim", table:"Table 30", access:"blank"},
{name:"Umar Jalabu", table:"Table 30", access:"blank"},
{name:"Rabia H", table:"Table 30", access:"blank"}

];
guests.forEach(g => {
  if (!g.access || g.access === "blank") {
    g.access = "Regular";
  }
});

let currentGuest = null;

function checkGuest(){

let nameInput = document.getElementById("guestName").value.trim().toLowerCase();

let guest = guests.find(g => g.name.toLowerCase() === nameInput);

if(guest){

currentGuest = guest;

document.getElementById("inputCard").classList.add("hidden");
document.getElementById("resultCard").classList.remove("hidden");

document.getElementById("welcomeText").innerText = "Welcome, " + guest.name + "!";

document.getElementById("tableN").innerText = guest.table;

document.getElementById("access").innerText = guest.access;

}
else{

document.getElementById("error").innerText = "Sorry, you are not on the guest list.";

}

}

function showTableGuests(){

let list = document.getElementById("tableGuests");
let button = document.getElementById("viewGuestsBtn");

list.innerHTML = "";

let sameTable = guests.filter(g => g.table === currentGuest.table);

sameTable.forEach(g => {

let li = document.createElement("li");
li.innerText = g.name ;
list.appendChild(li);

});

list.classList.toggle("hidden");
button.classList.toggle("active");

}

function goBack(){

document.getElementById("resultCard").classList.add("hidden");
document.getElementById("inputCard").classList.remove("hidden");

document.getElementById("guestName").value="";
document.getElementById("tableGuests").classList.add("hidden");

}