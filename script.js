const search = () => {
    const searchboxx = document.getElementById("searchbox").value.toUpperCase();
    const storeitems = document.getElementById("products");
    const product = document.querySelectorAll(".pro-card");
    const pname = storeitems.getElementsByTagName("p");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('p')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchboxx) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

function OpenProductPage() {
    window.location.href = "Product.html";
}
window.onload = function () {
    document.getElementById("searchbox").focus();
};