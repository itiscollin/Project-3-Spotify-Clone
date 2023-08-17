var TOKEN ="";
var client_id = "912079a86db04b22a28dd8ed10887451";
var redirect_uri = window.location.origin;
var scope = "user-read-private user-read-email user-top-read";

function authorize(){
    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    window.open(url,"_self")
}


function extractTokenFromURI(){
    var hash = window.location.hash;
    if (hash && hash.includes("#access_token=",)){
        var url = hash.replace("#access_token=", "");
        var chunks = url.split("&");
        var token = chunks[0]
        return token
    }
    return null
}
window.addEventListener("load", function(){
    TOKEN = extractTokenFromURI();
    if (TOKEN){
        console.log("Token", TOKEN);
    } else {
    authorize()}
} )