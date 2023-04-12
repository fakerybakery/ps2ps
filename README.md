# ps2ps

(**p**od**s**pec2**p**ackage.**s**wift)

Convert your `podspec` files to `Package.swift` files easily.

## Online Demo
<style>
*{box-sizing:border-box;}
textarea{width:100%;height:150px;min-height:100px;max-height:200px;resize:vertical;border-radius:5px;outline:none;font-size:1em;border:2px solid #626262;}
textarea:focus{border-color:#007AFF}
</style>
<script src="ps2ps.js"></script>
<textarea name="" id="" oninput="runit(this.value)" cols="30" rows="10"></textarea>
<textarea name="" id="o" cols="30" rows="10"></textarea>
<script>
function runit(text) {
var res = convertPodspecToPackage(text)
if (!res) res = "Invalid podspec! Please try again..."
document.getElementById('o').value=res
}
</script>
