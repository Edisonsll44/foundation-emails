
//https://s3.us-east-2.amazonaws.com/gn-resources.developppm.com/public/maijet/Discover/header/HeaderCanjeCopago.png
const awsUrl = "https://s3.us-east-2.amazonaws.com/gn-resources.developppm.com/public";
const endPointBackgroundImageWhiteMode = awsUrl + "/maijet/Discover/header/FondoBlanco.png";


const endPointBackgroundTwitterWhiteMode = awsUrl +"/maijet/Discover/footer/RedesSociales/twt.png";
const endPointBackgroundFacebookWhiteMode = awsUrl +"/maijet/Discover/footer/RedesSociales/fb.png";
const endPointBackgroundInstagramWhiteMode = awsUrl + "/maijet/Discover/footer/RedesSociales/ig.png";
const endPointBackgroundYouTubeWhiteMode = awsUrl +"/maijet/Discover/footer/RedesSociales/ytb.png";

const endPointBackgroundHeaderChangeProductsWhiteMode= "",endPointBackgroundFooterChangeProductsWhiteMode ="";

const array1 = ["CanjeExitosoProductos","CanjeExitosoCopago"]
$("document").ready(function () {
   const title = $(document).find("title").text();
   const template = array1.find(element => element === title);
   switch (template) {
    case "CanjeExitosoProductos":
        clearAttributes();
        endPointBackgroundHeaderChangeProductsWhiteMode = awsUrl+ "/maijet/Discover/header/HeaderCanjeCopago.png";
        endPointBackgroundFooterChangeProductsWhiteMode = awsUrl +"/maijet/Discover/footer/Necesitas_Ayuda_ConLogo_Whatsapp.png";
        setImages(endPointBackgroundHeaderChangeProductsWhiteMode,endPointBackgroundFooterChangeProductsWhiteMode);
        break;
   
    default:
        clearAttributes();
        break;
   }
    
});

function setImages(header, footer) {
    $("#header").css('background-image', 'url(' + header + ')');
    $(".table-module").css('background-image','url('+endPointBackgroundImageWhiteMode+')');
    $("#footer").css('background-image','url('+footer+')');
    $("#twitter").attr('src',endPointBackgroundTwitterWhiteMode);
    $("#facebook").attr('src',endPointBackgroundFacebookWhiteMode);
    $("#instagram").attr('src',endPointBackgroundInstagramWhiteMode);
    $("#youtube").attr('src',endPointBackgroundYouTubeWhiteMode);
}
function clearAttributes() {
    $("#header").css('background-image','');
    $(".table-module").css('background-image','');
    $("#footer").css('background-image','');
    $("#twitter").attr('src','');
    $("#facebook").attr('src','');
    $("#instagram").attr('src','');
    $("#youtube").attr('src','');
}