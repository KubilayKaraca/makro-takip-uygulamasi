const kaydet_butonu_1 = document.getElementById("kaydet_1");
let hedef_su = 0;
let h2_1 = document.getElementById("birinci_h2");
let besin_dizisi = [];
function baslangic(){
    if (localStorage.getItem("hedef_su") !== null){
        hedef_su = Number(localStorage.getItem("hedef_su"));
        guncelle_su_grafigi(icilen_su, hedef_su);
    }
    if (localStorage.getItem("icilen_su") !== null){
        icilen_su = Number(localStorage.getItem("icilen_su"));
        guncelle_su_grafigi(icilen_su, hedef_su);
    }
    h2_1.textContent = "İçilen Su: " + icilen_su + " ml / Hedef Su Miktarı: " + hedef_su + " ml";
    if (localStorage.getItem("dizi") == null && localStorage.getItem("hedef_kalori") !== null){
        hedef_kalori = Number(localStorage.getItem("hedef_kalori"));
        guncelle_kalori_grafigi(toplam_kalori, hedef_kalori);
        h2_2.textContent = "Alınan Kalori: " + toplam_kalori + " kcal / Hedef Kalori: " + hedef_kalori + " kcal";
    }
    if (localStorage.getItem("dizi") !== null){
        hedef_kalori = Number(localStorage.getItem("hedef_kalori"));
        gelen_dizi = localStorage.getItem("dizi");
        besin_dizisi = JSON.parse(gelen_dizi);
        listeyi_ciz(besin_dizisi);
    }
}

kaydet_butonu_1.addEventListener("click", function(){
    let hedef_su_input = document.getElementById("hedef_su_girisi");
    hedef_su = hedef_su_input.value;
    hedef_su_input.value = "";
    if (hedef_su <= 0){
        alert("Lütfen geçerli bir hedef su miktarı giriniz!");
        return;
    }
    localStorage.setItem("hedef_su", hedef_su);
    guncelle_su_grafigi(icilen_su, hedef_su);
    h2_1.textContent = "İçilen Su: " + icilen_su + " ml / Hedef Su Miktarı: " + hedef_su + " ml"; 
});




const ekle_butonu_1 = document.getElementById("ekle_1");
let icilen_su = 0;

ekle_butonu_1.addEventListener("click", async function(){
    let icilen_su_input = document.getElementById("icilen_su_girisi");
    let su = icilen_su_input.value;
    icilen_su_input.value = "";
    if (su <= 0){
        alert("Lütfen geçerli bir su miktarı giriniz!");
        return;
    }
    if (hedef_su == 0){
        alert("Lütfen önce hedef su miktarını giriniz!");
        return;
    }
    icilen_su = icilen_su + Number(su);
    localStorage.setItem("icilen_su", icilen_su);
    guncelle_su_grafigi(icilen_su, hedef_su);
    h2_1.textContent = "İçilen Su: " + icilen_su + " ml / Hedef Su Miktarı: " + hedef_su + " ml";
    if (icilen_su >= hedef_su && hedef_su > 0){
        alert("Tebrikler! Hedef su miktarına ulaştınız!");
    }
});




const kaydet_butonu_2 = document.getElementById("kaydet_2");
let hedef_kalori = 0;
let h2_2 = document.getElementById("ikinci_h2");

kaydet_butonu_2.addEventListener("click", function(){
    let hedef_kalori_input = document.getElementById("hedef_kalori_girisi");
    hedef_kalori = hedef_kalori_input.value;
    hedef_kalori_input.value = "";
    if (hedef_kalori <= 0){
        alert("Lütfen geçerli bir hedef kalori miktarı giriniz!");
        return;
    }
    localStorage.setItem("hedef_kalori", hedef_kalori);
    guncelle_kalori_grafigi(toplam_kalori, hedef_kalori);
    h2_2.textContent = "Alınan Kalori: " + toplam_kalori + " kcal / Hedef Kalori: " + hedef_kalori + " kcal";
});




const ekle_butonu_2 = document.getElementById("ekle_2");
let besin_input = document.getElementById("besin_girisi");
let gramaj_input = document.getElementById("gramaj_girisi");
const liste = document.getElementById("besin_listesi");
let besin_verileri;
let toplam_kalori = 0;
let makrolar = document.getElementById("makrolar");
let toplam_karbonhidrat = 0;
let toplam_yag = 0;
let toplam_protein = 0;
async function besin_bilgisi_getir(x){
    let getirilen_cevap = await fetch(x)
    besin_verileri = await getirilen_cevap.json();
}

