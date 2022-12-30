 let saturate = document.getElementById("saturate");
 let contrast = document.getElementById("contrast");
 let brightness = document.getElementById("brightness");
 let sepia = document.getElementById("sepia");
 let grayScale = document.getElementById("grayscale");
 let blur = document.getElementById("blur");
 let hueRotate = document.getElementById("hue-rotate");

 let upload = document.getElementById("upload");
 let download = document.getElementById("download");
 let img = document.getElementById("img");
 let image_holder = document.querySelector('.image-holder');
 let remove_img_btn = document.querySelector('#remove-img-btn');

 let reset = document.querySelector('span');
 let imgBox = document.querySelector('.img-box');

 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext('2d');

function resetValue(){
    ctx.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayScale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}


 window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
    // saturate.style.display = 'none';
    // contrast.style.display = 'none';
    // brightness.style.display = 'none';
    // sepia.style.display = 'none';
    // grayScale.style.display = 'none';
    // blur.style.display = 'none';
    // hueRotate.style.display = 'none';
 }
 upload.onchange = function(){
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';
    saturate.style.display = 'block';
    contrast.style.display = 'block';
    brightness.style.display = 'block';
    sepia.style.display = 'block';
    grayScale.style.display = 'block';
    blur.style.display = 'block';
    hueRotate.style.display = 'block';
    reset.style.transition = '0.9s';
    reset.style.boxShadow = '0.1px 9px 15px 10px rgba(50, 50, 50, 0.1)';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
        remove_img_btn.style.display = 'block';
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0,0, canvas.width,canvas.height);
        img.style.display = 'none'
    }
 }

 let filters = document.querySelectorAll("ul li input, button");
 filters.forEach(filter =>{
    filter.addEventListener('input', function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        grayscale(${grayScale.value})
      `
        ctx.drawImage(img, 0,0, canvas.width,canvas.height);
    })
 } )

download.onclick = function(){
    download.href = canvas.toDataURL();    
}

remove_img_btn.addEventListener('click', function(){
    img.style.display = "none";
    upload.style.display = 'none';
    imgBox.style.display = 'none';
    ctx.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayScale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
})