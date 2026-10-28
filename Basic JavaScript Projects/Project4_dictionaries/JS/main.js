// A JavaScript object can store a dictionary of key-value pairs.
function showDictionary() {
    var tool = { name: "Wrench", material: "Steel", use: "Tightening bolts" };
    document.getElementById("dictionary").textContent = "name: " + tool.name;
}

function deleteDictionaryKey() {
    var tool = { name: "Wrench", material: "Steel" };
    // Delete the key before reading it: the missing property returns undefined.
    delete tool.material;
    document.getElementById("deletedKey").textContent = "material after delete: " + tool.material;
}

function duplicateKey() {
    // The later value replaces the earlier value when a key is repeated.
    var tool = { name: "Hammer", name: "Wrench" };
    document.getElementById("duplicate").textContent = tool.name;
}