ekle_butonu_2.addEventListener("click", async function(){
    const kullanici_girisi = {
        id: Date.now() ,
        girilen_besin: besin_input.value ,
        girilen_gramaj: gramaj_input.value
    }
    besin_input.value = "";
    gramaj_input.value = "";
    if (hedef_kalori == 0){
        alert("Lütfen önce hedef kalori miktarını giriniz!");
        return;
    }
    besin_dizisi.push(kullanici_girisi);
    let paketli_dizi = JSON.stringify(besin_dizisi);
    localStorage.setItem("dizi", paketli_dizi);
    liste.innerHTML = "";
    toplam_kalori = 0;
    toplam_karbonhidrat = 0;
    toplam_yag = 0;
    toplam_protein = 0;
    listeyi_ciz(besin_dizisi);
})




const sifirla_butonu = document.getElementById("sifirla");

sifirla_butonu.addEventListener("click", function(){
    localStorage.removeItem("hedef_su");
    localStorage.removeItem("icilen_su");
    localStorage.removeItem("dizi");
    localStorage.removeItem("hedef_kalori");
    localStorage.removeItem("toplam_kalori");
    localStorage.removeItem("toplam_karbonhidrat");
    localStorage.removeItem("toplam_yag");
    localStorage.removeItem("toplam_protein");
    toplam_kalori = 0;
    hedef_kalori = 0;
    besin_dizisi = [];
    h2_2.textContent = "Alınan Kalori: 0 kcal / Hedef Kalori: 0 kcal";
    liste.innerHTML = "";
    h2_1.textContent = "İçilen Su: 0 ml / Hedef Su Miktarı: 0 ml";
    hedef_su = 0;
    icilen_su = 0;
    toplam_karbonhidrat = 0;
    toplam_yag = 0;
    toplam_protein = 0;
    makrolar.textContent = "Toplam Karbonhidrat: 0 g / Toplam Yağ: 0 g / Toplam Protein: 0 g";
    guncelle_su_grafigi(icilen_su, 1);
    guncelle_kalori_grafigi(toplam_kalori, 1);
});




let baslangic_kalan_su = (hedef_su > 0) ? (hedef_su - icilen_su) : 1;
let grafik_1 = document.getElementById("su_grafigi").getContext("2d");
function guncelle_su_grafigi(yeni_icilen_su, yeni_hedef_su){
    if((yeni_hedef_su - yeni_icilen_su) < 0 ){
        ilk_grafik.data.datasets[0].data = [yeni_hedef_su, 0];
        ilk_grafik.update();
    }
    else{
        ilk_grafik.data.datasets[0].data = [yeni_icilen_su, yeni_hedef_su - yeni_icilen_su];
        ilk_grafik.update();
    }
}

