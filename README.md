# ps2ps

(**p**od**s**pec2**p**ackage.**s**wift)

Convert your `podspec` files to `Package.swift` files easily.

## Online Demo
<style>
*{box-sizing:border-box;}
textarea{width:100%;height:150px;min-height:100px;max-height:200px;resize:none;border-radius:5px;outline:none;font-size:1em;border:2px solid #626262;padding:10px 15px;font-family:inherit;width:49%;flex-grow:1;}
.textareas{display:flex;}
textarea:focus{border-color:#007AFF}
.spacer {
  margin: 0 5px;
}
</style>
<script src="ps2ps.js"></script>
<div class="textareas">
  <textarea name="" id="" oninput="runit(this.value)" autofocus placeholder="Paste the contents of your .podspec file here!"></textarea>
  <span class="spacer"></span>
<textarea id="o" readonly placeholder="Please enter some text..." onclick="this.select();"></textarea>
</div>
<script>
function runit(text) {var res=convertPodspecToPackage(text);if (!res) res = "Invalid podspec! Please try again...";document.getElementById('o').value=res;}
</script>
