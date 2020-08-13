//  passar os dados para o front end dinâmicamente...
const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "11981441406",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica",
        cost: "20", 
        weeday: [0], 
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "Daniel Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "11981441406",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica",
        cost: "20", 
        weeday: [1], 
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "Mouzinho Raimundo", 
        avatar: "https://avatars2.githubusercontent.com/u/53385345?s=460&u=7b289b134a3a98a7cdf3c556eaf969142414c820&v=4", 
        whatsapp: "11981441406",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Física",
        cost: "20", 
        weeday: [1], 
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    
    "Artes",
    "Bíologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

// funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    // se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        
        data.subject = getSubject( data.subject)
        // adicionar data ao lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }
    // se não, mostrar a página
    return res.render("give-classes.html", { subjects, weekdays } )
}

// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// configurar o nunjucks (templete engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5500)