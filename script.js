function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 5) {
                //Criança
                img.setAttribute('src', 'img/homemCrianca.png')
            }else if (idade <= 10) {
                //menino
                img.setAttribute('src', 'img/menino.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/homemJovem.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/homemAdulto.png')
            }else {
                //Idoso
                img.setAttribute('src', 'img/homemIdoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 5) {
                //Criança
                img.setAttribute('src', 'img/mulherCrianca.png')
            }else if (idade <= 10) {
                //menino
                img.setAttribute('src', 'img/menina.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/mulherJovem.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/mulherAdulta.png')
            }else {
                //Idoso
                img.setAttribute('src', 'img/mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}