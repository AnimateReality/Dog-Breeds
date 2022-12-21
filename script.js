const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = '#5bbef7';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
var breeds = ["Affenpinscher", "African", "Airedale", "Akita", "Appenzeller", "Australian", "Basenji", "Beagle", "Bluetick", "Borzoi", "Boxer", "Brabancon", "Briard", "Norwegian Buhund", "Staffordshire Bullterrier", "Bulldog", "Bullmastiff", "Cairn", "Canaan Dog", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested", "Chow", "Clumber", "Cocker Spaniel", "Collie", "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandie Dinmont", "Doberman Pinscher", "English Foxhound", "English Setter", "English Springer Spaniel", "Entlebucher", "Eskimo Dog", "Field Spaniel", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "French Bulldog", "German Pinscher", "German Shepherd", "German Shorthaired Pointer", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound", "Harrier", "Havanese", "Ibizan Hound", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Japanese Chin", "Keeshond", "Kerry Blue Terrier", "Komondor", "Kuvasz", "Labrador Retriever", "Lakeland Terrier", "Lhasa Apso", "Lowchen", "Maltese", "Manchester Terrier", "Mastiff", "Mexican Hairless", "Miniature Pinscher", "Miniature Schnauzer", "Newfoundland", "Norfolk Terrier", "Norwegian Elkhound", "Norwich Terrier", "Old English Sheepdog", "Otterhound", "Papillon", "Pekingese", "Pembroke Welsh Corgi", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Pointer", "Polish Lowland Sheepdog", "Pomeranian", "Poodle", "Portuguese Water Dog", "Pug", "Puli", "Rhodesian Ridgeback", "Rottweiler", "Saint Bernard", "Saluki", "Samoyed", "Schipperke", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Shetland Sheepdog", "Shih Tzu", "Siberian Husky", "Silky Terrier", "Skye Terrier", "Smooth Fox Terrier"]

var table = document.getElementsByClassName("container")[0];
for (var i = 0; i < breeds.length; i++) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.innerHTML = breeds[i];
    row.appendChild(cell);
    table.appendChild(row);
  }
