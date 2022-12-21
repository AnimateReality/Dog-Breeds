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

  const dogText = document.querySelector('.dog-text');
  const nextBtn = document.querySelector('.next-btn');
  const answerText = document.querySelector('.answer-text');


  nextBtn.addEventListener('click', getDog);
  getDog();

  function getDog() {
      fetch('https://dog.ceo/api/breeds/image/random', {
          headers: {
              'Accept': 'application/json'
          }
          // gets a random dog
      }).then(function (response) {
          return response.json();
      }).then(function (data) {

          let dog = data.message.split('/')[4]
          dogText.innerText = dog;
          document.getElementById('image').src = data.message;
      });
  }

  function page1() {
      // get the value of the "pass" input field
      var pass = document.chapter.pass.value;

      // create the regular expression so it doesnt penalize based on capitals and -
      var regex = /^[A-Za-z]*-?[A-Za-z]*$/i;


      // check if the value of "pass" input field matches the regular expression
      if (regex.test(pass) && pass.toLowerCase()  == dogText.innerText.toLowerCase()) {
          answerText.innerText = "Correct! you can claim a treat."
      } else {
          answerText.innerText = "incorrect. Try again"
      }
  }
// submit button checks whether answer is correct and displays text base on answer
  function toggleText() {
      var x = document.getElementById("Myid");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }