# ps2ps

Convert your `podspec` files to `Package.swift` files easily.

## Online Demo

<script src="ps2ps.js"></script>
<textarea name="" id="" oninput="runit(this.value)" cols="30" rows="10"></textarea>
<textarea name="" id="o" cols="30" rows="10"></textarea>
<script>
function runit(text) {
var res = convertPodspecToPackage(this.value)
if (!res) res = "Invalid podspec!"
document.getElementById('o').value=res
}
</script>
