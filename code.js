
var jsonURL = "https://script.googleusercontent.com/macros/echo?user_content_key=UjqtSP63dOxSztDgIKeB6PCOfJy_Z_IWsj2D3cVZzxQfKVqFK_G9FHSn6XKbvnFkhybfdU4pXR6sgpu41D-Oo3DOKUpHrS-Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOo_C6_HSUSIO_qGLR9ABKdtqA_vV92x1Ywdt-HyQ9A0QUwqBIx8gMDDXO6S5_QE7y0-6IqMJGIf&lib=MQnTVIASTnGfijcLnqggJE8qeSj0euZbs";


fetch(jsonURL)
.then(response => response.json())
.then(leon => {
    console.log(leon[0].No)
    document.querySelector("#leon").innerHTML = leon[0]
})