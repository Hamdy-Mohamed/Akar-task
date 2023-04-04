
const changeColor = document.querySelector(".form :nth-child(5)")
const imgInput = document.querySelector(".edit")

imgInput.addEventListener("click",()=>{
    changeColor.style.color = "black"
})


const input = document.querySelector('input.edit[type="file"]');
input.addEventListener("change", function () {
  const file = input.files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      input.style.backgroundImage = `url('${reader.result}')`;
      input.style.backgroundSize = "cover"
      input_two.style.border = "none";
      input_two.style.outline = "none";
    },
    false
  );
  if (file) {
    reader.readAsDataURL(file);
  }
});






const input_two = document.querySelector('input.edit_two[type="file"]');
input_two.addEventListener("change", function () {
  const file = input_two.files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      input_two.style.backgroundImage = `url('${reader.result}')`;
      input_two.style.backgroundSize = "cover";
      input_two.style.border = "none";
      input_two.style.outline = "none";
    },
    false
  );
  if (file) {
    reader.readAsDataURL(file);
  }
});