let ilk_grafik = new Chart(grafik_1, {
    type: "pie",
    data: {
        labels: ["İçilen Su", "Kalan Su"],
        datasets: [{
            label: "Su Miktarı (ml)",
            data: [icilen_su, baslangic_kalan_su],
            backgroundColor: ["#b51b10", "#ebaea9"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
    }
});




let baslangic_kalan_kalori = (hedef_kalori > 0) ? (hedef_kalori - toplam_kalori) : 1;
let grafik_2 = document.getElementById("kalori_grafigi").getContext("2d");
function guncelle_kalori_grafigi(yeni_toplam_kalori, yeni_hedef_kalori){
    if ((yeni_hedef_kalori - yeni_toplam_kalori) < 0){
        ikinci_grafik.data.datasets[0].data = [yeni_hedef_kalori, 0];
        ikinci_grafik.update();
    }
    else{
        ikinci_grafik.data.datasets[0].data = [yeni_toplam_kalori, yeni_hedef_kalori - yeni_toplam_kalori];
        ikinci_grafik.update();
    }
}

let ikinci_grafik = new Chart(grafik_2, {
    type: "pie",
    data: {
        labels: ["Alınan Kalori", "Kalan Kalori"],
        datasets: [{
            label: "Kalori Miktarı (kcal)",
            data: [toplam_kalori, baslangic_kalan_kalori],
            backgroundColor: ["#b51b10", "#ebaea9"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
    }
});




async function bilgi_al(x){
    let aranacak_besin = x.toLowerCase();
    let güvenli_metin = encodeURIComponent(aranacak_besin);
    let url = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=29PvpGXj2YmGYEv7eE8U3nWNvf4ByOThz39hc8T0&query=" + güvenli_metin + "&dataType=Foundation,SR%20Legacy";
    await besin_bilgisi_getir(url);
}

async function listeyi_ciz(dizi){
    for (let element of dizi){
        await bilgi_al(element.girilen_besin);
        if (besin_verileri.foods.length === 0) {
            alert("Besin bulunamadı! Lütfen geçerli bir İngilizce besin adı giriniz.");
            return; 
        }
        let dogru_besin = besin_verileri.foods.find(besin => 
            besin.foodNutrients.some(n => n.nutrientId === 1003) &&
            besin.foodNutrients.some(n => n.nutrientId === 1008)
        );
        if (!dogru_besin) {
            alert("Bu besin için geçerli makro değerleri bulunamadı!");
            return; 
        }
        let besin_degerleri = dogru_besin.foodNutrients;
        let kalori_100g = besin_degerleri.find(n => n.nutrientId === 1008)?.value || 0;
        let protein_100g = besin_degerleri.find(n => n.nutrientId === 1003)?.value || 0;
        let karbonhidrat_100g = besin_degerleri.find(n => n.nutrientId === 1005)?.value || 0;
        let yag_100g = besin_degerleri.find(n => n.nutrientId === 1004)?.value || 0;
        let kalori = Math.round((kalori_100g / 100) * Number(element.girilen_gramaj));
        let karbonhidrat = Math.round((karbonhidrat_100g / 100) * Number(element.girilen_gramaj));
        let yag = Math.round((yag_100g / 100) * Number(element.girilen_gramaj));
        let protein = Math.round((protein_100g / 100) * Number(element.girilen_gramaj));
        toplam_kalori += kalori;
        localStorage.setItem("toplam_kalori", toplam_kalori);
        h2_2.textContent = "Alınan Kalori: " + toplam_kalori + " kcal / Hedef Kalori: " + hedef_kalori + " kcal";
        const yeni_liste_elemani_taslagi = document.createElement("div");
        const listeye_eklenen_besin = document.createElement("span");
        const sil_butonu = document.createElement("button");
        yeni_liste_elemani_taslagi.classList.add("giris_bolumu");
        listeye_eklenen_besin.textContent = element.girilen_gramaj + " gram " + dogru_besin.description + " / " + kalori + " kcal" + " / " + karbonhidrat + " g Karbonhidrat" + " / " + yag + " g Yağ" + " / " + protein + " g Protein";
        sil_butonu.classList.add("dugme");
        sil_butonu.textContent = "Sil";
        yeni_liste_elemani_taslagi.appendChild(listeye_eklenen_besin);
        yeni_liste_elemani_taslagi.appendChild(sil_butonu);
        const yeni_liste_elemani = document.createElement("li");
        yeni_liste_elemani.appendChild(yeni_liste_elemani_taslagi);
        yeni_liste_elemani.classList.add("liste_elemani");
        liste.appendChild(yeni_liste_elemani);
        toplam_karbonhidrat += karbonhidrat;
        toplam_yag += yag;
        toplam_protein += protein;
        localStorage.setItem("toplam_karbonhidrat", toplam_karbonhidrat);
        localStorage.setItem("toplam_yag", toplam_yag);
        localStorage.setItem("toplam_protein", toplam_protein);
        makrolar.textContent = "Toplam Karbonhidrat: " + toplam_karbonhidrat + " g / Toplam Yağ: " + toplam_yag + " g / Toplam Protein: " + toplam_protein + " g";
        guncelle_kalori_grafigi(toplam_kalori, hedef_kalori);
        sil_butonu.addEventListener("click", function(){
            toplam_kalori -= kalori;
            localStorage.setItem("toplam_kalori", toplam_kalori);
            h2_2.textContent = "Alınan Kalori: " + toplam_kalori + " kcal / Hedef Kalori: " + hedef_kalori + " kcal";
            toplam_karbonhidrat -= karbonhidrat;
            toplam_yag -= yag;
            toplam_protein -= protein;
            localStorage.setItem("toplam_karbonhidrat", toplam_karbonhidrat);
            localStorage.setItem("toplam_yag", toplam_yag);
            localStorage.setItem("toplam_protein", toplam_protein);
            makrolar.textContent = "Toplam Karbonhidrat: " + toplam_karbonhidrat + " g / Toplam Yağ: " + toplam_yag + " g / Toplam Protein: " + toplam_protein + " g";
            guncelle_kalori_grafigi(toplam_kalori, hedef_kalori);
            besin_dizisi = besin_dizisi.filter(function(x){
                return x.id !== element.id;
            });
            let paketli_dizi = JSON.stringify(besin_dizisi);
            localStorage.setItem("dizi", paketli_dizi);
            liste.removeChild(yeni_liste_elemani);
        });
        if (toplam_kalori >= hedef_kalori && hedef_kalori > 0){
            alert("Hedef kalori miktarına ulaştınız!");
        }
    }
}

baslangic();