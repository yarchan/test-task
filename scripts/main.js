//Выбор типа системы
const updateInput = (liElement) => {
  const inputElement = document.getElementById("system-type");
  const labelElement = document.getElementById("dropdown-label");
  const newText = liElement.textContent;
  
  inputElement.value = newText;
  labelElement.textContent =  newText;
}

//Скрытие списка типов систем
const dropdownList = document.getElementById("dropdown-list");
const toggleDropdown=()=> {
  dropdownList.classList.toggle("closed");
}

document.getElementById("dropdown-toggle").addEventListener("click", ()=>{
  if(dropdownList.classList.contains("closed")){
    toggleDropdown()
  }else{
    setTimeout(()=>{toggleDropdown()
    },300)
  }
});

//Изменение label на название загруженного файла
const fileInput = document.getElementById("file-upload");
const fileLabel = document.getElementById("file-label");

fileInput.addEventListener("change", ()=> {
  if (fileInput.files.length > 0) {
    fileLabel.innerText = fileInput.files[0].name;
  } else {
    fileLabel.innerText = "Загрузить файл";
  }
});

// Слайдер
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", ()=> {
  const percent = slider.value;
  sliderValue.innerText = percent + "%";
});
