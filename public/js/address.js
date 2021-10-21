//<script>
        function formValidate() {
            var name = document.getElementById("name").value;
            var mobile = document.getElementById("mobilenum").value;
            var  pin = document.getElementById("pin").value;
            var address = document.getElementById("addresshome").value;
            var locality = document.getElementById("locality").value;
            var district = document.getElementById("district").value;
            var state = document.getElementById("state").value;
            if(name.length === 0 || mobile.length === 0 || pin.length === 0 || address.length === 0 || locality.length === 0 || district.length === 0 || state.length === 0){
                alert("Address is not complete");
            }
            else {
                window.location.href = "payment";
            }
        }
//</script>