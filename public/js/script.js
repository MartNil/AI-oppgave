const cvDiv = document.getElementById("cv")
const createBlockBtn = document.getElementById("createBlock")
const clearBlocksButton = document.getElementById("clearBlocks")
console.log(createBlockBtn)
console.log(cvDiv)
createBlockBtn.addEventListener("click", (event) => {
    console.log("dwwdwd")
    cvDiv.innerHTML += `
    <div class="block">
    <input type="text" name="title" class="title">
    <textarea name="text" class="text" cols="30" rows="10"></textarea>
</div>
    `
})