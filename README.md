# ps2ps

(**p**od**s**pec2**p**ackage.**s**wift)

Convert your `podspec` files to `Package.swift` files easily.

## Online Demo

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
