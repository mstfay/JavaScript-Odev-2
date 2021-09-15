let myNodelist = document.getElementsByTagName("li") // "li" tagında olan elementleri değişkene atadık.

for (let i = 0; i < myNodelist.length; i++) { // bu değişkeni for döngüsüne soktuk.
  let span = document.createElement("span")  // span adında bir element oluşturduk.
  let txt = document.createTextNode("\u00D7") // çarpı işareti için x' in unicode karşılığını yazdık.
  span.className = "close"; // oluşturduğumuz span elementine "close" adında bir class oluşturduk.
  span.appendChild(txt); // span elementinin içerisine x işaretini girdirdik.
  myNodelist[i].appendChild(span) // değişken sayısı kadar span oluşturduk.
}

let close = document.getElementsByClassName("close"); // "close" class' ında olan olan elementleri atadık
for (let i = 0; i < close.length; i++) { // değişken uzunluğunu bir döngüye soktuk
  close[i].onclick = function () { // bu değişkenin, tıklandığında çalışması için onclick ekledik.
    let div = this.parentElement // buna parent elementi olarak div ekledik.
    div.style.display = "none" // eklediğimiz div' in style' ına display olarak none tanımladık.
  };
}

let list = document.querySelector("ul") // unordered list' i list değişkenine atadık.
list.addEventListener("click", formHandler) // tıklama algılayan bir event ekledik
 function formHandler(event) { // formHandler adındaki fonksiyonuna "event" değişkenini girdik.
    if (event.target.tagName === "li") { // event' in hedef tag name' inin "li" olduğunu belirttik.
      event.target.classList.toggle("checked"); // hedef classList' e kontrol edildi ekliyoruz.
    }
  } false

function newElement() {
  let li = document.createElement("li")  // li elementini li değişkenine atadık.
  let inputValue = document.getElementById("task").value; // Girilecek verinin id' sini değişkene atadık
  let t = document.createTextNode(inputValue) // girilecek değeri t değişkenine atadık.
  li.appendChild(t) // t değişkenini li değişkeninin içine atadık.
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) { 
    // girilen veri boş karakter veya özel karakter içeriyorsa error verdirdik.
    $(".error").toast("show");
  } else {
    // girilen veri yasaksız karakter ise onay verdirdik.
    $(".success").toast("show");
    document.getElementById("list").appendChild(li); // list id' li listeye li değişkenini eklettik.
  }

  document.getElementById("task").value = ""  // veri gönderilince kendini sıfırlaması için yazdık.

// ***********     AŞAĞIDA YENİ EKLENEN LİSTE VERİSİNE GEREKLİ İŞLEMLERİ TEKRAR YAPTIK    ************ //

  let span = document.createElement("SPAN")
  let txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  li.appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}


