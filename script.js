function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/homem1.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/homem2.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'img/homem3.png')
            } else {
                img.setAttribute('src', 'img/homem4.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/mulher1.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/mulher2.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'img/mulher3.png')
            } else {
                img.setAttribute('src', 'img/mulher4.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}