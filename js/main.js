var command116, command113, command18112, armor_stand113, command116ELEM, command113ELEM, command18112ELEM, armor_stand113ELEM, copyBtn;
command116ELEM = document.getElementById("command116");
command113ELEM = document.getElementById("command113");
command18112ELEM = document.getElementById("command18112");
armor_stand113ELEM = document.getElementById("armor_stand113");
copyBtn  = document.getElementsByClassName("copyBtn");
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="imgURL"]');



    $('.validate-form').on('submit',function(event){
        var check = true;

        event.preventDefault();

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        } else {
            generate($(name).val().trim());
        }
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

    function generate(inputUrl) {
            var glowstone = document.getElementById("glowstone");
            glowstone.src = "https://cors.flawcra.cc/"+btoa(inputUrl);
            glowstone.onload = function() {
                var imgUrl = glowstone.src;
                command116ELEM = document.getElementById("command116");
                command113ELEM = document.getElementById("command113");
                command18112ELEM = document.getElementById("command18112");
                armor_stand113ELEM = document.getElementById("armor_stand113");
                var texJson = btoa("{\"textures\":{\"SKIN\":{\"url\":\"" + inputUrl + "\"}}}");
                var uuid = null;
                var newuuid = null;
                 $.ajax({
                    url: "https://www.uuidgenerator.net/api/version4/",
                    type: 'get',
                    async: false,
                    success: function(data) {
                        uuid = data;
                    } 
                 });
                 $.ajax({
                    url: "https://flawcra.cc/mcskull/newUUID.php",
                    type: 'get',
                    async: false,
                    success: function(data) {
                        newuuid = data;
                    } 
                 });

                command116ELEM.innerText = "/give @p minecraft:player_head{display:{Name:\"{\\\"text\\\":\\\"FlawCra SkullHack\\\"}\"},SkullOwner: { Id: [I;" + newuuid + "],Properties: { textures:[{ Value: \"" + texJson + "\"}]}}} 1";
                command113ELEM.innerText = "/give @p minecraft:player_head{display:{Name:\"{\\\"text\\\":\\\"FlawCra SkullHack\\\"}\"},SkullOwner: { Id: \"" + uuid + "\",Properties: { textures:[{ Value: \"" + texJson + "\"}]}}} 1";
                command18112ELEM.innerText = "/give @p skull 1 3 {display:{Name:\"FlawCra SkullHack\"},SkullOwner:{Id:\"" + uuid + "\",Properties:{textures:[{Value:\"" + texJson + "\"}]}}}";
                armor_stand113ELEM.innerText = "/summon minecraft:armor_stand ~ ~1 ~ {ShowArms:1b,NoBasePlate:1b,ArmorItems:[{id:\"minecraft:leather_boots\",Count:1b},{id:\"minecraft:leather_leggings\",Count:1b},{id:\"minecraft:leather_chestplate\",Count:1b},{id:\"minecraft:player_head\",Count:1b,tag:{SkullOwner:{Id:\""+ uuid + "\",Properties:{textures:[{Value:\""+ texJson + "\"}]}}}}]}";
                for (var item of copyBtn) {
                    item.style.display = "block"
                }
            }
            glowstone.style = "display: block;";
    }

    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }

    var base64 = {};

base64.encode = function(unencoded) {
  return new Buffer(unencoded || '').toString('base64');
};

base64.decode = function(encoded) {
  return new Buffer(encoded || '', 'base64').toString('utf8');
};

base64.urlEncode = function(unencoded) {
  var encoded = base64.encode(unencoded);
  return encoded.replace('+', '-').replace('/', '_').replace(/=+$/, '');
};

base64.urlDecode = function(encoded) {
  encoded = encoded.replace('-', '+').replace('_', '/');
  while (encoded.length % 4)
    encoded += '=';
  return base64.decode(encoded);
};